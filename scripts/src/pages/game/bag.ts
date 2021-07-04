import * as _ from "underscore";
import { Game } from "scrabblecore";

export class Bag {
    public remaining: KnockoutComputed<Array<[string, number]>>;

    public constructor(game: Game) {
        this.remaining = ko.pureComputed(() => {
            var bag = game.currentStatus().bag.sort();
            // Returns key/value pairs as tuples [string, number]
            return _.pairs(_.countBy(bag, _.identity));
        });
    }
}
