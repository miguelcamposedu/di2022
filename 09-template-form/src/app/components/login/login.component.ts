import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userEmail: string = '';
  userPassword: string = '';

  loginForm = new FormGroup({
    emailFormControl: new FormControl(this.userEmail, Validators.required),
    passwordFormControl: new FormControl(this.userPassword, Validators.required)
  });

  constructor() {}

  ngOnInit(): void {}
}
