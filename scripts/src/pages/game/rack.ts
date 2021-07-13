import * as ko from "knockout";
import * as _ from "underscore";
import { Game } from "scrabblecore";

class Rack {
    public rack: KnockoutComputed<string[]>;
    public isHiding: KnockoutObservable<boolean> = ko.observable(false);

    public constructor(params: { rack: KnockoutObservableArray<string> }) {
        this.rack = ko.pureComputed(() => params.rack());

        $(document).on("keypress", (event: JQueryKeyEventObject) => {
            if (event.keyCode === 104) { 
                this.isHiding(!this.isHiding());
            }
            return true;
        });
    }
}

ko.components.register("rack", {
    viewModel: Rack,
    template: { require: "text!/templates/rack.html" },
});
