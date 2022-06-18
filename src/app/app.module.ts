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

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    ComingsoonComponent,
    NewLobbyButtonComponent,
    LobbyComponent,
    DalleImagesComponent,
    WrongGuessesComponent,
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
