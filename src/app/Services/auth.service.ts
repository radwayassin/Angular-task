import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token: any;
  constructor(private fireAuth: AngularFireAuth, private router: Router) {}
  signInUser(email: string, password: string) {
    this.fireAuth
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        this.router.navigate(['/movies']);
        response.user
          .getIdToken(true)
          .then((token) => this.token = token);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  signUpUser(email: string, password: string) {
    this.fireAuth
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {})
      .catch((error) => {
        console.log(error);
      });
  }
  isAuthenticated() {
    return this.token != null;
  }
}
