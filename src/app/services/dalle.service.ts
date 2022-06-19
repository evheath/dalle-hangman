import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, shareReplay, switchMap, of } from 'rxjs';
import { Dalle } from 'src/app/models';
import { LobbyService } from './lobby.service';


@Injectable({
  providedIn: 'root'
})
export class DalleService {
  public dalleDoc$: Observable<Dalle>;

  constructor(
    private lobbyService: LobbyService,
    private db: AngularFirestore,
  ) {
    this.dalleDoc$ = this.lobbyService.lobbyDoc$.pipe(
      switchMap(lobby => {
        if (lobby) {
          // this is naive because the lobby will be changing frequently
          // ideally we would want to listen if the dalleId changes
          return this.db.doc<Dalle>(`dalle/${lobby.dalleId}`).valueChanges() as Observable<Dalle>
        } else {
          return new Observable<Dalle>()
        }
      }),
      shareReplay(1),
    )
  }

}
