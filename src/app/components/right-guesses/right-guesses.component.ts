import { Component, OnInit } from '@angular/core';
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

  public async older() {
    this.loading = true;
    await this.lobbyService.goToOlderDalle();
    this.loading = false;
  }


}
