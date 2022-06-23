import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { assimilatePrompt } from 'library';
@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.css']
})
export class GenerateComponent implements OnInit {

  public newPrompt = "Monkey eating a pineapple";
  constructor(
    private db: AngularFirestore
  ) { }

  ngOnInit(): void {
  }

  public async submitPhrase() {
    const prompt = assimilatePrompt(this.newPrompt);
    console.log(`submitting : ${prompt}`);
    await this.db.collection('submissions').add({ prompt })

  }

}
