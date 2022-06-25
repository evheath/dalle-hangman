import { Component, OnInit } from '@angular/core';
import { Dalle, Lobby } from 'library';
import { LobbyService } from 'src/app/services/lobby.service';
import { DalleService } from 'src/app/services/dalle.service';
import { AuthService } from 'src/app/services/auth.service';
import { arrayUnion } from 'firebase/firestore'

@Component({
  selector: 'app-guess-input',
  templateUrl: './guess-input.component.html',
  styleUrls: ['./guess-input.component.css']
})
export class GuessInputComponent implements OnInit {
  public guess: string = "";
  public placeholder = "r s t l n e";
  constructor(
    public lobbyService: LobbyService,
    public dalleService: DalleService,
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  public async submitGuess(lobby: Lobby, dalle: Dalle) {
    const newCorrectGuesses: string[] = [];
    const newWrongGuesses: string[] = [];
    let me = await this.authService.me$.getValue();
    let uid = me!.uid;
    let newScore = lobby.scoreboard[uid] ? lobby.scoreboard[uid] : 0;

    let words = this.guess ? this.guess.split("") : this.placeholder.split("");
    for (let word of words) {
      // stripping out punctuation, whitespace, and capital letters
      word = word.toLowerCase().replace(/[^a-z]+/g, "");

      if (word == "") {
        continue;
      }
      let wrongGuess = !dalle.prompt.includes(word) && !lobby.wrongGuesses.includes(word);;
      if (wrongGuess) {
        newWrongGuesses.push(word);
        newScore -= 10;
      }

      let correctGuess = dalle.prompt.includes(word) && !lobby.correctGuesses.includes(word);
      if (correctGuess) {
        newCorrectGuesses.push(word);
        newScore += 1
      }
    }
    this.guess = "";
    this.placeholder = this.randomLetter();
    let scoreboardDotUid = "scoreboard." + uid;
    await this.lobbyService.updateLobby({
      [scoreboardDotUid]: newScore,
      //   absolute hack for typescript to work with arrayUnion
      // https://github.com/angular/angularfire/issues/2008
      correctGuesses: arrayUnion(...newCorrectGuesses) as unknown as string[],
      wrongGuesses: arrayUnion(...newWrongGuesses) as unknown as string[],
    });
  }

  private randomLetter() {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    return letters[Math.floor(Math.random() * letters.length)];
  }

}
