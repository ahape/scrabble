import * as ko from "knockout";
import { ISquare, Game, createBoardFromStatus } from "scrabblecore";

class Board {
    public board: KnockoutObservable<ISquare[][]>;

    public constructor(params: { game: Game }) {
        this.board = ko.pureComputed(() =>
            createBoardFromStatus(params.game.currentStatus())
        );
    }
}

ko.components.register("board", {
    viewModel: Board,
    template: { require: "text!/templates/board.html" },
});
