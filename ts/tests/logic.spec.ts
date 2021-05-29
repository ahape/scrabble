import { getPointsFromSquare } from "../scrabble/logic/getpointsfromsquare";
import { ISquare } from "../scrabble/logic/isquare";
import { Letter } from "../scrabble/logic/letter";
import { letterValueMap } from "../scrabble/logic/lettervaluemap";
import { Multiplier } from "../scrabble/logic/multiplier";
import { MultiplierType } from "../scrabble/logic/multipliertype";

describe("Logic", () => {
    describe("#getPointsFromSquare", () => {
        it("returns 1x value for normal square", () => {
            const sq: ISquare = {
                id: "",
                letter: Letter.Z,
                played: false,
                blankLetter: "",
                multiplier: Multiplier.None,
                multiplierType: MultiplierType.None,
            };

            const points = getPointsFromSquare(sq, []);

            console.assert(points === letterValueMap[sq.letter]);
        });
    });
});
