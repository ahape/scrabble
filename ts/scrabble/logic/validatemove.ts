import * as _ from "underscore";
import { ISquare } from "./isquare";
import { coordinateChars } from "./coordinatechars";

export function validateMove(move: ISquare[], board: ISquare[][]): boolean {
    move.sort((a, b) => a.id.localeCompare(b.id));

    // First check that all of the squares from the move are in the same row/col
    const sameRow = _.unique(move.map((sq) => sq.id.substr(1))).length == 1;
    const sameCol = _.unique(move.map((sq) => sq.id.charAt(0))).length == 1;
    if (!sameRow || !sameCol) return false;

    if (sameRow) {
        const y = +move[0].id.substr(1) - 1;
        const first = coordinateChars.indexOf(
            (_.min(move, (sq) => sq.id.charAt(0)) as ISquare).id.charAt(0)
        );
        const last = coordinateChars.indexOf(
            (_.max(move, (sq) => sq.id.charAt(0)) as ISquare).id.charAt(0)
        );
        for (const x of _.range(first, last)) {
            if (!move.some((sq) => _.isEqual(sq, board[y][x]))) {
                return false;
            }
        }
    } else {
        const x = coordinateChars.indexOf(move[0].id.charAt(0));
        const first = +(_.min(
            move,
            (sq) => +sq.id.substr(1)
        ) as ISquare).id.substr(1);
        const last = +(_.max(
            move,
            (sq) => +sq.id.substr(1)
        ) as ISquare).id.substr(1);
        for (const y of _.range(first, last)) {
            if (!move.some((sq) => _.isEqual(sq, board[y][x]))) {
                return false;
            }
        }
    }

    return true;
}
