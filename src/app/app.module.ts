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
import { UidToNamePipe } from './pipes/uid-to-name.pipe';
import { NextDalleButtonComponent } from './components/next-dalle-button/next-dalle-button.component';
import { AdventurerUrlPipe } from './pipes/adventurer-url.pipe';
import { PhraseUnderscorePipe } from './pipes/phrase-underscore.pipe';
import { GenerateComponent } from './views/generate/generate.component';

import { BlobToUrlPipe } from './pipes/blob-to-url.pipe';
import { AssimilatePromptPipe } from './pipes/assimilate-prompt.pipe';
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
    UidToNamePipe,
    NextDalleButtonComponent,
    AdventurerUrlPipe,
    PhraseUnderscorePipe,
    GenerateComponent,
    BlobToUrlPipe,
    AssimilatePromptPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    AngularFireStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
