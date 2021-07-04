import * as _ from "underscore";
import { IGamePlayer } from "../../interfaces/igameplayer";

export class Teams {
    public teams: string[];

    private _playersByTeam: Record<string, IGamePlayer[]>;

    public constructor(teams: number, players: IGamePlayer[]) {
        this._playersByTeam = _.groupBy(players, "team");

        // E.g. ["1: a@e.co, b@e.co", "2: c@e.co, d@e.co"]
        this.teams = _.range(1, teams + 1).map(
            (team) =>
                team +
                ": " +
                _.pluck(this._playersByTeam[team], "userName").join(", ")
        );
    }
}
