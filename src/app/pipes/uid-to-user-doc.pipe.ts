import { Pipe, PipeTransform } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from 'library';

@Pipe({
  name: 'uidToUserDoc'
})
export class UidToUserDocPipe implements PipeTransform {

  constructor(
    private db: AngularFirestore,
  ) { }

  public transform(uid: string) {
    // console.log(`getting name for uid: ${uid}`);

    return this.db.doc<User>(`users/${uid}`).valueChanges();
  }

}
