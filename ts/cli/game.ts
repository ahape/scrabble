import * as http from "http";
import * as readline from "readline";
import { parseBoard } from "../scrabble/logic/parseboard";
import { printBoard } from "../scrabble/logic/printboard";
import { parsePlayCommand } from "../scrabble/logic/parseplaycommand";
import { createNewBoard } from "../scrabble/logic/createnewboard";
import { playMove } from "../scrabble/logic/playmove";
import { Game } from "../scrabble/game";
import { IGameState } from "../scrabble/igamestate";

const game = new Game(2);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log(
    "Commands are:" +
        "\t\n'play <word> <coordnates> <direction>'\texample: 'play WORD H8 V'" +
        "\t\n'swap <letters>'\texample: 'swap EEE'" +
        "\t\n'undo'\tundoes action" +
        "\t\n'redo'\tredoes action" +
        "\t\n'skip'\tskips turn" +
        "\t\n'draw'\tdraws tiles from bag onto rack" +
        "\t\n'snapshot'\tgrab snapshot object for game" +
        "\t\n'print'\tprints all game information"
);

game.print();

game.currentStatus.subscribe((status) => {
    console.log("===============STATUS===============", status);
});

function loop() {
    rl.question("What's next? ", (answer) => {
        if (answer.search(/play/i) === 0) {
            game.play(answer);
            game.print();
        } else if (answer.search(/print/i) === 0) {
            game.print();
        } else if (answer.search(/snapshot/i) === 0) {
            console.log(game.snapshot());
        } else if (answer.search(/undo/i) === 0) {
            game.undo();
            game.print();
        } else if (answer.search(/redo/i) === 0) {
            game.redo();
            game.print();
        } else if (answer.search(/skip/i) === 0) {
            game.skip();
            game.print();
        } else if (answer.search(/draw/i) === 0) {
            game.draw();
            game.print();
        } else if (answer.search(/swap/i) === 0) {
            game.swap(answer);
            game.print();
        } else {
            console.log("Unknown command");
        }

        loop();
    });
}

loop();
