import * as ko from "knockout";
import * as _ from "underscore";
import { Game } from "scrabblecore";

class Bag {
    public remaining: KnockoutComputed<string[][]>;

    public constructor(params: { game: Game }) {
        this.remaining = ko.pureComputed(() => {
            var status = params.game.currentStatus();
            var bagAndRackLetters = status.bag
                .concat(_.flatten(status.racks))
                .sort();

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
