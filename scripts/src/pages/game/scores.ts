import * as ko from "knockout";
import { Game } from "scrabblecore";

export class Scores {
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
