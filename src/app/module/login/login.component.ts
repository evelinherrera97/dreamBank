import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from 'src/app/interfaces/users';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public validId: boolean;
  public validPassword: boolean;

  public user: Array<Users>;
  loginForm = new FormGroup({
    id: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(
    public authServices: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  validateLogin() {
    this.authServices.getUser().subscribe(data => {
      this.user = data;
      const userFile = this.user.find(user => user.id === this.loginForm.value.id);
      if (this.loginForm.valid) {
        if (userFile) {
          if (userFile.password == this.loginForm.value.password) {
            this.authServices.Islogin = true;
            this.router.navigate(['/home']);
          } else {
            console.log('constraseña incorrecta')
          }
        } else {
          console.log('el usuario no existe')
        }
      } else {
        this.validPassword = this.loginForm.get('password').hasError('required');
        this.validId = this.loginForm.get('password').hasError('required');
      }


    });
  }


}
