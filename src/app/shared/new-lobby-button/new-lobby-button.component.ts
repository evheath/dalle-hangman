import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-new-lobby-button',
  templateUrl: './new-lobby-button.component.html',
  styleUrls: ['./new-lobby-button.component.css']
})
export class NewLobbyButtonComponent implements OnInit {

  constructor(
    private db: AngularFirestore,
  ) { }

  ngOnInit(): void {
  }

  /**
   * createLobby
   */
  public async createLobby() {
    // console.log("creating lobby");
    const lobbyRef = await this.db.collection('lobbies').add({});
  }

}
