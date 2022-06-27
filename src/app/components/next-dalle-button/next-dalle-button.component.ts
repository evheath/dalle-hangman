import { Component, OnInit } from '@angular/core';
import { Lobby } from 'library';
import { LobbyService } from 'src/app/services/lobby.service';

@Component({
  selector: 'app-next-dalle-button',
  templateUrl: './next-dalle-button.component.html',
  styleUrls: ['./next-dalle-button.component.css']
})
export class NextDalleButtonComponent implements OnInit {
  public loading: boolean = false;

  constructor(
    private lobbyService: LobbyService
  ) { }

  ngOnInit(): void {
  }

  public async older() {
    this.loading = true;
    await this.lobbyService.goToOlderDalle()
    this.loading = false;
  }

}
