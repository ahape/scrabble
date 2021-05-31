import * as _ from "underscore";
import * as ko from "knockout";
import { ISquare } from "./logic/isquare";
import { IPlayResult } from "./logic/iplayresult";
import { IMove } from "./logic/imove";
import { Letter } from "./logic/letter";
import { parsePlayCommand } from "./logic/parseplaycommand";
import { createNewBoard } from "./logic/createnewboard";
import { playMove } from "./logic/playmove";
import { printBoard } from "./logic/printboard";
import { parseLetter } from "./logic/parseletter";
import { ActionType } from "./logic/actiontype";
import { actionChangesTurn } from "./logic/actionchangesturn";
import { getNextTurn } from "./logic/getnextturn";
import { getTurnFromActions } from "./logic/getturnfromactions";
import { getScoresFromActions } from "./logic/getscoresfromactions";
import { parseAction } from "./logic/parseaction";
import { createBoardFromActions } from "./logic/createboardfromactions";
import { createBagFromActions } from "./logic/createbagfromactions";
import { playCommandHasLettersFromRack } from "./logic/playcommandhaslettersfromrack";
import { createRackFromActions } from "./logic/createrackfromactions";
import { createRacksFromActions } from "./logic/createracksfromactions";
import { BOARD_X_LENGTH, BOARD_Y_LENGTH } from "./logic/constants";
import { Bag } from "./bag";
import { Rack } from "./rack";
import { IGameState } from "./igamestate";
import { IGameStatus } from "./igamestatus";

export class Game {
    public id: string = _.now().toString(36);
    public teams: number;
    /** Raw action strings */
    public actions: string[] = [];
    public actionIndex: number = -1;
    public currentState: KnockoutObservable<IGameState>;
    public currentStatus: KnockoutObservable<IGameStatus>;

    public constructor(teams: number) {
        this.teams = teams;
        this.currentState = ko.observable(this.snapshot());
        this.currentStatus = ko.observable(this.status());

        this._handleAction(ActionType.NewGame);
    }

    public snapshot(): IGameState {
        return {
            id: this.id,
            teams: this.teams,
            actions: this.actions,
            actionIndex: this.actionIndex,
        };
    }

    public status(): IGameStatus {
        return {
            bag: this._bag().toJSON(),
            board: this._board().map((row) =>
                row.map((sq) => sq.blankLetter || sq.letter)
            ),
            racks: createRacksFromActions(
                this._nonFutureActions(),
                this.teams
            ).map((r) => r.toJSON()),
            scores: getScoresFromActions(this._nonFutureActions(), this.teams),
            teamTurn: this._teamTurn(),
        };
    }

    public draw(): void {
        const drawn = this._draw();
        if (drawn.length > 0) {
            this._handleAction(
                ActionType.Draw,
                ActionType.Draw + " " + drawn.join("")
            );
        }
    }

    public skip(): void {
        this._handleAction(ActionType.Skip);
    }

    public swap(actionRaw: string): void {
        actionRaw = this._swap(actionRaw);
        this._handleAction(ActionType.Swap, actionRaw);
    }

    public play(actionRaw: string): void {
        const command = parseAction(actionRaw)[1];
        const errorMessage = this._play(command);
        if (errorMessage) {
            console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
            console.log("!!!! Error: " + errorMessage);
            console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        } else this._handleAction(ActionType.Play, actionRaw);
    }

    public undo(): void {
        this._handleAction(ActionType.Undo);
    }

    public redo(): void {
        this._handleAction(ActionType.Redo);
    }

    public print(): void {
        console.log(`Tiles remaining in bag ` + this._bag().print());
        console.log(printBoard(this._board()));
        this.actions.forEach((action, i) => {
            if (i === this.actionIndex) action += " <<<";
            console.log(i + 1 + ". " + action);
        });
        console.log(`It's team ${this._teamTurn()}'s turn`);
        console.log(`Current letters: ` + this._teamTurnRack().print());
    }

    public static fromSnapshot(snapshot: IGameState): Game {
        // Clone in case snapshot is used for other things.
        snapshot = ko.toJS(snapshot);
        const game = new Game(1);
        game.id = snapshot.id;
        game.teams = snapshot.teams;
        game.actionIndex = snapshot.actionIndex;
        game.actions = snapshot.actions;
        return game;
    }

    private _handleAction(actionType: ActionType, actionRaw?: string): void {
        switch (actionType) {
            case ActionType.NewGame:
            case ActionType.Draw:
            case ActionType.Skip:
            case ActionType.Swap:
            case ActionType.Play:
                // In order to overwrite any previous states (after undo)
                this.actions.length = this.actionIndex + 1;
                this.actions.push(actionRaw || actionType);
                this.actionIndex++;
                break;
            case ActionType.Undo:
                this.actionIndex = Math.max(this.actionIndex - 1, 0);
                break;
            case ActionType.Redo:
                this.actionIndex = Math.min(
                    this.actionIndex + 1,
                    this.actions.length - 1
                );
                break;
            case ActionType.EndGame:
                break;
        }

        this.currentState(this.snapshot());
        this.currentStatus(this.status());
    }

    private _nonFutureActions(): string[] {
        return this.actions.slice(0, this.actionIndex + 1);
    }

    private _bag(): Bag {
        return createBagFromActions(this._nonFutureActions());
    }

    private _board(): ISquare[][] {
        return createBoardFromActions(this._nonFutureActions());
    }

    private _teamTurn(): number {
        return getTurnFromActions(this._nonFutureActions(), this.teams);
    }

    private _teamTurnRack(): Rack {
        return createRackFromActions(this._nonFutureActions(), this.teams);
    }

    private _draw(): Letter[] {
        const rack = this._teamTurnRack();
        const drawn = this._bag().draw(rack.needs());
        rack.add(drawn);
        return drawn;
    }

    /** @returns raw action containing drawn letters as well as exchanged letters */
    private _swap(actionRaw: string): string {
        const letters = parseAction(actionRaw)[1].split("").map(parseLetter);
        const rack = this._teamTurnRack();
        rack.remove(letters);
        const newLetters = this._bag().swap(letters);
        rack.add(newLetters);
        return actionRaw + " " + newLetters.join("");
    }

    private _play(command: string): string {
        let move: IMove;
        try {
            move = parsePlayCommand(command);
        } catch (err) {
            return err.message;
        }
        const rack = this._teamTurnRack();
        // Simple check
        const isValid = playCommandHasLettersFromRack(move, rack.letters);

        if (!isValid) return "Word doesn't use letters from rack (1)";

        try {
            const result = playMove(move, this._board());
            const owned = rack.letters.slice();
            const used = result.usedLetters.slice();

            let letter: Letter | undefined;
            while ((letter = used.pop())) {
                var i = owned.indexOf(letter);
                if (i === -1) return "Word doesn't use letters from rack (2)";
                owned.splice(i, 1);
            }

            return "";
        } catch (err) {
            throw err;
            //return err.message;
        }
    }
}
