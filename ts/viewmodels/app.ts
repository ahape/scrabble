//import * as signalR from "@aspnet/signalr";
import $ from "jquery";
import * as _ from "underscore";
import * as ko from "knockout";
import { ISquare } from "../scrabble/logic/isquare";
import { Game } from "../scrabble/game";
import { createNewBoard } from "../scrabble/logic/createnewboard";
import { createCommandFromMove } from "../scrabble/logic/createcommandfrommove";
import { parseSquareCoordinates } from "../scrabble/logic/parsesquarecoordinates";
import { Letter } from "../scrabble/logic/letter";
import { IGameState } from "../scrabble/igamestate";

interface SignalR {
    HubConnectionBuilder: SignalRConnectionBuilderConstructor;
}

interface SignalRConnectionBuilderConstructor {
    new (): SignalRConnectionBuilder;
}

interface SignalRConnectionBuilder {
    withUrl(
        endpoint: string
    ): {
        build(): SignalRConnection;
    };
}

interface SignalRConnection {
    on(event: string, cb: (...args: string[]) => void): void;
    start(): Promise<unknown>;
    invoke(event: string, ...args: string[]): Promise<unknown>;
}

declare const signalR: SignalR;

interface IUpdateResponse {
    success: boolean;
    errorMessage?: string;
    data?: IGameState;
    timestamp?: number;
}

class Board {
    public board: KnockoutObservable<ISquare[][]>;

    public constructor(game: Game) {
        this.board = ko
            .observable(this._getBoard(game.status().board))
            .extend({ notify: "always" });
        game.currentStatus.subscribe((status) =>
            //console.log("updated");
            this.board(this._getBoard(status.board))
        );
    }

    private _getBoard(board: string[][]): ISquare[][] {
        const newBoard = createNewBoard();

        for (let y = 0; y < board.length; y++)
            for (let x = 0; x < board[y].length; x++) {
                const square = newBoard[y][x];
                const cha = board[y][x];
                if (cha) {
                    square.played = true;
                    if (/[a-z]/.test(cha)) {
                        square.letter = Letter.BLANK;
                        square.blankLetter = cha;
                    } else {
                        square.letter = cha as Letter;
                    }
                }
            }

        return newBoard;
    }
}

class Rack {
    public index: number;
    public rack: KnockoutObservableArray<string>;

    public constructor(game: Game, rackIndex: number) {
        this.index = rackIndex;
        this.rack = ko.observableArray(game.status().racks[rackIndex]);

        game.currentStatus.subscribe((status) =>
            this.rack(status.racks[rackIndex])
        );
    }
}

class Buttons {
    private _game: Game;
    private _board: Board;
    private _rack: Rack;

    public canGo: KnockoutComputed<boolean>;
    public clicked: KnockoutObservable<string> = ko.observable("");

    public constructor(
        game: Game,
        board: Board,
        rack: Rack,
        teamNumber: number
    ) {
        this._game = game;
        this._board = board;
        this._rack = rack;

        this.canGo = ko.pureComputed(
            () => game.currentStatus().teamTurn === teamNumber
        );
    }

    public onDrawClick = (event: JQueryEventObject): void => {
        this._game.draw();

        this.clicked("draw");
    };

    public onRecallClick = (event: JQueryEventObject): void => {
        const status = this._game.currentStatus();

        this._game.currentStatus.notifySubscribers(status);
        this._rack.rack([]);
        this._rack.rack(status.racks[this._rack.index]); // TODO Why tf has it come down to doing THIS?

        this.clicked("recall");
    };

    public onPlayClick = (event: JQueryEventObject): void => {
        const $placed = $(`.board .letter`);
        const move: ISquare[] = [];
        const board = ko.toJS(this._board.board()); // Copy since we're mutating
        $placed.each(function (this: HTMLElement) {
            let letter = ko.dataFor(this);
            const square = ko.toJS(ko.dataFor(this.parentNode!)); // Copy since we're mutating
            const isBlank = letter == "?";
            square.letter = isBlank ? Letter.BLANK : (letter as Letter);
            if (isBlank) {
                letter = prompt("What letter is the blank?");

                if (!letter || typeof letter !== "string")
                    return alert("Invalid letter");
                square.letter = letter.toLowerCase();
            }
            move.push(square);
            const [x, y] = parseSquareCoordinates(square);
            board[y][x] = square;
        });

        try {
            const playCommand = createCommandFromMove(move, board);

            this._game.play("PLAY " + playCommand);
        } catch (err) {
            alert(err.message);
            return;
        }

        this.clicked("play");
    };
}

export class App {
    private _socketConnection: SignalRConnection;
    private _game: Game;
    private _timestamp: number;
    public teamNumber: number;
    public board: Board;
    public rack: Rack;
    public buttons: Buttons;

    /**
     * @param {teamNumber} - Team the current client is on
     * @param {timestamp} - Essentially an ETag of the current game state
     */
    public constructor(
        gameJson: IGameState,
        teamNumber: number,
        timestamp: number
    ) {
        const game = new Game(gameJson);

        this._socketConnection = new signalR.HubConnectionBuilder()
            .withUrl("/chatHub")
            .build();
        this._game = game;
        this._timestamp = timestamp;

        this.teamNumber = teamNumber;
        this.board = new Board(game);
        this.rack = new Rack(game, teamNumber - 1);
        this.buttons = new Buttons(game, this.board, this.rack, teamNumber);

        this.buttons.clicked.subscribe((btn) => {
            if (btn === "draw" || btn === "play") {
                this._updateGame(game.snapshot()).then((response) =>
                    this._handleUpdateResponse(response)
                );
            }
        });

        // TODO Debug only
        this._game.currentState.subscribe((s) =>
            console.log("Game state updated", s)
        );

        // TODO Make receiving object be better
        this._socketConnection.on("ReceiveMessage", (...args: any[]) => {
            const state = args[0];

            console.log("Received state from SignalR ", state);

            state.actions = state.actions.split(",");

            this._timestamp = state.timestamp;
            delete state.timestamp;

            if (!_.isEqual(this._game.currentState(), state))
                this._game.load(state);
        });

        this._socketConnection.start().catch((err) => console.log(err));
    }

    private _handleUpdateResponse(response: IUpdateResponse): void {
        if (response.success) {
            if (!response.data || !response.timestamp)
                throw new Error("No data with successful request");

            this._timestamp = response.timestamp;
        } else {
            alert(
                response.errorMessage ||
                    "There was an error updating the game. Please refresh for the latest state"
            );
        }
    }

    private async _updateGame(gameState: IGameState): Promise<IUpdateResponse> {
        const body = $.param({
            timestamp: this._timestamp,
            ...gameState,
        });

        const response = await fetch("/rest/games/" + gameState.id, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body,
        });

        return response.json();
    }
}

let dragged: HTMLElement | null;

document.addEventListener(
    "dragstart",
    function (event) {
        // store a ref of the dragged elem
        dragged = event.target as HTMLElement;
    },
    false
);

document.addEventListener("dragend", function (event) {}, false);

/* events fired on the drop targets */
document.addEventListener(
    "dragover",
    function (event) {
        // prevent default to allow drop
        event.preventDefault();
    },
    false
);

document.addEventListener(
    "dragenter",
    function (event) {
        const $target = $(event.target!) as JQuery<HTMLElement>;
        // highlight potential drop target when the draggable element enters it
        if ($target.hasClass("square")) {
            $target.addClass("purple");
        }
    },
    false
);

document.addEventListener(
    "dragleave",
    function (event) {
        const $target = $(event.target!) as JQuery<HTMLElement>;
        // reset background of potential drop target when the draggable element leaves it
        if ($target.hasClass("square")) {
            $target.removeClass("purple");
        }
    },
    false
);

document.addEventListener(
    "drop",
    function (event) {
        // prevent default action (open as link for some elements)
        event.preventDefault();

        const $target = $(event.target!) as JQuery<HTMLElement>;
        const sq = ko.dataFor(event.target as HTMLElement) as ISquare;
        //
        // move dragged elem to the selected drop target
        //
        if (
            dragged &&
            $target.hasClass("square") &&
            $target.children().length == 0 &&
            !sq.played
        ) {
            dragged.parentNode!.removeChild(dragged);
            $target.append(dragged);
            /*
            const letter = ko.dataFor(dragged);
            const rack = ko.contextFor(dragged).$parent;
            rack.rack.remove(letter);
            */
        }

        $target.removeClass("purple");
    },
    false
);
