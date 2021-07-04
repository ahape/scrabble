import * as ko from "knockout";
import * as _ from "underscore";
import { Game } from "scrabblecore";

class Rack {
    public rack: KnockoutComputed<string[]>;

    public constructor(params: { rack: KnockoutObservableArray<string> }) {
        this.rack = ko.pureComputed(() => params.rack());
    }
}

ko.components.register("rack", {
    viewModel: Rack,
    template: { require: "text!/templates/rack.html" },
});
