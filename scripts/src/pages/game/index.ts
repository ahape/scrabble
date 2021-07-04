import * as _ from "underscore";
import { Game, IGameState, constants as sc } from "scrabblecore";
import { IGamePlayer } from "../../interfaces/igameplayer";
import { freebies } from "../../constants";
import { DragNDropListener } from "../../classes/dragndroplistener";
import { Board } from "./board";
import { Rack } from "./rack";
import { Buttons } from "./buttons";
import { Scores } from "./scores";
import { Moves } from "./moves";
import { Bag } from "./bag";
import { Teams } from "./teams";
import { Help } from "./help";
import { Options } from "./options";

interface IUpdateResponse {
    version: number;
}

enum MainView {
    Board = "board",
    Moves = "moves",
    Bag = "bag",
    Teams = "teams",
    Help = "help",
    Options = "options",
}

export class Index {
    private _socketConnection: SignalRConnection;
    private _game: Game;
    private _player: IGamePlayer;
    private _timestamp: number;
    private _dragNDropListener: DragNDropListener;
    public teamNumber: number;
    public board: Board;
    public rack: Rack;
    public buttons: Buttons;
    public moves: Moves;
    public scores: Scores;
    public bag: Bag;
    public teams: Teams;
    public help: Help;
    public options: Options;
    public teamTurn: KnockoutComputed<number>;
    public mainView: KnockoutObservable<MainView>;
    public mainViewOptions: string[];

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

        this._socketConnection = new signalR.HubConnectionBuilder()
            .withUrl("/chatHub")
            .build();
        this._game = game;
        this._player = players[teamNumber - 1];
        this._timestamp = timestamp;

        this.teamNumber = teamNumber;
        this.board = new Board(game);
        this.rack = new Rack(game, teamNumber - 1);
        this.buttons = new Buttons(game, this.board, this.rack, teamNumber);
        this.moves = new Moves(game);
        this.scores = new Scores(game);
        this.bag = new Bag(game);
        this.teams = new Teams(game.teams, players);
        this.help = new Help(freebies, sc.letterValueMap);
        this.options = new Options(game, this._player.id);
        this.teamTurn = ko.pureComputed(() => game.currentStatus().teamTurn);
        this.mainView = ko.observable(MainView.Board);
        this.mainViewOptions = Object.values(
            MainView as Record<string, string>
        );

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

        this.options.clicked.subscribe(onButtonClick);
        this.buttons.clicked.subscribe(onButtonClick);

        // TODO Debug only
        this._game.currentState.subscribe((s) =>
            // NOTE: Currently "recall" click manipulates the state to force an update
            console.log("Game state updated", s)
        );

        // TODO Make receiving object be better
        this._socketConnection.on("GameUpdate", (...args: any[]) => {
            const state = args[0];

            console.log("Received state from SignalR ", state);

            state.actions = state.actions.split(",");

            this._timestamp = state.version;
            delete state.version;

            if (!_.isEqual(this._game.currentState(), state))
                this._game.load(state);
        });

        this._socketConnection.on("GroupUpdate", (...args: any[]) => {
            console.log(...args);
        });

        this._socketConnection
            .start()
            .then(() =>
                this._socketConnection.invoke("AddToGroup", this._game.id)
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
