export interface User {
    uid: string;
    name: string;
}
export interface Submission {
    prompt: string;
}
export interface Lobby {
    dalleId: string;
    wrongGuesses: string[];
    correctGuesses: string[];
    scoreboard: {
        [key: string]: number;
    };
}
export { Dalle } from './dalle.model';
export declare function assimilatePrompt(prompt: string): string;
