import * as ko from "knockout";
import { App } from "./viewmodels/app";
import { IGameState } from "./scrabble/igamestate";

declare const teamNumber: number;
declare const timestamp: number;
declare const gameJson: IGameState;

$(() => {
    const app = new App(gameJson, teamNumber, timestamp);

    ko.applyBindings(app);

    // For debugging
    (window as any)._app = app;
});
