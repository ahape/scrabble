"use strict";
var MoveType;
(function (MoveType) {
    MoveType["Play"] = "PLAY";
    MoveType["Skip"] = "SKIP";
    MoveType["Swap"] = "SWAP";
    MoveType["Draw"] = "DRAW";
    MoveType["NewGame"] = "NEW GAME";
    MoveType["EndGame"] = "GAME OVER";
    MoveType["Unknown"] = "";
})(MoveType || (MoveType = {}));
