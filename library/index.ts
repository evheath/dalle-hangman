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

export interface Dalle {
  prompt: string;
  images: string[];
}

export function assimilatePrompt(prompt: string): string {
  return prompt.split(" ")
    .map(word => word.replace(/[^A-Za-z]+/g, "").toLowerCase())
    .join(" ");

}