import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Dalle, Lobby } from 'library';

@Injectable({
  providedIn: 'root'
})
export class LobbyService {
  private subs: Subscription = new Subscription();
  private timestampCursor: number = Date.now();
  private lobbyRef!: AngularFirestoreDocument<Lobby>;
  public lobbyDoc$: BehaviorSubject<Lobby | null> = new BehaviorSubject<Lobby | null>(null);

  constructor(
    private db: AngularFirestore,
  ) {
  }

  private async changeDalle(dalleId: string) {
    this.lobbyRef.update({
      correctGuesses: [],
      wrongGuesses: [],
      dalleId: dalleId,
    })
  }

  public async goToOlderDalle() {
    const olderDalleId = await this.getNextDalleId(false, this.timestampCursor);
    if (olderDalleId) {
      this.changeDalle(olderDalleId);

    }

  }
  public async goToNewerDalle() {
    const newerDalleId = await this.getNextDalleId(true, this.timestampCursor);
    if (newerDalleId) {
      this.changeDalle(newerDalleId);

    }

  }


  public async getNextDalleId(newer: boolean = true, cursor: number = Date.now()): Promise<string | null> {

    const query = await this.db.collection<Dalle>('dalle',
      ref => ref
        .orderBy('timestamp', newer ? 'asc' : 'desc')
        .limit(1)
        .startAfter(cursor)
    ).get().toPromise();

    if (query && !query.empty) {
      this.timestampCursor = query.docs[0].data().timestamp
      return query.docs[0].id
    }
    return null
  }


  public newLobby(lobbyId: string) {
    this.lobbyRef = this.db.doc<Lobby>(`lobbies/${lobbyId}`);

    this.subs.unsubscribe();
    this.subs = new Subscription();

    this.subs.add(
      this.lobbyRef.valueChanges().subscribe(lobby => {
        if (lobby) {
          this.lobbyDoc$.next(lobby);
        }
      })
    )
  }

  public async updateLobby(lobby: Lobby) {
    return this.lobbyRef.update(lobby);
  }
}
