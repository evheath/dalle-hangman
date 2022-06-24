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
    [key: string]: number
  }
}

export { Dalle } from './dalle.model';

export function assimilatePrompt(prompt: string): string {
  return prompt.split(" ")
    .map(word => word.replace(/[^A-Za-z]+/g, "").toLowerCase())
    .filter(word => word.length > 0)
    .join(" ");

}