import { Component, Input, OnInit } from '@angular/core';
import { LobbyService } from 'src/app/services/lobby.service';

@Component({
  selector: 'app-wrong-guesses',
  templateUrl: './wrong-guesses.component.html',
  styleUrls: ['./wrong-guesses.component.css']
})
export class WrongGuessesComponent implements OnInit {


  @Input() guesses: string[] = [];

  constructor(
    public lobbyService: LobbyService
  ) { }

  ngOnInit(): void {
  }

}
