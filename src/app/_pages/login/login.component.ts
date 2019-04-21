import { Component, OnInit } from '@angular/core';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { User } from '../../_models/User.Model';
import {AuthService} from '../../_services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logInUsername: string = 'testmail@test.com';
  logInPassword: string = 'password';



  constructor(private authService: AuthService , private router: Router) {

   }

  ngOnInit() {

  }



  logIn() {
    this.authService.logIn(this.logInUsername,this.logInPassword).then(
      (success) => {
        console.log('Logged In');
        //this.afterLogIn();
      }).catch(
      (err) => {
        console.log(err);
        //this.error = err;
      });
  }


  afterLogIn(){
    //Redirect
    this.router.navigate(['/main']);
  }

}
