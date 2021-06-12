import * as fs from "fs";
import * as path from "path";
import * as http from "http";
import * as readline from "readline";
import { parseBoard } from "../scrabble/logic/parseboard";
import { printBoard } from "../scrabble/logic/printboard";
import { parsePlayCommand } from "../scrabble/logic/parseplaycommand";
import { createNewBoard } from "../scrabble/logic/createnewboard";
import { playMove } from "../scrabble/logic/playmove";
import { Game } from "../scrabble/game";
import { IGameState } from "../scrabble/igamestate";

const game = new Game();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log(
    "Commands are:" +
        "\t\n'play <word> <coordnates> <direction>'\texample: 'play WORD H8 V'" +
        "\t\n'swap <letters>'\t\t\texample: 'swap EEE'" +
        "\t\n'import <file from `tests/snapshots/`>'\texample: 'import example_file.json'" +
        "\t\n'undo'\tundoes action" +
        "\t\n'redo'\tredoes action" +
        "\t\n'skip'\tskips turn" +
        "\t\n'draw'\tdraws tiles from bag onto rack" +
        "\t\n'snapshot'\tshow snapshot of game state" +
        "\t\n'status'\tshow status for game" +
        "\t\n'print'\tprints all game information" +
        "\n\n"
);

game.print();

game.currentStatus.subscribe((status) => {
    console.log(status, game.snapshot());
});

function loop() {
    rl.question("What's next? ", (answer) => {
        if (answer.search(/play/i) === 0) {
            try {
                game.play(answer);
                game.print();
            } catch (err) {
                console.log(err);
            }
        } else if (answer.search(/print/i) === 0) {
            game.print();
        } else if (answer.search(/snapshot/i) === 0) {
            console.log(game.snapshot());
        } else if (answer.search(/status/i) === 0) {
            console.log(game.status());
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
        } else if (answer.search(/import /i) === 0) {
            const fileName = answer.split(" ")[1];
            const fileRaw = fs.readFileSync(
                path.resolve(__dirname, "../tests/snapshots/" + fileName)
            );

            game.load(JSON.parse(fileRaw.toString()));

            console.log("Imported game state " + fileName);
        } else {
            console.log("Unknown command");
        }

        loop();
    });
}

loop();
