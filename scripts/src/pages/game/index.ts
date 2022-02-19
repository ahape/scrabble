import * as ko from "knockout";
import * as _ from "underscore";
import * as signalR from "signalR";
import {
    Game,
    IGameState,
    actionChangesTurn,
    parseAction,
    constants as sc,
} from "scrabblecore";
import { IGamePlayer } from "../../interfaces/igameplayer";
import { TouchAndDropListener } from "../../classes/touchanddroplistener";
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
    private tndListener: TouchAndDropListener;
    private _notifyWhenTurn: boolean = false;
    public game: Game;
    public players: KnockoutObservableArray<IGamePlayer>;
    public player: IGamePlayer;
    public teamNumber: number;
    public onClick: (eventName: string) => void;
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
        player: IGamePlayer,
        timestamp: number
    ) {
        // TODO: Do something less hacky here.
        // Maybe use a specific JSON serializer
        if (!Array.isArray(gameJson.actions))
            gameJson.actions = (gameJson.actions as string).split(",");

        const teamNumber = player.team;
        const game = new Game(gameJson);
        const rackIndex = teamNumber - 1;

        this._socketConnection = new signalR.HubConnectionBuilder()
            .withUrl("/chatHub")
            .build();
        this._timestamp = timestamp;

        this.game = game;
        this.players = ko.observableArray(players);
        this.player = player;
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
        this.onClick = (btn) => {
            if (stateChangingButtons.includes(btn)) {
                this._updateGame(game.snapshot()).then((response) => {
                    if (response) this._handleUpdateResponse(response);
                });
            }
        };

        // NOTE: Debug only
        this.game.currentState.subscribe((s) =>
            // NOTE: Currently "recall" click manipulates the state
            // to force an update
            console.log("Game state updated", s)
        );

        this.game.currentStatus.subscribe((s) => {
            // Specifically for "recall"
            this.rackLetters.removeAll();
            this.rackLetters(s.racks[rackIndex]);
        });

        this._initSocketListener();

        this.tndListener = new TouchAndDropListener({
            dropzone: "dz",
            handle: "letter",
            dropzoneHover: "drop-target",
            beforeDrop: (data) => {
                // If dropping onto the rack
                if (data.dropzone.classList.contains("rack")) {
                    const under = this.tndListener.elementUnderDragged(
                        data.viewportX,
                        data.viewportY,
                        data.dragged
                    );

                    // If other tiles are on the rack, we want to drop
                    // this tile in between the tiles being aimed at.
                    if (under?.classList.contains("letter")) {
                        // No-op if we are dropping onto ourself.
                        if (under === data.original) return false;

                        data.dropzone.insertBefore(data.dragged, under);

                        return true;
                    }

                    // Just append, since this will be the only tile.
                    return data;
                }
                // If dropping onto the board
                if (
                    data.dropzone.classList.contains("square") &&
                    data.dropzone.children?.length === 0 &&
                    data.dropzone.dataset.played != "true"
                ) {
                    return data;
                }
                return false;
            },
        });
        this.tndListener.init();

        this._askNotificationPermission();
    }

    public onPlayerAdd = (player: IGamePlayer) => {
        this._addPlayerIfNotExists(player);
        this._handleStateChangeComputerOpp();
    };

    private _addPlayerIfNotExists(player: IGamePlayer): boolean {
        if (this.players().some((p) => p.id === player.id)) {
            return false;
        }
        this.players.push(player);
        return true;
    }

    private _initSocketListener(): void {
        // TODO Make receiving object be better
        this._socketConnection.on("GameUpdate", (...args: any[]) => {
            const state = args[0];

            console.log("SignalR: GameUpdate", state);

            state.actions = state.actions.split(",");

            this._timestamp = state.version;
            delete state.version;
            // TODO: Stop mixing JSON serializers--"players" gets added
            // to JSON object via System.Text.Json.
            delete state.players;

            if (!_.isEqual(this.game.currentState(), state))
                this.game.load(state);

            this._handleStateChangeNotification();
        });

        this._socketConnection.on("PlayerAdd", (...args: any[]) => {
            const player = args[0] as IGamePlayer;
            const clientInChargeOfComputerPlays = args[1] as string;

            console.log("SignalR: PlayerAdd", player);

            this._addPlayerIfNotExists(player);
        });

        this._socketConnection.on("PlayerRemove", (...args: any[]) => {
            const player = args[0] as IGamePlayer;

            console.log("SignalR: PlayerRemove", player);

            // NOTE: Once we give the user the ability to remove a computer
            // player, this will need to include similar logic to adding a player.
            this.players.remove((p) => p.id == player.id);
        });

        // This notifies us when a browser client joins the game--not using this yet.
        this._socketConnection.on("GroupUpdate", (...args: any[]) => {
            console.log(...args);
        });

        this._socketConnection.on("GameDeleted", (...args: any[]) => {
            location.assign("/games");
        });

        this._socketConnection
            .start()
            .then(() =>
                this._socketConnection.invoke("AddToGroup", this.game.id)
            )
            .catch((err) => console.error(err));
    }

    private _handleStateChangeComputerOpp(): void {
        const status = this.game.status();
        const playerTurn = _.find(
            this.players(),
            (p) => p.team === status.teamTurn
        );

        if (playerTurn?.isComputer) {
            if (this.game.canDraw()) {
                this.game.draw();
                this._updateGame(this.game.snapshot()).then((response) => {
                    if (response) this._handleUpdateResponse(response);
                });
            } else {
                const params = $.param({
                    board: _.flatten(status.board)
                        // Normalize empties w/ whitespace so length is 15x15
                        .map((x) => x || " ")
                        .join(""),
                    rack: status.racks[status.teamTurn - 1].join(""),
                    difficulty: playerTurn.computerDifficulty,
                });
                fetch(`/rest/move?${params}`)
                    .then((response) => response.json())
                    .then((json) => {
                        if (json.score === 0) {
                            this.game.skip();
                            this._updateGame(this.game.snapshot()).then(
                                (response) => {
                                    if (response)
                                        this._handleUpdateResponse(response);
                                }
                            );
                        } else {
                            this.game.play("PLAY " + json.command);
                            this._updateGame(this.game.snapshot()).then(
                                (response) => {
                                    if (response)
                                        this._handleUpdateResponse(response);
                                }
                            );
                        }
                    });
            }
        }
    }

    private _handleStateChangeNotification(): void {
        const lastState = this.game.snapshot().actions.slice(-1)[0];
        const icon =
            "https://play-lh.googleusercontent.com/" +
            "FBQm8PPSeC4oCX8O06tDN6qgHV7VzsfpaXbLMGpNWn39b8WIxnLBVD-0-jLm_Olhnf8";
        // If this user has enabled notifications
        // AND it's *now* this user's turn
        // AND the last action was a play
        // AND this window is in the background
        // THEN notify the user
        if (
            this._notifyWhenTurn &&
            this.game.status().teamTurn === this.teamNumber &&
            actionChangesTurn(parseAction(lastState)[0]) &&
            document.visibilityState === "hidden"
        ) {
            let _ = new Notification("It's your turn!", {
                icon,
            });
        } else if (this.game.status().gameOver) {
            let _ = new Notification("Game over!", {
                icon,
            });
        }
    }

    private _handleUpdateResponse(response: IUpdateResponse): void {
        this._timestamp = response.version;

        if (!this.game.status().gameOver) {
            this._handleStateChangeComputerOpp();
        }
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
