import { Component, OnInit } from '@angular/core';
import { Dalle, Lobby } from 'library';
import { LobbyService } from 'src/app/services/lobby.service';
import { DalleService } from 'src/app/services/dalle.service';
import { AuthService } from 'src/app/services/auth.service';
import { arrayUnion } from 'firebase/firestore'
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-guess-input',
  templateUrl: './guess-input.component.html',
  styleUrls: ['./guess-input.component.css']
})
export class GuessInputComponent implements OnInit {
  private scoreIncrement = 1;
  private scoreDecrement = 10;
  public guess: string = "";
  public placeholder = "r s t l n e";
  constructor(
    public lobbyService: LobbyService,
    public dalleService: DalleService,
    public authService: AuthService,
    private snack: MatSnackBar,
  ) { }

  ngOnInit(): void {
  }

  public async submitGuess(lobby: Lobby, dalle: Dalle) {
    const newCorrectGuesses: string[] = [];
    const newWrongGuesses: string[] = [];
    let me = await this.authService.me$.getValue();
    let uid = me!.uid;
    let newScore = lobby.scoreboard[uid] ? lobby.scoreboard[uid] : 0;

    let letters = this.guess ? this.guess.split("") : this.placeholder.split("");
    for (let letter of letters) {
      // stripping out punctuation, whitespace, and capital letters
      letter = letter.toLowerCase().replace(/[^a-z]+/g, "");

      let emptyGuess = letter == "";
      if (emptyGuess) {
        continue;
      }

      let alreadyGuessed = lobby.wrongGuesses.includes(letter) || lobby.correctGuesses.includes(letter);
      if (alreadyGuessed) {
        this.snack.open(`'${letter}' has already been guessed`, "Dismiss", { duration: 2000 });
        continue;
      }



      let wrongGuess = !dalle.prompt.includes(letter) && !lobby.wrongGuesses.includes(letter);
      if (wrongGuess) {
        newWrongGuesses.push(letter);
        newScore -= this.scoreDecrement;
        this.snack.open(`no '${letter}' in prompt`, `-${this.scoreDecrement}`, { duration: 2000 });
        continue;
      }

      let correctGuess = dalle.prompt.includes(letter) && !lobby.correctGuesses.includes(letter);
      if (correctGuess) {
        newCorrectGuesses.push(letter);
        this.snack.open(`'${letter}' is in prompt!`, `+${this.scoreIncrement}`, { duration: 2000 });
        newScore += this.scoreIncrement;
      }
    }

    this.guess = "";
    this.placeholder = this.randomLetter();

    await this.lobbyService.updateLobby({
      ["scoreboard." + uid]: newScore,
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
