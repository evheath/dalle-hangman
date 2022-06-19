import { Pipe, PipeTransform } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../models/user.model';

@Pipe({
  name: 'uidToName'
})
export class UidToNamePipe implements PipeTransform {

  constructor(
    private db: AngularFirestore,
  ) { }

  async transform(uid: string) {
    // console.log(`getting name for uid: ${uid}`);

    const user = await this.db.doc<User>(`users/${uid}`).get().toPromise();
    const name = user?.data()?.name || "Error getting name";
    // console.log(`got name for uid: ${uid}: ${name}`);

    return name;
  }

}
