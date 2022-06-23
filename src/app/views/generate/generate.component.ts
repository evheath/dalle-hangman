import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.css']
})
export class GenerateComponent implements OnInit {

  public newPrompt = "Monkey eating a pineapple";
  constructor(
  ) { }

  ngOnInit(): void {
  }

  public submitPhrase() {
    console.log(`submitting phrase: ${this.newPrompt}`);
  }

}
