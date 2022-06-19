import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LobbyService } from 'src/app/services/lobby.service';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css'],
})
export class LobbyComponent implements OnInit, OnDestroy {



  constructor(
    public lobbyService: LobbyService,
    private route: ActivatedRoute,
  ) {
    this.route.params.subscribe(params => {
      const lobbyId = params['lobbyId'];
      if (lobbyId) {
        this.lobbyService.newLobby(params['lobbyId']);

      }
    })
  }

  ngOnDestroy(): void {
  }

  ngOnInit() {

  }

}
