import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phraseUnderscore'
})
export class PhraseUnderscorePipe implements PipeTransform {

  transform(prompt: string, correctGuesses: string[]): string {
    let returningString = "";
    let promptLetters = prompt.split("");
    for (const promptLetter of promptLetters) {
      if (promptLetter === " ") {
        returningString += " ";
      } else if (correctGuesses.includes(promptLetter)) {
        returningString += promptLetter;
        // returningString += " ";
      } else {
        returningString += "_";
        // returningString += "_".repeat(word.length);
        // returningString += " ";
      }
    }
    return returningString;
  }

}
