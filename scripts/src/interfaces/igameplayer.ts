import { ComputerDifficulty } from "../enums/computerdifficulty";

export interface IGamePlayer {
    id: number;
    gameId: string;
    team: number;
    userName: string;
    isComputer: boolean;
    computerDifficulty: ComputerDifficulty;
}
