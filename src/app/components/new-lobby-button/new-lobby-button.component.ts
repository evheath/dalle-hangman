import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Lobby } from 'library';
import { LobbyService } from 'src/app/services/lobby.service';

@Component({
  selector: 'app-new-lobby-button',
  templateUrl: './new-lobby-button.component.html',
  styleUrls: ['./new-lobby-button.component.css']
})
export class NewLobbyButtonComponent implements OnInit {
  public loading: boolean = false;

  constructor(
    private db: AngularFirestore,
    private router: Router,
    private lobbyService: LobbyService
  ) { }

  ngOnInit(): void {
  }

  public async createLobby() {
    this.loading = true;
    const dalleId = await this.lobbyService.randomDalleId();

    const newLobby: Lobby = {
      dalleId,
      wrongGuesses: [],
      correctGuesses: [],
      scoreboard: {}
    };
    const lobbyRef = await this.db.collection<Lobby>('lobbies').add(newLobby);
    this.router.navigate(['lobby', lobbyRef.id]);

    this.loading = false;
  }

}
