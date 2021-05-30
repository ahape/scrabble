import * as readline from "readline";
import { parseBoard } from "../scrabble/logic/parseboard";
import { printBoard } from "../scrabble/logic/printboard";
import { parsePlayCommand } from "../scrabble/logic/parseplaycommand";
import { createNewBoard } from "../scrabble/logic/createnewboard";
import { playMove } from "../scrabble/logic/playmove";
import { Game } from "../scrabble/game";

const game = new Game(3);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log(
    "Commands are:" +
        "\t\n'play <word> <coordnates> <direction>'\texample: 'play WORD H8 V'" +
        "\t\n'print'\tprints all game information" +
        "\t\n'undo'\tundoes action" +
        "\t\n'redo'\tredoes action" +
        "\t\n'skip'\tskips turn" +
        "\t\n'draw'\tdraws tiles from bag onto rack"
);

game.print();

function loop() {
    rl.question("What's next? ", (answer) => {
        if (answer.indexOf("play") === 0) {
            game.play(answer);
            game.print();
        } else if (answer == "print") {
            game.print();
        } else if (answer == "undo") {
            game.undo();
            game.print();
        } else if (answer == "redo") {
            game.redo();
            game.print();
        } else if (answer == "skip") {
            game.skip();
            game.print();
        } else if (answer == "draw") {
            game.draw();
            game.print();
        } else {
            console.log("Unknown command");
        }

        loop();
    });
}

loop();
