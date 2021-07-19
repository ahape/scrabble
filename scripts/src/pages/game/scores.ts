import * as ko from "knockout";
import { Game, getScoresFromActions } from "scrabblecore";

class Scores {
    public scores: KnockoutComputed<string[]>;
    public teamTurn: KnockoutComputed<number>;
    public isGameOver: KnockoutComputed<boolean>;
    public teamNumber: number;

    public constructor(params: { game: Game; teamNumber: number }) {
        const koStatus = params.game.currentStatus;

        this.scores = ko.pureComputed(() => {
            const s = koStatus();
            if (s.gameOver) {
                const state = params.game.snapshot();
                const pScores = getScoresFromActions(
                    state.actions.slice(0, -1),
                    params.game.teams
                );
                const cScores = getScoresFromActions(
                    state.actions,
                    params.game.teams
                );
                const scoreDiffs = pScores.map((p, i) => {
                    var diff = cScores[i] - p;
                    return diff > 0 ? "+" + diff : diff;
                });
                return s.scores.map(
                    (s, i) =>
                        `Team ${i + 1}: ${s} <small>[${scoreDiffs[i]}]</small>`
                );
            }
            return koStatus().scores.map((s, i) => `Team ${i + 1}: ${s}`);
        });

        this.teamTurn = ko.pureComputed(() => koStatus().teamTurn);
        this.isGameOver = ko.pureComputed(() => koStatus().gameOver);
        this.teamNumber = params.teamNumber;
    }
}

ko.components.register("scores", {
    viewModel: Scores,
    template: { require: "text!/templates/scores.html" },
});
