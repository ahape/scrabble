import * as ko from "knockout";
import { Game } from "scrabblecore";
import { lsKey } from "../../constants";

function errorText(specificMessage: string): string {
    return `Error: ${specificMessage}. Please refresh the page and try again`;
}

class Options {
    public showBestPossibleWords: KnockoutObservable<boolean>;
    public canUndo: KnockoutComputed<boolean>;
    public canRedo: KnockoutComputed<boolean>;

    private _game: Game;
    private _playerId: number;
    private _clicked: KnockoutObservable<string>;

    public constructor(params: {
        game: Game;
        playerId: number;
        onClick: KnockoutObservable<string>;
    }) {
        this._game = params.game;
        this._playerId = params.playerId;
        this._clicked = params.onClick;

        this.showBestPossibleWords = ko.observable(
            localStorage.getItem(lsKey.showBest) === "true"
        );

        this.showBestPossibleWords.subscribe((checked) =>
            localStorage.setItem(lsKey.showBest, checked.toString())
        );

        this.canUndo = ko.pureComputed(() => {
            this._game.currentStatus(); // Necessary for the ko subscription.
            return this._game.canUndo();
        });

        this.canRedo = ko.pureComputed(() => {
            this._game.currentStatus(); // Necessary for the ko subscription.
            return this._game.canRedo();
        });
    }

    public onDeleteClick(): void {
        if (confirm("Are you sure you want to delete this game?"))
            this._handleDelete();

        this._clicked("delete");
    }

    public onLeaveClick(): void {
        if (confirm("Are you sure you want to leave this game?"))
            this._handleLeave();

        this._clicked("leave");
    }

    public onUndoClick(): void {
        this._game.undo();

        this._clicked("undo");
    }

    public onRedoClick(): void {
        this._game.redo();

        this._clicked("redo");
    }

    public onSkipClick(): void {
        const status = this._game.status();
        if (confirm(`Skip Team ${status.teamTurn}'s turn?`)) {
            this._game.skip();
            this._clicked("skip");
        }
    }

    private async _handleDelete(): Promise<void> {
        const response = await fetch(`/rest/games/${this._game.id}`, {
            method: "DELETE",
        });

        if (response.ok) {
            location.assign("/games");
        } else {
            alert(errorText("Unable to delete game"));
        }
    }

    private async _handleLeave(): Promise<void> {
        const response = await fetch(`/rest/players/${this._playerId}`, {
            method: "DELETE",
        });

        if (response.ok) location.assign("/games");
        else alert(errorText("Unable to leave game"));
    }
}

ko.components.register("options", {
    viewModel: Options,
    template: { require: "text!/templates/options.html" },
});
