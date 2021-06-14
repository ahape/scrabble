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
import { ActionType } from "../scrabble/logic/actiontype";
import { IGameState } from "../scrabble/igamestate";
import { IGamePlayer } from "../scrabble/igameplayer";
import { freebies } from "../scrabble/freebies";
import { MAX_RACK_TILES } from "../scrabble/logic/constants";

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

interface IResponse {
    success: boolean;
    errorMessage?: string;
}
interface IUpdateResponse extends IResponse {
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

        game.currentStatus.subscribe((status) => {
            // Because of the way we mutate the array via drag and drop
            this.rack.removeAll();
            this.rack(status.racks[rackIndex]);
        });
    }

    public shuffle(): void {
        let letters = this.rack();
        letters = _.shuffle(letters);
        this.rack(letters);
    }
}

class Buttons {
    private _game: Game;
    private _board: Board;
    private _rack: Rack;

    public canGo: KnockoutComputed<boolean>;
    public clicked: KnockoutObservable<string> = ko.observable("");
    public canDraw: KnockoutComputed<boolean>;

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

        this.canDraw = ko.pureComputed(() => {
            const status = game.currentStatus();
            const rack = status.racks[teamNumber - 1];
            return status.bag.length > 0 && rack.length < MAX_RACK_TILES;
        });
    }

    public onDrawClick = (event: JQueryEventObject): void => {
        this._game.draw();

        this.clicked("draw");
    };

    public onRecallClick = (event: JQueryEventObject): void => {
        this._game.currentState(this._game.snapshot());
        this._game.currentStatus(this._game.status());

        /*
        this._rack.rack([]);
        this._rack.rack(status.racks[this._rack.index]); // TODO Why tf has it come down to doing THIS?
        */

        this.clicked("recall");
    };

    public onShuffleClick = (event: JQueryEventObject): void => {
        this._rack.shuffle();

        this.clicked("shuffle");
    };

    public onSkipClick = (event: JQueryEventObject): void => {
        this._game.skip();

        this.clicked("skip");
    };

    public onSwapClick = (event: JQueryEventObject): void => {
        const letters = prompt(
            "Which letters do you want exchange? (Denote blank tiles as '?')"
        );
        if (letters) {
            try {
                this._game.swap(ActionType.Swap + " " + letters.toUpperCase());
                this.clicked("swap");
            } catch (err) {
                alert(err.message);
            }
        }
    };

    public onPlayClick = (event: JQueryEventObject): void => {
        const $placed = $(`.board .letter`);
        if ($placed.length === 0) {
            alert("No tiles were placed on the board");
            return;
        }
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

class Scores {
    public isGameOver: KnockoutComputed<boolean>;
    public scores: KnockoutComputed<string[]>;

    public constructor(game: Game) {
        this.scores = ko.pureComputed(() => {
            var status = game.currentStatus();
            return status.scores.map((s, i) => `Team ${i + 1}: ${s}`);
        });

        this.isGameOver = ko.pureComputed(() => game.currentStatus().gameOver);
    }
}

class Moves {
    public moves: KnockoutComputed<string[]>;
    public move: KnockoutComputed<string>;

    public constructor(game: Game) {
        this.moves = ko.pureComputed(() => game.currentStatus().moveLog);
        this.move = ko.pureComputed(() => {
            var state = game.snapshot();
            var status = game.currentStatus();
            return status.moveLog[state.actionIndex];
        });
    }
}

class Bag {
    public remaining: KnockoutComputed<Array<[string, number]>>;

    public constructor(game: Game) {
        this.remaining = ko.pureComputed(() => {
            var bag = game.currentStatus().bag.sort();
            // Returns key/value pairs as tuples [string, number]
            return _.pairs(_.countBy(bag, _.identity));
        });
    }
}

class Teams {
    public teams: number[];
    public playersByTeam: Record<string, IGamePlayer[]>;

    public constructor(teams: number, players: IGamePlayer[]) {
        this.teams = _.range(1, teams + 1);
        this.playersByTeam = _.groupBy(players, "team");
    }
}

class Freebies {
    public twoLetterWords: string[];
    public qWithoutU: string[];

    public constructor(freebies: {
        twoLetterWords: string[];
        qWithoutU: string[];
    }) {
        this.twoLetterWords = freebies.twoLetterWords;
        this.qWithoutU = freebies.qWithoutU;
    }
}

class Options {
    public clicked: KnockoutObservable<string> = ko.observable("");
    public constructor(private _game: Game, private _userName: string) {}

    public onDeleteClick(): void {
        if (confirm("Are you sure you want to delete this game?"))
            this._handleDelete();

        this.clicked("delete");
    }

    public onLeaveClick(): void {
        if (confirm("Are you sure you want to leave this game?"))
            this._handleLeave();

        this.clicked("leave");
    }

    public onUndoClick(): void {
        this._game.undo();

        this.clicked("undo");
    }

    public onRedoClick(): void {
        this._game.redo();

        this.clicked("redo");
    }

    private async _handleDelete(): Promise<void> {
        var response = await fetch(`/rest/games/${this._game.id}`, {
            method: "DELETE",
        });
        if (((await response.json()) as IResponse).success)
            location.assign("/games");
    }

    private async _handleLeave(): Promise<void> {
        var response = await fetch(
            `/rest/players/${this._game.id}?userName=${this._userName}`,
            {
                method: "DELETE",
            }
        );
        if (((await response.json()) as IResponse).success)
            location.assign("/games");
    }
}

enum MainView {
    Board = "board",
    Moves = "moves",
    Bag = "bag",
    Teams = "teams",
    Freebies = "freebies",
    Options = "options",
}

export class App {
    private _socketConnection: SignalRConnection;
    private _game: Game;
    private _timestamp: number;
    public teamNumber: number;
    public board: Board;
    public rack: Rack;
    public buttons: Buttons;
    public moves: Moves;
    public scores: Scores;
    public bag: Bag;
    public teams: Teams;
    public freebies: Freebies;
    public options: Options;
    public teamTurn: KnockoutComputed<number>;
    public mainView: KnockoutObservable<MainView>;
    public mainViewOptions: string[];

    /**
     * @param {teamNumber} - Team the current client is on
     * @param {timestamp} - Essentially an ETag of the current game state
     */
    public constructor(
        gameJson: IGameState,
        players: IGamePlayer[],
        teamNumber: number,
        timestamp: number,
        userName: string
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
        this.moves = new Moves(game);
        this.scores = new Scores(game);
        this.bag = new Bag(game);
        this.teams = new Teams(game.teams, players);
        this.freebies = new Freebies(freebies);
        this.options = new Options(game, userName);
        this.teamTurn = ko.pureComputed(() => game.currentStatus().teamTurn);
        this.mainView = ko.observable(MainView.Board);
        this.mainViewOptions = Object.values(
            MainView as Record<string, string>
        );

        // Buttons that actually change the state of the game.
        const stateChangingButtons = [
            "draw",
            "play",
            "skip",
            "swap",
            "undo",
            "redo",
        ];
        const onButtonClick = (btn: string) => {
            if (stateChangingButtons.includes(btn)) {
                this._updateGame(game.snapshot()).then((response) =>
                    this._handleUpdateResponse(response)
                );
            }
        };

        this.options.clicked.subscribe(onButtonClick);
        this.buttons.clicked.subscribe(onButtonClick);

        // TODO Debug only
        this._game.currentState.subscribe((s) =>
            // NOTE: Currently "recall" click manipulates the state to force an update
            console.log("Game state updated", s)
        );

        // TODO Make receiving object be better
        this._socketConnection.on("GameUpdate", (...args: any[]) => {
            const state = args[0];

            console.log("Received state from SignalR ", state);

            state.actions = state.actions.split(",");

            this._timestamp = state.timestamp;
            delete state.timestamp;

            if (!_.isEqual(this._game.currentState(), state))
                this._game.load(state);
        });

        this._socketConnection.on("GroupUpdate", (...args: any[]) => {
            console.log(...args);
        });

        this._socketConnection
            .start()
            .then(() =>
                this._socketConnection.invoke("AddToGroup", this._game.id)
            )
            .catch((err) => console.log(err));
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
            $target.addClass("drop-target");
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
            $target.removeClass("drop-target");
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
        }

        $target.removeClass("drop-target");
    },
    false
);
