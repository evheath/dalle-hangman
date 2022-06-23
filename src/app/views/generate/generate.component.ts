import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { faker } from '@faker-js/faker';
import { assimilatePrompt } from 'library';
@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.css']
})
export class GenerateComponent implements OnInit {

  public newPrompt = "";
  public placeholder: string = "";
  constructor(
    private db: AngularFirestore
  ) {
    this.newPlaceholder();
  }

  ngOnInit(): void {
  }

  public newPlaceholder() {
    this.placeholder = `${faker.word.adjective()} ${faker.word.noun()} ${faker.word.preposition()} a ${faker.word.noun()}`;
  }



  public get prompt(): string {
    return this.newPrompt.length >= 1
      ? assimilatePrompt(this.newPrompt)
      : assimilatePrompt(this.placeholder);
  }


  public async submitPhrase() {
    // this.prompt
    // // const prompt = 
    // console.log(`submitting : ${this.prompt}`);
    await this.db.doc(`submissions/${this.prompt}`).set({});
    // .set({
    //   prompt: this.prompt
    // })

  }

}
