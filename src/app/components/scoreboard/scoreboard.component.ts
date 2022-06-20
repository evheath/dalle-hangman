import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { LobbyService } from 'src/app/services/lobby.service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {

  constructor(
    public lobbyService: LobbyService,
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }

}
