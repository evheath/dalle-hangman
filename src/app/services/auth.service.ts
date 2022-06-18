import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, of, switchMap, tap } from 'rxjs';

import { faker } from '@faker-js/faker';
import { User } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User | undefined | null> = of(null);

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFirestore,
  ) {
    this.user$ = this.afAuth.authState
      .pipe(
        tap(async user => {
          if (!user) {
            // no user, so we must sign in and create a user doc
            const { user } = await this.afAuth!.signInAnonymously();
            const randomName = faker.name.findName();
            await this.updateName(user!.uid, randomName);
          }
        }),
        switchMap(user => (user ?
          db.doc<User>(`users/${user.uid}`).valueChanges()
          : of(null)))

      )
  }

  public async signOut() {
    return this.afAuth.signOut();
  }

  public async updateName(uid: string, name: string) {
    await this.db.collection<User>("users").doc(uid).set({ uid, name }, { merge: true });
  }



}
