import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Dalle } from 'src/app/models';
import { LobbyService } from './lobby.service';


@Injectable({
  providedIn: 'root'
})
export class DalleService {
  private dalleId: string = "";
  public dalleDoc$: BehaviorSubject<Dalle | null> = new BehaviorSubject<Dalle | null>(null);
  private subs: Subscription = new Subscription();

  constructor(
    private lobbyService: LobbyService,
    private db: AngularFirestore,
  ) {
    this.lobbyService.lobbyDoc$.subscribe(lobbyDoc => {
      if (lobbyDoc && lobbyDoc.dalleId != this.dalleId) {
        this.dalleId = lobbyDoc.dalleId;
        this.subs.unsubscribe();
        this.subs = new Subscription();
        this.subs.add(
          this.db.doc<Dalle>(`dalle/${this.dalleId}`).valueChanges().subscribe(dalle => {
            if (dalle) {
              this.dalleDoc$.next(dalle);
            }
          }
          ))
      }
    })
  }

}
