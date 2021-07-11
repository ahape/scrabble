import * as ko from "knockout";
import * as _ from "underscore";
import { Game } from "scrabblecore";

class Moves {
    public moves: KnockoutComputed<string[]>;

    private _game: Game;

    public constructor(params: { game: Game }) {
        this._game = params.game;

        this.moves = ko.pureComputed(() => params.game.currentStatus().moveLog);
    }

    public onBestMoveClick = async (): Promise<void> => {
        const status = this._game.currentStatus();
        const params = $.param({
            board: _.flatten(status.board).join(""),
            rack: status.racks[status.teamTurn - 1].join(""),
        });
        const response = await fetch(`/rest/move?${params}`);
        console.log("Best move response", response);
    };
}

ko.components.register("moves", {
    viewModel: Moves,
    template: { require: "text!/templates/moves.html" },
});
