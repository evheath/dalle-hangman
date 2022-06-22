import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Lobby } from 'src/app/models';

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
  ) { }

  ngOnInit(): void {
  }

  /**
   * createLobby
   */
  public async createLobby() {
    // console.log("creating lobby");
    this.loading = true;
    let newLobby: Lobby = {
      dalleId: "idQBL5Em26JB4Dkjiivf",
      wrongGuesses: [],
      correctGuesses: [],
      scoreboard: {}
    };
    const lobbyRef = await this.db.collection<Lobby>('lobbies').add(newLobby);
    this.router.navigate(['lobby', lobbyRef.id]);

    this.loading = false;
  }

}
