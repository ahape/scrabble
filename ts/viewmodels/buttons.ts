import $ from "jquery";
import * as _ from "underscore";
import * as ko from "knockout";
import { Rack } from "./rack";
import { Board } from "./board";
import { Game } from "../scrabble/game";
import { Letter } from "../scrabble/logic/letter";
import { ActionType } from "../scrabble/logic/actiontype";
import { ISquare } from "../scrabble/logic/isquare";
import { MAX_RACK_TILES } from "../scrabble/logic/constants";
import { createCommandFromMove } from "../scrabble/logic/createcommandfrommove";
import { parseSquareCoordinates } from "../scrabble/logic/parsesquarecoordinates";

export class Buttons {
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

