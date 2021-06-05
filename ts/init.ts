import * as ko from "knockout";
import { App } from "./viewmodels/app";

$(() => {
    const app = new App(1);

    ko.applyBindings(app);

    // For debugging
    (window as any)._app = app;
});
