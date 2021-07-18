import { ComputerDifficulty } from "../enums/computerdifficulty";

export function extendComputerName(
    userName: string,
    difficulty: ComputerDifficulty
): string {
    userName += " (" + String.fromCodePoint(0x1f916);
    switch (difficulty) {
        case ComputerDifficulty.Easy:
            return userName + " easy)";
        case ComputerDifficulty.Medium:
            return userName + " medium)";
        case ComputerDifficulty.Hard:
            return userName + " hard)";
        default:
            return userName + ")";
    }
}
