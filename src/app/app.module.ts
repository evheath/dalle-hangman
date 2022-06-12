import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { TopnavComponent } from './shared/topnav/topnav.component';
import { ComingsoonComponent } from './views/comingsoon/comingsoon.component';
import { NewLobbyButtonComponent } from './shared/new-lobby-button/new-lobby-button.component';
import { LobbyComponent } from './views/lobby/lobby.component';


@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    ComingsoonComponent,
    NewLobbyButtonComponent,
    LobbyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
