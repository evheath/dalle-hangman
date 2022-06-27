import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-change-name-modal',
  templateUrl: './change-name-modal.component.html',
  styleUrls: ['./change-name-modal.component.css']
})
export class ChangeNameModalComponent implements OnInit {

  public placeholder: string = faker.name.findName();
  public name: string = "";

  constructor(
    private dialogRef: MatDialogRef<ChangeNameModalComponent>
  ) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close(this.name || this.placeholder);
  }

}
