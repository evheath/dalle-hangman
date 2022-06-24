import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { faker } from '@faker-js/faker';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, of } from 'rxjs';
import { AssimilatePromptPipe } from 'src/app/pipes/assimilate-prompt.pipe';
@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.css'],
  providers: [AssimilatePromptPipe]
})
export class GenerateComponent implements OnInit {
  public dalle$: Observable<any> = of(null);
  public lastSubmitted: string = "";
  public newPrompt = "";
  public placeholder: string = "";
  constructor(
    private db: AngularFirestore,
    private snackBar: MatSnackBar,
    private assimilatePipe: AssimilatePromptPipe
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
      ? this.assimilatePipe.transform(this.newPrompt)
      : this.assimilatePipe.transform(this.placeholder);
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
