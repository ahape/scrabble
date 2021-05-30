import { Letter } from "./logic/letter";
import { MAX_RACK_TILES } from "./logic/constants";

export class Rack {
    public letters: Letter[] = [];

    public count(): number {
        return this.letters.length;
    }

    public needs(): number {
        return MAX_RACK_TILES - this.count();
    }

    public add(letters: Letter[]): void {
        for (
            let i = 0;
            i < letters.length && this.letters.length <= MAX_RACK_TILES;
            i++
        )
            this.letters.push(letters[i]);
    }

    public remove(letters: Letter[]): void {
        for (const letter of letters) {
            const existingIndex = this.letters.indexOf(letter);
            if (existingIndex > -1) this.letters.splice(existingIndex, 1);
        }
    }

    public print(): string {
        return "[" + this.letters.join("") + "]";
    }
}
