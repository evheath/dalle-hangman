import { Component, OnInit } from '@angular/core';
import { Dalle, Lobby } from 'src/app/models';
import { faker } from '@faker-js/faker';
import { LobbyService } from 'src/app/services/lobby.service';
import { DalleService } from 'src/app/services/dalle.service';

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
  ) { }

  ngOnInit(): void {
  }

  public async submitGuess(lobby: Lobby, dalle: Dalle) {
    let updatedLobbyInfo = {} as Lobby;
    updatedLobbyInfo.correctGuesses = lobby.correctGuesses;
    updatedLobbyInfo.wrongGuesses = lobby.wrongGuesses;
    let words = this.guess ? this.guess.split(" ") : [this.placeholder];
    for (let word of words) {
      // stripping out punctuation, whitespace, and capital letters
      word = word.replace(/[^A-Za-z]+/g, "").toLowerCase();

      if (word == "") {
        continue;
      }

      let wrongGuess = !dalle.phrase.includes(word) && !updatedLobbyInfo.wrongGuesses.includes(word);;
      if (wrongGuess) {
        updatedLobbyInfo.wrongGuesses.push(word);
      }

      let correctGuess = dalle.phrase.includes(word) && !updatedLobbyInfo.correctGuesses.includes(word);
      if (correctGuess) {
        updatedLobbyInfo.correctGuesses.push(word);

      }
    }
    this.guess = "";
    this.placeholder = faker.random.word();
    await this.lobbyService.updateLobby(updatedLobbyInfo);
  }

}
