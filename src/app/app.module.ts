import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { TopnavComponent } from './components/topnav/topnav.component';
import { ComingsoonComponent } from './views/comingsoon/comingsoon.component';
import { NewLobbyButtonComponent } from './components/new-lobby-button/new-lobby-button.component';
import { LobbyComponent } from './views/lobby/lobby.component';
import { FormsModule } from '@angular/forms';
import { DalleImagesComponent } from './components/dalle-images/dalle-images.component';

import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { WrongGuessesComponent } from './components/wrong-guesses/wrong-guesses.component';
import { RightGuessesComponent } from './components/right-guesses/right-guesses.component';
import { GuessInputComponent } from './components/guess-input/guess-input.component';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';
import { ChangeNameComponent } from './components/change-name/change-name.component';
import { NextDalleButtonComponent } from './components/next-dalle-button/next-dalle-button.component';
import { AdventurerUrlPipe } from './pipes/adventurer-url.pipe';
import { PhraseUnderscorePipe } from './pipes/phrase-underscore.pipe';
import { GenerateComponent } from './views/generate/generate.component';

import { BlobToUrlPipe } from './pipes/blob-to-url.pipe';
import { AssimilatePromptPipe } from './pipes/assimilate-prompt.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { UidToUserDocPipe } from './pipes/uid-to-user-doc.pipe';
import { PrevDalleButtonComponent } from './components/prev-dalle-button/prev-dalle-button.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ChangeNameModalComponent } from './components/change-name-modal/change-name-modal.component';
@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    ComingsoonComponent,
    NewLobbyButtonComponent,
    LobbyComponent,
    DalleImagesComponent,
    WrongGuessesComponent,
    RightGuessesComponent,
    GuessInputComponent,
    ScoreboardComponent,
    ChangeNameComponent,
    NextDalleButtonComponent,
    AdventurerUrlPipe,
    PhraseUnderscorePipe,
    GenerateComponent,
    BlobToUrlPipe,
    AssimilatePromptPipe,
    UidToUserDocPipe,
    PrevDalleButtonComponent,
    ChangeNameModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    AngularFireStorageModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
