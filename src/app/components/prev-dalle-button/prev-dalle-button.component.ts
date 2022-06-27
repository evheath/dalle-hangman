import { Component, OnInit } from '@angular/core';
import { LobbyService } from 'src/app/services/lobby.service';

@Component({
  selector: 'app-prev-dalle-button',
  templateUrl: './prev-dalle-button.component.html',
  styleUrls: ['./prev-dalle-button.component.css']
})
export class PrevDalleButtonComponent implements OnInit {
  public loading = false;

  constructor(
    private lobbyService: LobbyService
  ) { }

  ngOnInit(): void {
  }

  public async newer() {
    this.loading = true;
    await this.lobbyService.goToNewerDalle()
    this.loading = false;
  }

}
