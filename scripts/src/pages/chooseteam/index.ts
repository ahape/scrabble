import * as _ from "underscore";
import * as ko from "knockout";
import { IGamePlayer } from "../../interfaces/igameplayer";

export class Index {
    public teamChoice: KnockoutObservable<number> = ko.observable(1);
    public playersOnTeam: KnockoutComputed<string[]>;

    public constructor(players: IGamePlayer[]) {
        const playersByTeam = _.groupBy(players, "team");

        this.playersOnTeam = ko.pureComputed(() =>
            _.pluck(playersByTeam[this.teamChoice()], "userName")
        );
    }
}
