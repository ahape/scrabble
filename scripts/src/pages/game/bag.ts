import * as ko from "knockout";
import * as _ from "underscore";
import { Game, IGameStatus } from "scrabblecore";

function getBagAndRackLetters(gameStatus: IGameStatus): string[] {
    return gameStatus.bag.concat(_.flatten(gameStatus.racks)).sort();
}

class Bag {
    public remainingCount: KnockoutComputed<number>;
    public remaining: KnockoutComputed<string[][]>;

    public constructor(params: { game: Game }) {
        // Includes bag + rack so no one can cheat via deductive reasoning
        this.remainingCount = ko.pureComputed(
            () => getBagAndRackLetters(params.game.currentStatus()).length
        );
        this.remaining = ko.pureComputed(() => {
            var bagAndRackLetters = getBagAndRackLetters(
                params.game.currentStatus()
            );
            // Returns key/value pairs as tuples [string, number]
            var pairs = _.pairs(_.countBy(bagAndRackLetters, _.identity));

            return pairs.map((pair) => {
                return _.times(pair[1], () => pair[0]);
            });
        });
    }
}

ko.components.register("bag", {
    viewModel: Bag,
    template: { require: "text!/templates/bag.html" },
});
