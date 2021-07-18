import * as _ from "underscore";
import * as ko from "knockout";
import { IGamePlayer } from "../../interfaces/igameplayer";
import { Game } from "scrabblecore";
import { ComputerDifficulty } from "../../enums/computerdifficulty";
import { extendComputerName } from "../../functions/extendcomputername";

class Teams {
    public teams: KnockoutComputed<Array<[number, string, Function]>>;

    private _game: Game;
    private _onPlayerAdd: (player: IGamePlayer) => void;

    public constructor(params: {
        game: Game;
        players: KnockoutObservableArray<IGamePlayer>;
        onPlayerAdd: (player: IGamePlayer) => void;
    }) {
        this._game = params.game;
        this._onPlayerAdd = params.onPlayerAdd;

        // E.g. ["1: a@e.co, b@e.co", "2: c@e.co, d@e.co"]
        this.teams = ko.pureComputed(() => {
            const playersByTeam = _.groupBy(params.players(), "team");
            return _.range(1, params.game.teams + 1).map((team) => {
                const players = _.map(playersByTeam[team], (p) => {
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
            });
        });
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

        const response = await fetch("/rest/players", {
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

        if (response.ok) this._onPlayerAdd(await response.json());
    }
}

ko.components.register("teams", {
    viewModel: Teams,
    template: { require: "text!/templates/teams.html" },
});
