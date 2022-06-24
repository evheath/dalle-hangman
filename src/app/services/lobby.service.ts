import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Lobby } from 'library';

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

  public async goNext() {
    const newDalleId = await this.randomDalleId();
    this.lobbyRef.update({
      correctGuesses: [],
      wrongGuesses: [],
      dalleId: newDalleId,
    })

  }

  private randomLetter(): string {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    let randomNum = Math.floor(Math.random() * alphabet.length)

    return alphabet[randomNum];
  }


  public async randomDalleId(): Promise<string> {

    const query = await this.db.collection('dalle',
      ref => ref.where('__name__', '>=', `${this.randomLetter()}`)
        .limit(1)
    ).get().toPromise();
    if (query && !query.empty) {
      // console.log(`succesful query: ${query.docs[0].id}`);
      return query.docs[0].id
    } else {
      // console.log(`unsuccesful query`);
      return "astronaut riding a bike on the moon";
    }
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
