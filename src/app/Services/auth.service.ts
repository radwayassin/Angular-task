import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import * as firebase from 'firebase';
import {promise} from 'selenium-webdriver';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token: any;

  constructor(private fireAuth: AngularFireAuth, private router: Router) {
  }

  signInUser(email: string, password: string) {
    this.fireAuth.signInWithEmailAndPassword(email, password).then((response) => {
      this.router.navigate(['/movies']);
      response.user.getIdToken(true).then((token) =>
        localStorage.setItem('token', token));
    }).catch((error) => {
      alert(error.message);
      console.log(error);
    });
  }

  signUpUser(email: string, password: string) {
    this.fireAuth.createUserWithEmailAndPassword(email, password).then((response) => {
      this.router.navigate(['/authentication/sign-in']);
      console.log(response);
    }).catch((error) => {
      alert(error.message);
      console.log(error);
    });
  }

  isAuthenticated() {
    this.token = localStorage.getItem('token');
    return this.token != null;
  }
}
