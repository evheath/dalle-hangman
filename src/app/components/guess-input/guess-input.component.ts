import { Component, OnInit } from '@angular/core';
import { Dalle, Lobby } from 'src/app/models';
import { faker } from '@faker-js/faker';
import { LobbyService } from 'src/app/services/lobby.service';
import { DalleService } from 'src/app/services/dalle.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-guess-input',
  templateUrl: './guess-input.component.html',
  styleUrls: ['./guess-input.component.css']
})
export class GuessInputComponent implements OnInit {
  public guess: string = "";
  public placeholder = faker.random.word();
  constructor(
    public lobbyService: LobbyService,
    public dalleService: DalleService,
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  public async submitGuess(lobby: Lobby, dalle: Dalle) {
    let words = this.guess ? this.guess.split(" ") : [this.placeholder];
    let me = await this.authService.me$.getValue();
    let uid = me!.uid;

    for (let word of words) {
      // stripping out punctuation, whitespace, and capital letters
      word = word.replace(/[^A-Za-z]+/g, "").toLowerCase();

      if (word == "") {
        continue;
      }

      let wrongGuess = !dalle.prompt.includes(word) && !lobby.wrongGuesses.includes(word);;
      if (wrongGuess) {
        lobby.wrongGuesses.push(word);

        // subtract 1 from this user's score, not sure if I want to do this
        if (!lobby.scoreboard[uid]) {
          lobby.scoreboard[uid] = 0;
        }
      }

      let correctGuess = dalle.prompt.includes(word) && !lobby.correctGuesses.includes(word);
      if (correctGuess) {
        lobby.correctGuesses.push(word);

        // add 1 from this user's score
        if (lobby.scoreboard[uid]) {
          // console.log("we are on the board");

          lobby.scoreboard[uid] += 1;

        } else {
          // console.log("we are not on the board");
          lobby.scoreboard[uid] = 1;
        }
      }
    }
    this.guess = "";
    this.placeholder = faker.random.word();
    await this.lobbyService.updateLobby(lobby);
  }

}
