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
    let firstWord = this.guess.split(" ")[0];
    console.log(`submit guess: ${firstWord}`);
    // let wrongGuess = !dalle.phrase.includes(firstWord) && !lobby.wrongGuesses.includes(firstWord);;
    // if (wrongGuess) {
    //   console.log("incorrect guess");
    //   await this.lobbyRef.update({
    //     wrongGuesses: [
    //       ...lobby.wrongGuesses,
    //       firstWord]
    //   });
    // }

    // let correctGuess = dalle.phrase.includes(firstWord) && !lobby.correctGuesses.includes(firstWord);
    // if (correctGuess) {
    //   console.log("correct guess");
    //   await this.lobbyRef.update({
    //     correctGuesses: [
    //       ...lobby.correctGuesses,
    //       firstWord]
    //   });
    // }
  }

}
