import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { faker } from '@faker-js/faker';
import { assimilatePrompt } from 'library';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, of } from 'rxjs';
@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.css']
})
export class GenerateComponent implements OnInit {
  public dalle$: Observable<any> = of(null);
  public lastSubmitted: string = "";
  public newPrompt = "";
  public placeholder: string = "";
  constructor(
    private db: AngularFirestore,
    private snackBar: MatSnackBar
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
    this.db.doc(`submissions/${this.prompt}`).set({}).then(success => {
      this.lastSubmitted = this.prompt;
      this.snackBar.open(`Successful submission`, "Dismiss", {
        duration: 2000,
      })
      this.dalle$ = this.db.doc(`dalle/${this.prompt}`).valueChanges();
    }).catch(err => {
      this.snackBar.open(`Error submitting`, "Dismiss")
    })

  }

}
