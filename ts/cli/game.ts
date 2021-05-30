// start new game
// read commands:
// - print (+ commands and score)
// - play

import * as readline from "readline";
import { parseBoard } from "../scrabble/logic/parseboard";
import { printBoard } from "../scrabble/logic/printboard";
import { parsePlayCommand } from "../scrabble/logic/parsePlayCommand";
import { playMove } from "../scrabble/logic/playMove";

let board = parseBoard(`
   A B C D E F G H I J K L M N O
  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 1| | | | | | | | | | | | | | | |0
  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 2| | | | | | | | | | | | | | | |1
  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 3| | | | | | | | | | | | | | | |2
  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 4| | | | | | | | | | | | | | | |3
  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 5| | | | | | | | | | | | | | | |4
  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 6| | | | | | | | | | | | | | | |5
  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 7| | | | | | | | | | | | | | | |6
  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 8| | | | | | | | | | | | | | | |7
  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 9| | | | | | | | | | | | | | | |8
  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
10| | | | | | | | | | | | | | | |9
  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
11| | | | | | | | | | | | | | | |10
  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
12| | | | | | | | | | | | | | | |11
  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
13| | | | | | | | | | | | | | | |12
  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
14| | | | | | | | | | | | | | | |13
  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
15| | | | | | | | | | | | | | | |14
  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
   0 1 2 3 4 5 6 7 8 9 0 1 2 3 4
`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log("Commands are:\nplay 'word' 'coords' 'dir letter'\nprint");

const commands: string[] = [];
let totalScore = 0;

console.log(printBoard(board));

function loop() {
    rl.question("What's next? ", (answer) => {
        if (answer.indexOf("play") === 0) {
            const cmd = answer.substr("play ".length);
            const move = parsePlayCommand(cmd);
            console.log("Parsed move was ", move);
            const result = playMove(move, board);

            commands.push(cmd);

            board = result.board;
            result.words.forEach((w) => {
                console.log("Played " + w.word + " for " + w.points);
                totalScore += w.points;
            });
            console.log("\nTotal score is now " + totalScore);
            console.log(printBoard(board));
        } else if (answer.indexOf("print") === 0) {
            commands.forEach((cmd) => console.log(cmd));
        } else {
            console.log("Unknown command");
        }

        loop();
    });
}

loop();
