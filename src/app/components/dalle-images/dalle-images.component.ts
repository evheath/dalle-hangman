import { Component, Input, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
import { LobbyService } from 'src/app/services/lobby.service';

@Component({
  selector: 'app-dalle-images',
  templateUrl: './dalle-images.component.html',
  styleUrls: ['./dalle-images.component.css']
})
export class DalleImagesComponent implements OnInit {

  public urls$: Observable<any>[] = [];
  private dalleId: string = "";

  constructor(
    public storage: AngularFireStorage,
    private lobbyService: LobbyService
  ) {
    this.lobbyService.lobbyDoc$.subscribe(lobby => {
      if (lobby) {
        if (lobby.dalleId != this.dalleId) {
          this.newDalleId(lobby.dalleId);
        }

      }
    })
  }

  ngOnInit(): void {
  }

  public getUrl(number: number): Observable<any> {
    let location = `${this.dalleId}/${number}.jpg`
    return this.storage.ref(location).getDownloadURL();
  }

  private newDalleId(newId: string) {
    this.dalleId = newId;
    this.urls$ = [];
    for (let index = 1; index < 10; index++) {
      this.urls$.push(this.getUrl(index));

    }
  }

}
