import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, tap } from 'rxjs';
import { Dalle, Lobby } from 'src/app/models';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit, OnDestroy {
  public placeholder = faker.random.word();
  public guess: string = "";
  // public lobbyId: string = "";
  private subs = new Subscription();
  public lobbyDoc$: Observable<Lobby> = new Observable();
  public dalleDoc$: Observable<Dalle> = new Observable();
  // public dalleData: Dalle = {} as Dalle;
  private lobbyRef!: AngularFirestoreDocument<Lobby>;

  public async submitGuess(lobby: Lobby, dalle: Dalle) {
    let firstWord = this.guess.split(" ")[0];
    console.log(`submit guess: ${firstWord}`);
    let wrongGuess = !dalle.phrase.includes(firstWord) && !lobby.wrongGuesses.includes(firstWord);;
    if (wrongGuess) {
      console.log("incorrect guess");
      await this.lobbyRef.update({
        wrongGuesses: [
          ...lobby.wrongGuesses,
          firstWord]
      });
    }

    let correctGuess = dalle.phrase.includes(firstWord) && !lobby.correctGuesses.includes(firstWord);
    if (correctGuess) {
      console.log("correct guess");
      await this.lobbyRef.update({
        correctGuesses: [
          ...lobby.correctGuesses,
          firstWord]
      });
    }
  }

  constructor(
    private route: ActivatedRoute,
    private db: AngularFirestore,
  ) {

  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  async ngOnInit() {
    // listening to changes to the route
    this.subs.add(
      this.route.params.subscribe(async params => {
        let lobbyId = params['id'];
        this.lobbyRef = this.db.doc<Lobby>(`lobbies/${lobbyId}`);
        this.lobbyDoc$ = this.lobbyRef.valueChanges() as Observable<Lobby>;
      })
    );

    // listening to changes to the lobby doc
    this.subs.add(
      this.lobbyDoc$.subscribe(async lobby => {
        if (lobby) {
          // let dalleRef = this.db.doc<Dalle>(`dalle/${lobby.dalle}`);
          this.dalleDoc$ = this.db.doc<Dalle>(`dalle/${lobby.dalleId}`).valueChanges() as Observable<Dalle>;
          // this.dalleData = await dalleRef.get().toPromise().then(d => d!.data() as Dalle);
        }
      })
    );
  }

}
