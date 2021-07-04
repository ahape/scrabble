import * as ko from "knockout";
import { MainView } from "./mainview";

class ViewSelection {
    public mainView: KnockoutObservable<string>;
    public mainViewOptions: string[] = Object.values(
        MainView as Record<string, string>
    );
    public constructor(params: { mainView: KnockoutObservable<string> }) {
        this.mainView = params.mainView;
    }
}

ko.components.register("view-selection", {
    viewModel: ViewSelection,
    template: { require: "text!/templates/viewselection.html" },
});
