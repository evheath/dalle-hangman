import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit, OnDestroy {
  public lobbyId: string = "";
  private subs = new Subscription();

  constructor(
    private route: ActivatedRoute,
  ) {

  }
  ngOnDestroy(): void {
    // throw new Error('Method not implemented.');
    this.subs.unsubscribe();
  }

  ngOnInit(): void {
    this.subs.add(
      this.route.params.subscribe(params => {
        this.lobbyId = params['id'];
      })
    );
  }

}
