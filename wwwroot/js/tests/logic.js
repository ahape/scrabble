define(["require", "exports", "../scrabble/logic/getpointsfromsquare", "../scrabble/logic/letter", "../scrabble/logic/lettervaluemap"], function (require, exports, getpointsfromsquare_1, letter_1, lettervaluemap_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe("Logic", function () {
        describe("#getPointsFromSquare", function () {
            it("returns 1x value for normal square", function () {
                var sq = {
                    id: "",
                    letter: letter_1.Letter.Z,
                    played: false,
                };
                var points = getpointsfromsquare_1.getPointsFromSquare(sq, []);
                console.assert(points === lettervaluemap_1.letterValueMap[sq.letter]);
            });
        });
    });
});
