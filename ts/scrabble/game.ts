import * as _ from "underscore";
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
import { parseAction } from "./logic/parseaction";
import { createBoardFromActions } from "./logic/createboardfromactions";
import { createBagFromActions } from "./logic/createbagfromactions";
import { playCommandHasLettersFromRack } from "./logic/playcommandhaslettersfromrack";
import { createRackFromActions } from "./logic/createrackfromactions";
import { BOARD_X_LENGTH, BOARD_Y_LENGTH } from "./logic/constants";
import { Bag } from "./bag";
import { Rack } from "./rack";
import { IGameState } from "./igamestate";

// Note: a state change is simply a change in turn
export class Game {
    public id: string = _.now().toString(36);
    public teams: number;
    /** Raw action strings */
    public actions: string[] = [];
    public actionIndex: number = -1;
    public teamTurn: number = 1;

    public constructor(teams: number) {
        this.teams = teams;
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
        console.log(`It's team ${this.teamTurn}'s turn`);
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

        this._handleTurn(actionType);
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

    private _handleTurn(actionType: ActionType): void {
        const isUndo = actionType === ActionType.Undo;

        if (isUndo || actionType === ActionType.Redo) {
            // Get new previous state's action type.
            const index = isUndo
                ? Math.min(this.actions.length - 1, this.actionIndex + 1)
                : Math.max(0, this.actionIndex - 1);
            actionType = parseAction(this.actions[index])[0];
        }

        if (actionChangesTurn(actionType)) {
            this.teamTurn = getNextTurn(this.teams, this.teamTurn, isUndo);
        }
    }
}
