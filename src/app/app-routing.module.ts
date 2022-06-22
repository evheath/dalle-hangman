import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComingsoonComponent } from './views/comingsoon/comingsoon.component';
import { GenerateComponent } from './views/generate/generate.component';
import { LobbyComponent } from './views/lobby/lobby.component';

const routes: Routes = [
  { path: '', component: ComingsoonComponent },
  { path: 'lobby/:lobbyId', component: LobbyComponent },
  { path: 'generate', component: GenerateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
