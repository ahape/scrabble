define(["require", "exports", "./lettervaluemap", "./multipliertype", "./parseletter"], function (require, exports, lettervaluemap_1, multipliertype_1, parseletter_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getPointsFromSquare = void 0;
    /**
     * Returns points for a letter played on a square.
     * In the case of a square representing a word-multiplier,
     * the multiplier is added to the `multipliers` argument for
     * later evaluation.
     */
    function getPointsFromSquare(sq, multipliers) {
        var points = lettervaluemap_1.letterValueMap[parseletter_1.parseLetter(sq.letter)];
        if (!sq.played) {
            if (sq.multiplierType === multipliertype_1.MultiplierType.Word) {
                multipliers.push(sq.multiplier);
            }
            else if (sq.multiplierType === multipliertype_1.MultiplierType.Letter) {
                points *= sq.multiplier;
            }
        }
        return points;
    }
    exports.getPointsFromSquare = getPointsFromSquare;
});
