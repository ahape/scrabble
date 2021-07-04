import * as ko from "knockout";
import * as _ from "underscore";
import { Game } from "scrabblecore";

export class Bag {
    public remaining: KnockoutComputed<string[][]>;

    public constructor(game: Game) {
        this.remaining = ko.pureComputed(() => {
            var bag = game.currentStatus().bag.sort();

            // Returns key/value pairs as tuples [string, number]
            var pairs = _.pairs(_.countBy(bag, _.identity));

            return pairs.map((pair) => {
                return _.times(pair[1], () => pair[0]);
            });
        });
    }
}
