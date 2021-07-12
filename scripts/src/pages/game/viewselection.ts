import * as ko from "knockout";
import { MainView } from "./mainview";
import { Game } from "scrabblecore";

class ViewSelection {
    public mainView: KnockoutObservable<string>;
    public mainViewOptions: string[] = Object.values(
        MainView as Record<string, string>
    );
    public bagCount: KnockoutComputed<number>;

    public constructor(params: {
        mainView: KnockoutObservable<string>;
        game: Game;
    }) {
        this.mainView = params.mainView;
        this.bagCount = ko.pureComputed(
            () => params.game.currentStatus().bag.length
        );
    }
}

ko.components.register("view-selection", {
    viewModel: ViewSelection,
    template: { require: "text!/templates/viewselection.html" },
});
