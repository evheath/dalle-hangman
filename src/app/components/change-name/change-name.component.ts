import { Component, OnInit } from '@angular/core';
import { faker } from '@faker-js/faker';
import { User } from 'library';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-change-name',
  templateUrl: './change-name.component.html',
  styleUrls: ['./change-name.component.css']
})
export class ChangeNameComponent implements OnInit {
  public showModal: boolean = false;
  public newName: string = "";
  public placeholder: string = faker.name.findName();
  constructor(
    public auth: AuthService
  ) { }

  ngOnInit(): void {
  }

  toggle() {
    this.showModal = !this.showModal;
  }

  exitModal() {
    this.showModal = false;
    this.newName = "";
    this.placeholder = faker.name.findName();
  }

  async updateName(user: User) {

    let { uid } = user;
    await this.auth.updateName(uid, this.newName || this.placeholder);
    this.exitModal();
  }

}
