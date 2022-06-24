import { Component, OnInit } from '@angular/core';
import { Dalle, Lobby } from 'library';
import { DalleService } from 'src/app/services/dalle.service';
import { LobbyService } from 'src/app/services/lobby.service';

@Component({
  selector: 'app-right-guesses',
  templateUrl: './right-guesses.component.html',
  styleUrls: ['./right-guesses.component.css']
})
export class RightGuessesComponent implements OnInit {
  public loading: boolean = false;

  constructor(
    public lobbyService: LobbyService,
    public dalleService: DalleService,
  ) { }

  ngOnInit(): void {
  }

  public async reveal(lobby: Lobby, dalle: Dalle) {
    this.loading = true;
    const words: string[] = dalle.prompt.split(" ");
    lobby.correctGuesses = [
      ...lobby.correctGuesses,
      ...words
    ]
    await this.lobbyService.updateLobby(lobby)
    this.loading = false;
  }

  public async hint(lobby: Lobby, dalle: Dalle) {
    this.loading = true;
    let word = dalle.prompt.split(" ").find(word => !lobby.correctGuesses.includes(word));
    if (word) {
      lobby.correctGuesses.push(word);
      await this.lobbyService.updateLobby(lobby)
    }
    this.loading = false;
  }

  public async older() {
    this.loading = true;
    await this.lobbyService.goToOlderDalle();
    this.loading = false;
  }
  public async newer() {
    this.loading = true;
    await this.lobbyService.goToNewerDalle();
    this.loading = false;
  }

}
