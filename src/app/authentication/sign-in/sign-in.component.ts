import { ActivatedRoute, Router, RouterModule, Routes } from '@angular/router';
import { AuthService } from './../../Services/auth.service';
import { Component, OnInit } from '@angular/core';
import {
  EmailValidator,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;
  constructor(private authService: AuthService) {}
  onSignIn() {
    const email = this.signInForm.value.email;
    const password = this.signInForm.value.password;
    this.authService.signInUser(email, password);
  }
  ngOnInit(): void {
    this.signInForm = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }
}
