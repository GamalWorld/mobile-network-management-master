import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public fa: AngularFireAuth
  ) {
  }

  // login function that calls FireAuth and returns user data (JWT token)
  login(email: string, password: string) {
    return this.fa.signInWithEmailAndPassword(email, password).then((res) => {
      console.log(res.user?.getIdToken()); // JWT token
    }).catch((err) => {
      console.log(`error: ${err}`);
    })
  }
}
