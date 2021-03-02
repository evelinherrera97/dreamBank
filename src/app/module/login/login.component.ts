import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    firstName: new FormControl(''),
    password: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
  }

  validateLogin() {
    console.log(this.loginForm.value)

  }

}
