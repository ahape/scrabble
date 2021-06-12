var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "jquery", "underscore", "knockout", "../scrabble/game", "../scrabble/logic/createnewboard", "../scrabble/logic/createcommandfrommove", "../scrabble/logic/parsesquarecoordinates", "../scrabble/logic/letter"], function (require, exports, jquery_1, _, ko, game_1, createnewboard_1, createcommandfrommove_1, parsesquarecoordinates_1, letter_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.App = void 0;
    jquery_1 = __importDefault(jquery_1);
    _ = __importStar(_);
    ko = __importStar(ko);
    console.log("hey there howya dune");
    var Board = /** @class */ (function () {
        function Board(game) {
            var _this = this;
            this.board = ko
                .observable(this._getBoard(game.status().board))
                .extend({ notify: "always" });
            game.currentStatus.subscribe(function (status) {
                //console.log("updated");
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
            this.index = rackIndex;
            this.rack = ko.observableArray(game.status().racks[rackIndex]);
            game.currentStatus.subscribe(function (status) {
                return _this.rack(status.racks[rackIndex]);
            });
        }
        return Rack;
    }());
    var Buttons = /** @class */ (function () {
        function Buttons(game, board, rack, teamNumber) {
            var _this = this;
            this.clicked = ko.observable("");
            this.onDrawClick = function (event) {
                _this._game.draw();
                _this.clicked("draw");
            };
            this.onRecallClick = function (event) {
                var status = _this._game.currentStatus();
                _this._game.currentStatus.notifySubscribers(status);
                _this._rack.rack([]);
                _this._rack.rack(status.racks[_this._rack.index]); // TODO Why tf has it come down to doing THIS?
                _this.clicked("recall");
            };
            this.onPlayClick = function (event) {
                var $placed = jquery_1.default(".board .letter");
                var move = [];
                var board = ko.toJS(_this._board.board()); // Copy since we're mutating
                $placed.each(function () {
                    var letter = ko.dataFor(this);
                    var square = ko.toJS(ko.dataFor(this.parentNode)); // Copy since we're mutating
                    var isBlank = letter == "?";
                    square.letter = isBlank ? letter_1.Letter.BLANK : letter;
                    if (isBlank) {
                        letter = prompt("What letter is the blank?");
                        if (!letter || typeof letter !== "string")
                            return alert("Invalid letter");
                        square.letter = letter.toLowerCase();
                    }
                    move.push(square);
                    var _a = parsesquarecoordinates_1.parseSquareCoordinates(square), x = _a[0], y = _a[1];
                    board[y][x] = square;
                });
                try {
                    var playCommand = createcommandfrommove_1.createCommandFromMove(move, board);
                    _this._game.play("PLAY " + playCommand);
                }
                catch (err) {
                    alert(err.message);
                    return;
                }
                _this.clicked("play");
            };
            this._game = game;
            this._board = board;
            this._rack = rack;
            this.canGo = ko.pureComputed(function () { return game.currentStatus().teamTurn === teamNumber; });
        }
        return Buttons;
    }());
    var App = /** @class */ (function () {
        /**
         * @param {teamNumber} - Team the current client is on
         * @param {timestamp} - Essentially an ETag of the current game state
         */
        function App(gameJson, teamNumber, timestamp) {
            var _this = this;
            var game = new game_1.Game(gameJson);
            this._socketConnection = new signalR.HubConnectionBuilder()
                .withUrl("/chatHub")
                .build();
            this._game = game;
            this._timestamp = timestamp;
            this.teamNumber = teamNumber;
            this.board = new Board(game);
            this.rack = new Rack(game, teamNumber - 1);
            this.buttons = new Buttons(game, this.board, this.rack, teamNumber);
            this.buttons.clicked.subscribe(function (btn) {
                if (btn === "draw" || btn === "play") {
                    _this._updateGame(game.snapshot()).then(function (response) {
                        return _this._handleUpdateResponse(response);
                    });
                }
            });
            // TODO Debug only
            this._game.currentState.subscribe(function (s) {
                return console.log("Game state updated", s);
            });
            // TODO Make receiving object be better
            this._socketConnection.on("ReceiveMessage", function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var state = args[0];
                console.log("Received state from SignalR ", state);
                state.actions = state.actions.split(",");
                _this._timestamp = state.timestamp;
                delete state.timestamp;
                if (!_.isEqual(_this._game.currentState(), state))
                    _this._game.load(state);
            });
            this._socketConnection.start().catch(function (err) { return console.log(err); });
        }
        App.prototype._handleUpdateResponse = function (response) {
            if (response.success) {
                if (!response.data || !response.timestamp)
                    throw new Error("No data with successful request");
                this._timestamp = response.timestamp;
            }
            else {
                alert(response.errorMessage ||
                    "There was an error updating the game. Please refresh for the latest state");
            }
        };
        App.prototype._updateGame = function (gameState) {
            return __awaiter(this, void 0, void 0, function () {
                var body, response;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            body = jquery_1.default.param(__assign({ timestamp: this._timestamp }, gameState));
                            return [4 /*yield*/, fetch("/rest/games/" + gameState.id, {
                                    method: "POST",
                                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                                    body: body,
                                })];
                        case 1:
                            response = _a.sent();
                            return [2 /*return*/, response.json()];
                    }
                });
            });
        };
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
        var $target = jquery_1.default(event.target);
        // highlight potential drop target when the draggable element enters it
        if ($target.hasClass("square")) {
            $target.addClass("purple");
        }
    }, false);
    document.addEventListener("dragleave", function (event) {
        var $target = jquery_1.default(event.target);
        // reset background of potential drop target when the draggable element leaves it
        if ($target.hasClass("square")) {
            $target.removeClass("purple");
        }
    }, false);
    document.addEventListener("drop", function (event) {
        // prevent default action (open as link for some elements)
        event.preventDefault();
        var $target = jquery_1.default(event.target);
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
            /*
            const letter = ko.dataFor(dragged);
            const rack = ko.contextFor(dragged).$parent;
            rack.rack.remove(letter);
            */
        }
        $target.removeClass("purple");
    }, false);
});
