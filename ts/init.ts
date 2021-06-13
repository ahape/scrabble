import * as ko from "knockout";
import { App } from "./viewmodels/app";
import { IGameState } from "./scrabble/igamestate";
import { IGamePlayer } from "./scrabble/igameplayer";

declare const teamNumber: number;
declare const timestamp: number;
declare const gameJson: IGameState;
declare const players: IGamePlayer[];
declare const userName: string;

$(() => {
    const app = new App(gameJson, players, teamNumber, timestamp, userName);

    ko.applyBindings(app);

    // For debugging
    (window as any)._app = app;
});
