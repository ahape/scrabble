import * as _ from "underscore";
import * as ko from "knockout";
import {
    Game,
    Letter,
    ActionType,
    ISquare,
    createPlayCommand,
    createBoardFromStatus,
    parseSquareCoordinates,
    constants as sc,
} from "scrabblecore";

class Buttons {
    private _game: Game;
    private _rack: KnockoutObservableArray<string>;
    private _clicked: KnockoutObservable<string> = ko.observable("");

    public canGo: KnockoutComputed<boolean>;
    public canDraw: KnockoutComputed<boolean>;

    public constructor(params: {
        game: Game;
        rack: KnockoutObservableArray<string>;
        onClick: KnockoutObservable<string>;
        teamNumber: number;
    }) {
        this._game = params.game;
        this._rack = params.rack;
        this._clicked = params.onClick;

        this.canGo = ko.pureComputed(
            () => this._game.currentStatus().teamTurn === params.teamNumber
        );

        this.canDraw = ko.pureComputed(() => {
            const status = this._game.currentStatus();
            const rack = status.racks[params.teamNumber - 1];
            return status.bag.length > 0 && rack.length < sc.MAX_RACK_TILES;
        });
    }

    public onDrawClick = (event: JQueryEventObject): void => {
        this._game.draw();

        this._clicked("draw");
    };

    public onRecallClick = (event: JQueryEventObject): void => {
        this._game.currentState(this._game.snapshot());
        this._game.currentStatus(this._game.status());

        this._clicked("recall");
    };

    public onShuffleClick = (event: JQueryEventObject): void => {
        this._rack(_.shuffle(this._rack()));

        this._clicked("shuffle");
    };

    public onSkipClick = (event: JQueryEventObject): void => {
        if (confirm("Are you sure you want to skip your turn?")) {
            this._game.skip();
            this._clicked("skip");
        }
    };

    public onSwapClick = (event: JQueryEventObject): void => {
        const letters = prompt(
            "Which letters do you want exchange? (Denote blank tiles as '?')"
        );
        if (letters) {
            try {
                this._game.swap(ActionType.Swap + " " + letters.toUpperCase());
                this._clicked("swap");
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
        const board = createBoardFromStatus(this._game.currentStatus());

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
            const playCommand = createPlayCommand(move, board);

            this._game.play("PLAY " + playCommand);
        } catch (err) {
            alert(err.message);
            return;
        }

        this._clicked("play");
    };
}

ko.components.register("buttons", {
    viewModel: Buttons,
    template: { require: "text!/templates/buttons.html" },
});
