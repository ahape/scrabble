import * as _ from "underscore";
import * as ko from "knockout";
import { IGamePlayer } from "../../interfaces/igameplayer";

class Teams {
    public teams: KnockoutComputed<string[]>;

    private _playersByTeam: KnockoutComputed<Record<string, IGamePlayer[]>>;

    public constructor(params: {
        teams: number;
        players: KnockoutObservableArray<IGamePlayer>;
    }) {
        this._playersByTeam = ko.pureComputed(() =>
            _.groupBy(params.players(), "team")
        );

        // E.g. ["1: a@e.co, b@e.co", "2: c@e.co, d@e.co"]
        this.teams = ko.pureComputed(() =>
            _.range(1, params.teams + 1).map(
                (team) =>
                    team +
                    ": " +
                    _.pluck(this._playersByTeam()[team], "userName").join(", ")
            )
        );
    }
}

ko.components.register("teams", {
    viewModel: Teams,
    template: { require: "text!/templates/teams.html" },
});
