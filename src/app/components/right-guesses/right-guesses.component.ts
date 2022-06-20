import { Component, OnInit } from '@angular/core';
import { LobbyService } from 'src/app/services/lobby.service';

@Component({
  selector: 'app-right-guesses',
  templateUrl: './right-guesses.component.html',
  styleUrls: ['./right-guesses.component.css']
})
export class RightGuessesComponent implements OnInit {

  constructor(
    public lobbyService: LobbyService
  ) { }

  ngOnInit(): void {
  }

}
