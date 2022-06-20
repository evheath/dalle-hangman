import { Component, OnInit } from '@angular/core';
import { Lobby } from 'src/app/models';
import { LobbyService } from 'src/app/services/lobby.service';

@Component({
  selector: 'app-next-dalle-button',
  templateUrl: './next-dalle-button.component.html',
  styleUrls: ['./next-dalle-button.component.css']
})
export class NextDalleButtonComponent implements OnInit {

  constructor(
    private lobbyService: LobbyService
  ) { }

  ngOnInit(): void {
  }

  /**
   * nextDalle
   */
  public async nextDalle() {
    // console.log("next dalle");
    let lobby = {} as Lobby;
    lobby.dalleId = "8AkD7jZfqST0B2z26BGX";
    this.lobbyService.updateLobby(lobby)
  }

}
