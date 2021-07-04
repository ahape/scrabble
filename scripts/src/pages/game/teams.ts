import * as _ from "underscore";
import { IGamePlayer } from "../../interfaces/igameplayer";

export class Teams {
    public teams: number[];
    public playersByTeam: Record<string, IGamePlayer[]>;

    public constructor(teams: number, players: IGamePlayer[]) {
        this.teams = _.range(1, teams + 1);
        this.playersByTeam = _.groupBy(players, "team");
    }
}
