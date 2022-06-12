import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

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
    const lobbyRef = await this.db.collection('lobbies').add({});
    this.router.navigate(['lobby', lobbyRef.id]);

    this.loading = false;
  }

}
