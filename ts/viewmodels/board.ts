import * as ko from "knockout";
import { ISquare } from "../scrabble/logic/isquare";
import { Game } from "../scrabble/game";
import { Letter } from "../scrabble/logic/letter";
import { createNewBoard } from "../scrabble/logic/createnewboard";

export class Board {
    public board: KnockoutObservable<ISquare[][]>;

    public constructor(game: Game) {
        this.board = ko
            .observable(this._getBoard(game.status().board))
            .extend({ notify: "always" });
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
