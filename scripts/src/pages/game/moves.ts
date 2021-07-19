import * as ko from "knockout";
import * as _ from "underscore";
import { Game, parsePlayCommand, IMove, IGameStatus } from "scrabblecore";
import { lsKey } from "../../constants";

function cacheKey(actionIndex: number, action: string): string {
    return `${actionIndex}:${action}`;
}

const bestPossibleMovesCache: Record<
    string,
    KnockoutObservable<BestWord> | null
> = {};

interface IBestWordData {
    score: number;
    text: string;
}

class BestWord {
    constructor(public data: IBestWordData) {}

    public static default = new BestWord({ score: "loading..." } as any);

    public onShowMoreClick(): void {
        alert(this.data.text);
    }
}

class Moves {
    public moves: KnockoutComputed<
        Array<[string, KnockoutObservable<BestWord> | null]>
    >;
    public showBest: boolean = localStorage.getItem(lsKey.showBest) === "true";
    public teamTurn: KnockoutComputed<number | null>;

    private _game: Game;
    private _teamNumber: number;

    public constructor(params: { game: Game; teamNumber: number }) {
        this._game = params.game;
        this._teamNumber = params.teamNumber;

        this.moves = ko.pureComputed(() => {
            var status = this._game.currentStatus();
            return this._getMoves(status);
        });

        this.teamTurn = ko.pureComputed(() => {
            var status = this._game.currentStatus();
            if (status.gameOver) return null;
            return status.teamTurn;
        });
    }

    private _getMoves(
        status: IGameStatus
    ): Array<[string, KnockoutObservable<BestWord> | null]> {
        return status.moveLog.map((move, i) => {
            var bestPossibleMove = this._getBestPossibleMove(i);
            return [move, bestPossibleMove];
        });
    }

    private _createStringBoard(
        board: string[][],
        placements: number[]
    ): string {
        const vacant = `\u2716\uFE0F`;
        const occupied = `\u274C`;
        const stemmed = `\u274E`;
        const played = `\u2705`;
        const template = `
xxxxxxxxxxxxxxx
xxxxxxxxxxxxxxx
xxxxxxxxxxxxxxx
xxxxxxxxxxxxxxx
xxxxxxxxxxxxxxx
xxxxxxxxxxxxxxx
xxxxxxxxxxxxxxx
xxxxxxxxxxxxxxx
xxxxxxxxxxxxxxx
xxxxxxxxxxxxxxx
xxxxxxxxxxxxxxx
xxxxxxxxxxxxxxx
xxxxxxxxxxxxxxx
xxxxxxxxxxxxxxx
xxxxxxxxxxxxxxx`.trim();
        let i = 0;
        return template.replace(/x/g, () => {
            const letter = board[Math.floor(i / 15)][i % 15];
            i += 1;
            if (placements.indexOf(i) > -1 && letter) return stemmed;
            if (placements.indexOf(i) > -1) return played;
            if (letter) return occupied;
            return vacant;
        });
    }

    private _convertBestMoveTo1DPlacements(move: IMove): number[] {
        var trueX = move.y * 15 + move.x + 1;
        return _.range(
            trueX,
            trueX +
                (move.isVertical
                    ? 15 * move.letters.length
                    : move.letters.length),
            move.isVertical ? 15 : 1
        );
    }

    private _getBestPossibleMove(
        actionIndex: number
    ): KnockoutObservable<BestWord> | null {
        const actionForIndex = this._game.actions[actionIndex];
        const observable = ko.observable<BestWord>(BestWord.default);

        if (actionForIndex.indexOf("PLAY ") === -1) return null;
        if (!this.showBest) return null;

        // Need to grab state from right before their move.
        const status = this._game.status(actionIndex - 1);

        // Don't show our opp's best possible. That would be too much insider
        // info.
        if (status.teamTurn !== this._teamNumber) return null;

        const key = cacheKey(actionIndex, actionForIndex);
        const existingEntry = bestPossibleMovesCache[key];
        if (existingEntry) return existingEntry;

        bestPossibleMovesCache[key] = observable;

        const params = $.param({
            board: _.flatten(status.board)
                // Normalize empties w/ whitespace so length is 15x15
                .map((x) => x || " ")
                .join(""),
            rack: status.racks[status.teamTurn - 1].join(""),
        });
        fetch(`/rest/move?${params}`)
            .then((response) => response.json())
            .then((json) => {
                var move = parsePlayCommand(json.command);
                var placements = this._convertBestMoveTo1DPlacements(move);
                observable(
                    new BestWord({
                        ...json,
                        text:
                            this._createStringBoard(status.board, placements) +
                            "\n\n" +
                            json.text,
                    })
                );
            });
        return observable;
    }
}

ko.components.register("moves", {
    viewModel: Moves,
    template: { require: "text!/templates/moves.html" },
});
