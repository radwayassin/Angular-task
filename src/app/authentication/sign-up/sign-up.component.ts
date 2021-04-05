import { AuthService } from './../../Services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  constructor(private authService: AuthService) {}
  onSignUp() {
    const email = this.signUpForm.value.email;
    const password = this.signUpForm.value.password;
    this.authService.signUpUser(email, password);
  }
  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
      'confirm-pass': new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }
}
