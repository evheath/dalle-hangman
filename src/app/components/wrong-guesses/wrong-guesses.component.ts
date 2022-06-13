import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wrong-guesses',
  templateUrl: './wrong-guesses.component.html',
  styleUrls: ['./wrong-guesses.component.css']
})
export class WrongGuessesComponent implements OnInit {


  @Input() guesses: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
