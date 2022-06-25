export interface Lobby {
    dalleId: string;
    wrongGuesses: string[];
    correctGuesses: string[];
    scoreboard: {
        [key: string]: number;
    };
}
