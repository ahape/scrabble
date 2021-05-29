define(["require", "exports", "lettervaluemap", "letter", "multipliertype"], function (require, exports, lettervaluemap_1, letter_1, multipliertype_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var lowerCaseRx = /[a-z]/;
    /**
     * Returns points for a letter played on a square.
     * In the case of a square representing a word-multiplier,
     * the multiplier is added to the `multipliers` argument for
     * later evaluation.
     */
    function getPointsFromSquare(sq, multipliers) {
        var points = lettervaluemap_1.letterValueMap[lowerCaseRx.test(sq.letter) ? letter_1.Letter.BLANK : sq.letter];
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
