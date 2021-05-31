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
import { playCommandHasLettersFromRack } from "./logic/playcommandhaslettersfromrack";
import { createRackFromActions } from "./logic/createrackfromactions";
import { BOARD_X_LENGTH, BOARD_Y_LENGTH } from "./logic/constants";
import { Bag } from "./bag";
import { Rack } from "./rack";

// Note: a state change is simply a change in turn
export class Game {
    public id: number = _.random(999_999_999);
    public teams: number;
    /** Includes raw action strings */
    public actions: string[] = [];
    public actionIndex: number = -1;
    public teamTurn: number = 1;
    public bag: Bag;
    public racks: Rack[];

    public constructor(teams: number) {
        this.teams = teams;
        this._handleAction(ActionType.NewGame);
        this.bag = new Bag();
        this.racks = _.times(teams, () => new Rack());
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
        console.log(`Tiles remaining in bag ` + this.bag.print());
        const board = createBoardFromActions(
            this.actions.slice(0, this.actionIndex + 1)
        );
        console.log(printBoard(board));
        this.actions.forEach((action, i) => {
            if (i === this.actionIndex) action += " <<<";
            console.log(i + 1 + ". " + action);
        });
        console.log(`It's team ${this.teamTurn}'s turn`);
        console.log(`Current letters: ` + this._teamTurnRack().print());
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

    private _teamTurnRack(): Rack {
        return createRackFromActions(
            this.actions.slice(0, this.actionIndex + 1),
            this.teams
        );
    }

    private _draw(): Letter[] {
        const rack = this._teamTurnRack();
        const drawn = this.bag.draw(rack.needs());
        rack.add(drawn);
        return drawn;
    }

    /** @returns raw action containing drawn letters as well as exchanged letters */
    private _swap(actionRaw: string): string {
        const letters = parseAction(actionRaw)[1].split("").map(parseLetter);
        const rack = this._teamTurnRack();
        rack.remove(letters);
        const newLetters = this.bag.swap(letters);
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
        const board = createBoardFromActions(
            this.actions.slice(0, this.actionIndex + 1)
        );

        if (!isValid) return "Word doesn't use letters from rack (1)";

        try {
            const result = playMove(move, board);
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
