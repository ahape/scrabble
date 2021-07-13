import * as ko from "knockout";
import * as _ from "underscore";
import * as signalR from "signalR";
import { Game, IGameState, constants as sc } from "scrabblecore";
import { IGamePlayer } from "../../interfaces/igameplayer";
import { DragNDropListener } from "../../classes/dragndroplistener";
import { MainView } from "./mainview";
// Components
import "./rack";
import "./buttons";
import "./scores";
import "./moves";
import "./viewselection";
import "./board";
import "./bag";
import "./teams";
import "./help";
import "./options";

interface IUpdateResponse {
    version: number;
}

function checkNotificationPromise(): boolean {
    try {
        Notification.requestPermission().then();
    } catch (e) {
        return false;
    }

    return true;
}

export class Index {
    private _socketConnection: SignalRConnection;
    private _timestamp: number;
    private _dragNDropListener: DragNDropListener;
    private _notifyWhenTurn: boolean = false;
    public game: Game;
    public players: KnockoutObservableArray<IGamePlayer>;
    public player: IGamePlayer;
    public teamNumber: number;
    public onClick: KnockoutObservable<string> = ko.observable("");
    public rackLetters: KnockoutObservableArray<string> = ko.observableArray();
    public teamTurn: KnockoutComputed<number>;
    public mainView: KnockoutObservable<MainView>;

    /**
     * @param {teamNumber} - Team the current client is on
     * @param {timestamp} - Essentially an ETag of the current game state
     */
    public constructor(
        gameJson: IGameState,
        players: IGamePlayer[],
        teamNumber: number,
        timestamp: number
    ) {
        // TODO: Do something less hacky here.
        // Maybe use a specific JSON serializer
        if (!Array.isArray(gameJson.actions))
            gameJson.actions = (gameJson.actions as string).split(",");

        const game = new Game(gameJson);
        const rackIndex = teamNumber - 1;

        this._socketConnection = new signalR.HubConnectionBuilder()
            .withUrl("/chatHub")
            .build();
        this._timestamp = timestamp;

        this.game = game;
        this.players = ko.observableArray(players);
        this.player = players[teamNumber - 1];
        this.teamNumber = teamNumber;
        this.rackLetters(game.status().racks[rackIndex]);
        this.teamTurn = ko.pureComputed(() => game.currentStatus().teamTurn);
        this.mainView = ko.observable(MainView.Board);

        // Buttons that actually change the state of the game.
        const stateChangingButtons = [
            "draw",
            "play",
            "skip",
            "swap",
            "undo",
            "redo",
            "challenge",
        ];
        const onButtonClick = (btn: string) => {
            if (stateChangingButtons.includes(btn)) {
                this._updateGame(game.snapshot()).then((response) => {
                    if (response) this._handleUpdateResponse(response);
                });
            }
        };

        this.onClick.subscribe(onButtonClick);

        // NOTE: Debug only
        this.game.currentState.subscribe((s) =>
            // NOTE: Currently "recall" click manipulates the state
            // to force an update
            console.log("Game state updated", s)
        );

        this.game.currentStatus.subscribe((s) => {
            this.rackLetters.removeAll();
            this.rackLetters(s.racks[rackIndex]);
        });

        // TODO Make receiving object be better
        this._socketConnection.on("GameUpdate", (...args: any[]) => {
            const state = args[0];

            console.log("Received state from SignalR ", state);

            state.actions = state.actions.split(",");

            this._timestamp = state.version;
            delete state.version;
            // TODO: Stop mixing JSON serializers--"players" gets added
            // to JSON object via System.Text.Json.
            delete state.players;

            if (!_.isEqual(this.game.currentState(), state))
                this.game.load(state);

            const lastState = state.actions.slice(-1)[0];
            // If this user has enabled notifications
            // AND it's *now* this user's turn
            // AND the last action was a play
            // AND this window is in the background
            // THEN notify the user
            if (
                this._notifyWhenTurn &&
                this.game.status().teamTurn === teamNumber &&
                lastState?.indexOf("PLAY ") === 0 &&
                document.visibilityState === "hidden"
            ) {
                let _ = new Notification("It's your turn!", { 
                    icon: "https://play-lh.googleusercontent.com/FBQm8PPSeC4oCX8O06tDN6qgHV7VzsfpaXbLMGpNWn39b8WIxnLBVD-0-jLm_Olhnf8" 
                });
            }
        });

        this._socketConnection.on("PlayerAdd", (...args: any[]) => {
            const player = args[0] as IGamePlayer;
            this.players.push(player);
        });

        this._socketConnection.on("PlayerRemove", (...args: any[]) => {
            const player = args[0] as IGamePlayer;
            this.players.remove((p) => p.id == player.id);
        });

        this._socketConnection.on("GroupUpdate", (...args: any[]) => {
            console.log(...args);
        });

        this._socketConnection
            .start()
            .then(() =>
                this._socketConnection.invoke("AddToGroup", this.game.id)
            )
            .catch((err) => console.log(err));

        this._dragNDropListener = new DragNDropListener();
        this._dragNDropListener.init();

        this._askNotificationPermission();
    }

    private _handleUpdateResponse(response: IUpdateResponse): void {
        this._timestamp = response.version;
    }

    private async _updateGame(
        gameState: IGameState
    ): Promise<IUpdateResponse | null> {
        const response = await fetch("/rest/games/" + gameState.id, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...gameState,
                actions: gameState.actions.join(),
                version: this._timestamp,
            }),
        });

        if (response.ok) {
            return response.json();
        }

        alert(
            "Error: Unable to update game. Please refresh the page try again"
        );
        return null;
    }

    private _askNotificationPermission(): void {
        // Let's check if the browser supports notifications
        if ("Notification" in window) {
            if (checkNotificationPromise()) {
                Notification.requestPermission().then((permission) => {
                    this._notifyWhenTurn = permission === "granted";
                });
            } else {
                Notification.requestPermission((permission) => {
                    this._notifyWhenTurn = permission === "granted";
                });
            }
        }
    }
}
