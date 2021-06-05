var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "jquery", "jquery-ui"], function (require, exports, jquery_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    jquery_1 = __importDefault(jquery_1);
    jquery_1.default(".rack").sortable();
    jquery_1.default(".square").droppable({
        accept: ".letter",
        drop: function (event, ui) {
            console.log("drop", event, ui);
        },
    });
});
