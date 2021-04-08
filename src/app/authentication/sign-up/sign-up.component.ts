import {AuthService} from './../../Services/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  name: any;

  constructor(private authService: AuthService) {
    this.signUpForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
      email: new FormControl(null, [Validators.email, Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    });
  }

  ngOnInit(): void {
  }

  onClickSignUp() {
    const email = this.signUpForm.value.email;
    const password = this.signUpForm.value.password;
    this.name = localStorage.setItem('name', this.signUpForm.value.name);
    this.authService.signUpUser(email, password);
  }
}
