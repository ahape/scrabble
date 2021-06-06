import * as ko from "knockout";
import { App } from "./viewmodels/app";

declare const teamNumber: number;

$(() => {
    const app = new App(teamNumber);

    ko.applyBindings(app);

    // For debugging
    (window as any)._app = app;
});
