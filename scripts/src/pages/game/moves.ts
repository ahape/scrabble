import { Game } from "scrabblecore";

export class Moves {
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
