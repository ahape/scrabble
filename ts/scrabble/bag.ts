import * as _ from "underscore";
import { Letter } from "./logic/letter";

export class Bag {
    private _letters: Letter[];

    public constructor(without?: Letter[]) {
        // TODO: Handle "without"

        this._letters = _.flatten([
            _.times(2, () => Letter.BLANK),
            _.times(9, () => Letter.A),
            _.times(2, () => Letter.B),
            _.times(2, () => Letter.C),
            _.times(4, () => Letter.D),
            _.times(12, () => Letter.E),
            _.times(2, () => Letter.F),
            _.times(3, () => Letter.G),
            _.times(2, () => Letter.H),
            _.times(9, () => Letter.I),
            _.times(1, () => Letter.J),
            _.times(1, () => Letter.K),
            _.times(4, () => Letter.L),
            _.times(2, () => Letter.M),
            _.times(6, () => Letter.N),
            _.times(8, () => Letter.O),
            _.times(2, () => Letter.P),
            _.times(1, () => Letter.Q),
            _.times(6, () => Letter.R),
            _.times(4, () => Letter.S),
            _.times(6, () => Letter.T),
            _.times(4, () => Letter.U),
            _.times(2, () => Letter.V),
            _.times(2, () => Letter.W),
            _.times(1, () => Letter.X),
            _.times(2, () => Letter.Y),
            _.times(1, () => Letter.Z),
        ]);
    }

    public count(): number {
        return this._letters.length;
    }

    public draw(count: number): Letter[] {
        this._letters = _.shuffle(this._letters);
        return this._letters.splice(0, count);
    }

    public swap(letters: Letter[]): Letter[] {
        const drawn = this.draw(letters.length);
        this._letters.push(...letters);
        return drawn;
    }

    public print(): string {
        return JSON.stringify(_.countBy(this._letters.sort()));
    }
}
