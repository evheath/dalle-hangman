import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Dalle, Lobby } from 'src/app/models';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit, OnDestroy {
  public lobbyId: string = "";
  private subs = new Subscription();
  public lobbyDoc$: Observable<Lobby | undefined> = new Observable();
  public dalleDoc$: Observable<Dalle | undefined> = new Observable();

  constructor(
    private route: ActivatedRoute,
    private db: AngularFirestore,
  ) {

  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  async ngOnInit() {
    this.subs.add(
      this.route.params.subscribe(async params => {
        this.lobbyId = params['id'];
        this.lobbyDoc$ = this.db.doc<Lobby>(`lobbies/${this.lobbyId}`).valueChanges();
        this.dalleDoc$ = this.db.doc<Dalle>(`dalle/${this.lobbyId}`).valueChanges();
      })
    );

    // listen to lobby doc and update dalle doc accordingly
    this.subs.add(
      this.lobbyDoc$.subscribe(async lobby => {
        if (lobby) {
          this.dalleDoc$ = this.db.doc<Dalle>(`dalle/${lobby.dalle}`).valueChanges();
        }
      })
    );
  }

}
