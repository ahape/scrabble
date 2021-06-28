import * as ko from "knockout";
import { Game } from "../scrabble/game";

export class Options {
    public clicked: KnockoutObservable<string> = ko.observable("");
    public constructor(private _game: Game, private _playerId: number) {}

    public onDeleteClick(): void {
        if (confirm("Are you sure you want to delete this game?"))
            this._handleDelete();

        this.clicked("delete");
    }

    public onLeaveClick(): void {
        if (confirm("Are you sure you want to leave this game?"))
            this._handleLeave();

        this.clicked("leave");
    }

    public onUndoClick(): void {
        this._game.undo();

        this.clicked("undo");
    }

    public onRedoClick(): void {
        this._game.redo();

        this.clicked("redo");
    }

    private async _handleDelete(): Promise<void> {
        try {
            await fetch(`/rest/games/${this._game.id}`, {
                method: "DELETE",
            });
        } catch (err) {
            alert(
                "Error: Unable to delete game. Please refresh the page and try again"
            );
        }
    }

    private async _handleLeave(): Promise<void> {
        try {
            await fetch(`/rest/players/${this._playerId}`, {
                method: "DELETE",
            });

            location.assign("/games");
        } catch (err) {
            alert(
                "Error: Unable to leave game. Please refresh the page and try again"
            );
        }
    }
}

