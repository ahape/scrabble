define(["require", "exports", "../scrabble/game", "../scrabble/logic/createnewboard", "../scrabble/logic/letter"], function (require, exports, game_1, createnewboard_1, letter_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.App = void 0;
    var Board = /** @class */ (function () {
        function Board(game) {
            var _this = this;
            this.board = ko.observableArray(this._getBoard(game.status().board));
            game.currentStatus.subscribe(function (status) {
                return _this.board(_this._getBoard(status.board));
            });
        }
        Board.prototype._getBoard = function (board) {
            var newBoard = createnewboard_1.createNewBoard();
            for (var y = 0; y < board.length; y++)
                for (var x = 0; x < board[y].length; x++) {
                    var square = newBoard[y][x];
                    var cha = board[y][x];
                    if (cha) {
                        square.played = true;
                        if (/[a-z]/.test(cha)) {
                            square.letter = letter_1.Letter.BLANK;
                            square.blankLetter = cha;
                        }
                        else {
                            square.letter = cha;
                        }
                    }
                }
            return newBoard;
        };
        return Board;
    }());
    var Rack = /** @class */ (function () {
        function Rack(game, rackIndex) {
            var _this = this;
            this.rack = ko.observableArray(game.status().racks[rackIndex]);
            game.currentStatus.subscribe(function (status) {
                return _this.rack(status.racks[rackIndex]);
            });
        }
        return Rack;
    }());
    var App = /** @class */ (function () {
        function App() {
            var game = new game_1.Game(1);
            this._game = game;
            this.board = new Board(game);
            this.racks = game.status().racks.map(function (_, i) { return new Rack(game, i); });
        }
        return App;
    }());
    exports.App = App;
    var dragged;
    document.addEventListener("dragstart", function (event) {
        // store a ref of the dragged elem
        dragged = event.target;
    }, false);
    document.addEventListener("dragend", function (event) { }, false);
    /* events fired on the drop targets */
    document.addEventListener("dragover", function (event) {
        // prevent default to allow drop
        event.preventDefault();
    }, false);
    document.addEventListener("dragenter", function (event) {
        var $target = $(event.target);
        // highlight potential drop target when the draggable element enters it
        if ($target.hasClass("square")) {
            $target.addClass("purple");
        }
    }, false);
    document.addEventListener("dragleave", function (event) {
        var $target = $(event.target);
        // reset background of potential drop target when the draggable element leaves it
        if ($target.hasClass("square")) {
            $target.removeClass("purple");
        }
    }, false);
    document.addEventListener("drop", function (event) {
        // prevent default action (open as link for some elements)
        event.preventDefault();
        var $target = $(event.target);
        var sq = ko.dataFor(event.target);
        //
        // move dragged elem to the selected drop target
        //
        if (dragged &&
            $target.hasClass("square") &&
            $target.children().length == 0 &&
            !sq.played) {
            dragged.parentNode.removeChild(dragged);
            $target.append(dragged);
        }
        $target.removeClass("purple");
    }, false);
});
