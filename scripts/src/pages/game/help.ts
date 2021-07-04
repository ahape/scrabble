import * as ko from "knockout";
import { constants as sc } from "scrabblecore";
import { freebies } from "../../constants";

class Help {
    public twoLetterWords: string[];
    public qWithoutU: string[];
    public letterValues: Array<[string, number]>;

    public constructor() {
        this.twoLetterWords = freebies.twoLetterWords;
        this.qWithoutU = freebies.qWithoutU;
        this.letterValues = Object.entries(sc.letterValueMap);

        // TODO: Determine if we even need an UNSET (null) value
        if ("UNSET" in sc.letterValueMap) this.letterValues.splice(0, 1);
    }
}

ko.components.register("help", {
    viewModel: Help,
    template: { require: "text!/templates/help.html" },
});
