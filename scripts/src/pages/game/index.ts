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

export class Index {
    private _socketConnection: SignalRConnection;
    private _timestamp: number;
    private _dragNDropListener: DragNDropListener;
    public game: Game;
    public players: IGamePlayer[];
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
        this.players = players;
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
        ];
        const onButtonClick = (btn: string) => {
            if (stateChangingButtons.includes(btn)) {
                this._updateGame(game.snapshot()).then((response) => {
                    if (response) this._handleUpdateResponse(response);
                });
            }
        };

        this.onClick.subscribe(onButtonClick);

        // TODO Debug only
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

            if (!_.isEqual(this.game.currentState(), state))
                this.game.load(state);
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
    }

    private _handleUpdateResponse(response: IUpdateResponse): void {
        this._timestamp = response.version;
    }

    private async _updateGame(
        gameState: IGameState
    ): Promise<IUpdateResponse | null> {
        try {
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

            return response.json();
        } catch (err) {
            alert(
                "Error: Unable to update game. Please refresh the page try again"
            );
        }

        return null;
    }
}
