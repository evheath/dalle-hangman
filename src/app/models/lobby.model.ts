export interface Lobby {
  dalleId: string;
  wrongGuesses: string[];
  correctGuesses: string[];
  scoreboard: {
    [uid: string]: number
  }
}