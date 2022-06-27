import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { ChangeNameModalComponent } from '../change-name-modal/change-name-modal.component';


@Component({
  selector: 'app-change-name',
  templateUrl: './change-name.component.html',
  styleUrls: ['./change-name.component.css']
})
export class ChangeNameComponent implements OnInit {
  constructor(
    public auth: AuthService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  public async openModal() {
    const dialogRef = this.dialog.open(ChangeNameModalComponent)
    const name = await dialogRef.afterClosed().toPromise();
    const user = this.auth.me$.value;
    if (user && name !== "") {
      const { uid } = user;
      await this.auth.updateName(uid, name);
    }

  }

}
