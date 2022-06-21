import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phraseUnderscore'
})
export class PhraseUnderscorePipe implements PipeTransform {

  transform(phrase: string, correctGuesses: string[]): string {
    let returningString = "";
    let words = phrase.split(" ");
    for (const word of words) {
      if (correctGuesses.includes(word)) {
        returningString += word;
        returningString += " ";
      } else {
        returningString += "_".repeat(word.length);
        returningString += " ";
      }
    }
    return returningString;
  }

}
