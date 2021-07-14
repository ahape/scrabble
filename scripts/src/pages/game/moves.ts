import * as ko from "knockout";
import * as _ from "underscore";
import { Game } from "scrabblecore";
import { IGameStatus } from "scrabblecore";
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

    private _game: Game;
    private _teamNumber: number;

    public constructor(params: { game: Game; teamNumber: number }) {
        this._game = params.game;
        this._teamNumber = params.teamNumber;

        this.moves = ko.pureComputed(() => {
            var status = this._game.currentStatus();
            return this._getMoves(status);
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

    private _getBestPossibleMove(
        actionIndex: number
    ): KnockoutObservable<BestWord> | null {
        const actionForIndex = this._game.actions[actionIndex];
        const observable = ko.observable<BestWord>(BestWord.default);

        if (actionForIndex.indexOf("PLAY ") === -1) return null;
        if (!this.showBest) return null;

        const key = cacheKey(actionIndex, actionForIndex);
        const existingEntry = bestPossibleMovesCache[key];

        // Need to grab state from right before their move.
        const status = this._game.status(actionIndex - 1);

        if (status.teamTurn !== this._teamNumber) return null;
        if (existingEntry) return existingEntry;

        bestPossibleMovesCache[key] = observable;

        const params = $.param({
            board: _.flatten(status.board)
                .map((x) => x || " ")
                .join(""),
            rack: status.racks[status.teamTurn - 1].join(""),
        });
        fetch(`/rest/move?${params}`)
            .then((response) => response.json())
            .then((json) => observable(new BestWord(json)));
        return observable;
    }
}

ko.components.register("moves", {
    viewModel: Moves,
    template: { require: "text!/templates/moves.html" },
});
