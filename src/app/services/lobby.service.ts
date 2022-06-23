import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Lobby } from 'library';
import { faker } from '@faker-js/faker';

@Injectable({
  providedIn: 'root'
})
export class LobbyService {
  private lobbyRef!: AngularFirestoreDocument<Lobby>;
  public lobbyDoc$: BehaviorSubject<Lobby | null> = new BehaviorSubject<Lobby | null>(null);
  private subs: Subscription = new Subscription();

  constructor(
    private db: AngularFirestore,
  ) {
  }

  public async randomDalleId(): Promise<string> {
    const query = await this.db.collection('dalle',
      ref => ref.where('__name__', '>=', faker.random.word())
        .limit(1)
    ).get().toPromise();
    return query && !query.empty
      ? query.docs[0].id
      : "astronaut riding a bike on the moon";
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
