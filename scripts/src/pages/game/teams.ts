import * as _ from "underscore";
import * as ko from "knockout";
import { IGamePlayer } from "../../interfaces/igameplayer";
import { Game } from "scrabblecore";
import { ComputerDifficulty } from "../../enums/computerdifficulty";
import { extendComputerName } from "../../functions/extendcomputername";

class Teams {
    public teams: KnockoutComputed<Array<[number, string, Function]>>;

    private _game: Game;
    private _playersByTeam: KnockoutComputed<Record<string, IGamePlayer[]>>;

    public constructor(params: {
        game: Game;
        players: KnockoutObservableArray<IGamePlayer>;
    }) {
        this._game = params.game;
        this._playersByTeam = ko.pureComputed(() =>
            _.groupBy(params.players(), "team")
        );

        // E.g. ["1: a@e.co, b@e.co", "2: c@e.co, d@e.co"]
        this.teams = ko.pureComputed(() =>
            _.range(1, params.game.teams + 1).map((team) => {
                const players = _.map(this._playersByTeam()[team], (p) => {
                    if (p.isComputer)
                        return extendComputerName(
                            p.userName,
                            p.computerDifficulty
                        );
                    return p.userName;
                }).join(", ");

                return [
                    team,
                    players,
                    (difficulty: ComputerDifficulty) =>
                        this.onAddComputerOpponentClick(team, difficulty),
                ];
            })
        );
    }

    public async onAddComputerOpponentClick(
        teamNumber: number,
        difficulty: ComputerDifficulty
    ) {
        const oppName = prompt(
            "What do you want to name this opponenet?",
            "Computer"
        );

        if (!oppName) return;

        await fetch("/rest/players", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                gameId: this._game.id,
                team: teamNumber,
                userName: oppName,
                isComputer: true,
                computerDifficulty: difficulty,
            }),
        });
    }
}

ko.components.register("teams", {
    viewModel: Teams,
    template: { require: "text!/templates/teams.html" },
});
