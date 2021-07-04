import * as ko from "knockout";
import { Game } from "scrabblecore";

class Scores {
    public scores: KnockoutComputed<string[]>;
    public teamTurn: KnockoutComputed<number>;
    public isGameOver: KnockoutComputed<boolean>;
    public teamNumber: number;

    public constructor(params: { game: Game; teamNumber: number }) {
        const status = params.game.currentStatus;

        this.scores = ko.pureComputed(() => {
            return status().scores.map((s, i) => `Team ${i + 1}: ${s}`);
        });

        this.teamTurn = ko.pureComputed(() => status().teamTurn);
        this.isGameOver = ko.pureComputed(() => status().gameOver);
        this.teamNumber = params.teamNumber;
    }
}

ko.components.register("scores", {
    viewModel: Scores,
    template: { require: "text!/templates/scores.html" },
});
