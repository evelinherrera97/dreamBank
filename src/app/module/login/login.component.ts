import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MainService } from 'src/app/services/main.service';
import { Router } from '@angular/router';
import { Users } from 'src/app/interfaces/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: Array<Users>;
  loginForm = new FormGroup({
    id: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(
    public mainServices : MainService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  validateLogin() {
    this.mainServices.getUser().subscribe(data => {
      this.user = data;
      const userFile = this.user.find(user => user.id === this.loginForm.value.id);
      console.log(this.loginForm);
      if (this.loginForm.valid) {
        if (userFile) {
          if (userFile.password == this.loginForm.value.password) {
            this.router.navigate(['/home']);
          } else {
            console.log('constraseña incorrecta')
          }
        } else {
          console.log('el usuario no existe')
        }
      } else {

      }
     
      
    });


  }

}
