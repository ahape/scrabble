import { Letter } from "./letter";

export interface IMove {
    x: number;
    y: number;
    isVertical: boolean;
    letters: Letter[];
    id: string;
}
