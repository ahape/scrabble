import * as ko from "knockout";
import { Game } from "scrabblecore";

class Moves {
    public moves: KnockoutComputed<string[]>;

    public constructor(params: { game: Game }) {
        this.moves = ko.pureComputed(() => params.game.currentStatus().moveLog);
    }
}

ko.components.register("moves", {
    viewModel: Moves,
    template: { require: "text!/templates/moves.html" },
});
