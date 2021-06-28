import * as ko from "knockout";
import * as _ from "underscore";
import { Game } from "../scrabble/game";

export class Rack {
    public index: number;
    public rack: KnockoutObservableArray<string>;

    public constructor(game: Game, rackIndex: number) {
        this.index = rackIndex;
        this.rack = ko.observableArray(game.status().racks[rackIndex]);

        game.currentStatus.subscribe((status) => {
            // Because of the way we mutate the array via drag and drop
            this.rack.removeAll();
            this.rack(status.racks[rackIndex]);
        });
    }

    public shuffle(): void {
        let letters = this.rack();
        letters = _.shuffle(letters);
        this.rack(letters);
    }
}
