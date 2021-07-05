import * as ko from "knockout";
import { Multiplier, MultiplierType, constants as sc } from "scrabblecore";
import { freebies } from "../../constants";

class Help {
    public twoLetterWords: string[];
    public qWithoutU: string[];
    public letterValues: Array<[string, number]>;
    public squareValues: Array<[string, string]>;

    public constructor() {
        this.twoLetterWords = freebies.twoLetterWords;
        this.qWithoutU = freebies.qWithoutU;
        this.letterValues = Object.entries(sc.letterValueMap);
        // TODO: Determine if we even need an UNSET (null) value.
        // The `splice` here is removing it from displaying.
        this.letterValues.splice(0, 1);
        this.squareValues = this._getSquareValues();
    }

    private _getSquareValues(): Array<[string, string]> {
        const ms = [Multiplier.Double, Multiplier.Triple];
        const mTypes = [MultiplierType.Letter, MultiplierType.Word];
        const squareValues: Array<[string, string]> = [];

        for (let i = 0; i < mTypes.length; i++) {
            for (let j = 0; j < ms.length; j++) {
                squareValues.push([
                    mTypes[i] + ms[j], // E.g. word2, letter2
                    // E.g. "2 times the letter's value"
                    ms[j] + "x the " + mTypes[i] + "'s value",
                ]);
            }
        }

        return squareValues;
    }
}

ko.components.register("help", {
    viewModel: Help,
    template: { require: "text!/templates/help.html" },
});
