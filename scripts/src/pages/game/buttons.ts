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
    parseAction,
    parsePlayCommand,
    playMove,
    createBoardFromActions,
    constants as sc,
} from "scrabblecore";

class Buttons {
    private _game: Game;
    private _rack: KnockoutObservableArray<string>;
    private _clicked: (eventName: string) => void;

    public canGo: KnockoutComputed<boolean>;
    public canDraw: KnockoutComputed<boolean>;
    public canChallenge: KnockoutComputed<boolean>;

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
            // Meh, explicitly subscribe to changes
            this._game.currentStatus();
            return this._game.canDraw();
        });

        this.canChallenge = ko.pureComputed(() => {
            const state = this._game.currentState();
            const lastAction = state.actions[state.actionIndex];

            // Can only challenge is the last action was a "PLAY"
            return lastAction.indexOf("PLAY ") === 0;
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

    public onChallengeClick(): void {
        if (
            this.canChallenge() &&
            confirm("Are you sure you want to challenge?")
        ) {
            this._checkIfMoveIsValid().then((result) => {
                if (result) this._handleMoveValidityResult(result);
            });
        }
    }

    private async _checkIfMoveIsValid(): Promise<Record<
        string,
        boolean
    > | null> {
        let result: Record<string, boolean> | null = null;
        try {
            const actionIndex = this._game.actionIndex;
            const [, cmd] = parseAction(this._game.actions[actionIndex]);
            const lastMove = parsePlayCommand(cmd);
            const boardBeforeLastMove = createBoardFromActions(
                this._game.actions.slice(0, actionIndex)
            );
            const playResult = playMove(lastMove, boardBeforeLastMove);
            const words = playResult.words.map((x) => x.word);

            const response = await fetch(
                `/rest/move/validate?words=${words.join(",")}`
            );

            if (!response.ok) return null;

            result = ((await response.json()) as {
                answer: Record<string, boolean>;
            }).answer;
        } catch (err) {
            alert("Unable to challenge word");
        }

        return result;
    }

    private _handleMoveValidityResult(result: Record<string, boolean>): void {
        let anyInvalid = false;
        let summary = "";

        Object.keys(result).forEach((word) => {
            let isValid = result[word];
            summary += `${word} -> ${isValid}\n`;
            if (!isValid) anyInvalid = true;
        });

        if (anyInvalid) {
            summary += "\nUndoing last move and skipping turn";
            this._game.undo();
            this._game.skip();
            this._clicked("challenge");
        }

        alert(summary);
    }
}

ko.components.register("buttons", {
    viewModel: Buttons,
    template: { require: "text!/templates/buttons.html" },
});
