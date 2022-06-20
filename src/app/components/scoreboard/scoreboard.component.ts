import { Component, OnInit } from '@angular/core';
import { LobbyService } from 'src/app/services/lobby.service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {

  constructor(
    public lobbyService: LobbyService
  ) { }

  ngOnInit(): void {
  }

}
