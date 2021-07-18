import * as _ from "underscore";
import * as ko from "knockout";
import { IGamePlayer } from "../../interfaces/igameplayer";
import { extendComputerName } from "../../functions/extendcomputername";

export class Index {
    public teamChoice: KnockoutObservable<number> = ko.observable(1);
    public playersOnTeam: KnockoutComputed<string[]>;

    public constructor(players: IGamePlayer[]) {
        const playersByTeam = _.groupBy(players, "team");

        this.playersOnTeam = ko.pureComputed(() =>
            _.map(playersByTeam[this.teamChoice()], (p) => {
                if (p.isComputer)
                    return extendComputerName(p.userName, p.computerDifficulty);
                return p.userName;
            })
        );
    }
}
