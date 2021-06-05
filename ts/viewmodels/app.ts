import { ISquare } from "../scrabble/logic/isquare";
import { Game } from "../scrabble/game";
import { createNewBoard } from "../scrabble/logic/createnewboard";
import { Letter } from "../scrabble/logic/letter";

class Board {
    public board: KnockoutObservableArray<ISquare[]>;

    public constructor(game: Game) {
        this.board = ko.observableArray(this._getBoard(game.status().board));
        game.currentStatus.subscribe((status) =>
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
    public rack: KnockoutObservableArray<string>;

    public constructor(game: Game, rackIndex: number) {
        this.rack = ko.observableArray(game.status().racks[rackIndex]);
        game.currentStatus.subscribe((status) =>
            this.rack(status.racks[rackIndex])
        );
    }
}

export class App {
    private _game: Game;
    public board: Board;
    public racks: Rack[];

    public constructor() {
        const game = new Game(1);

        this._game = game;
        this.board = new Board(game);
        this.racks = game.status().racks.map((_, i) => new Rack(game, i));
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
        }

        $target.removeClass("purple");
    },
    false
);
