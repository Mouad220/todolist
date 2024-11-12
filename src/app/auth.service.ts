import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }


  
  // firebaseAuth = inject(Auth);
  // user$ = user(this.firebaseAuth);
  // currentUserSig = new BehaviorSubject<UserInterface | null | undefined>(undefined);

  // signup(email: string, username: string, password: string): Observable<void> {
  //   const promise = createUserWithEmailAndPassword(this.firebaseAuth, email, password)
  //     .then(response => updateProfile(response.user, { displayName: username }));
  //   return from(promise);
  // }

  // login(email: string, password: string): Observable<any> {
  //   const promise = signInWithEmailAndPassword(this.firebaseAuth, email, password)
  //     .then(() => {});
  //   return from(promise);
  // }

  // logout(): Observable<void> {
  //   const promise = signOut(this.firebaseAuth);
  //   return from(promise)
  // }
}
