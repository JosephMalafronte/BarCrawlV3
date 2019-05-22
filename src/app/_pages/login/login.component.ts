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
  isLoading: boolean = false;



  constructor(private authService: AuthService , private router: Router) {

   }

  ngOnInit() {

  }



  logIn() {
    this.isLoading = true;

    this.authService.logIn(this.logInUsername,this.logInPassword).then(
      (success) => {

        document.getElementById('circleLoader').classList.add('load-complete');
        document.getElementById('checkLoader').classList.remove('checkmarkHidden');
        document.getElementById('checkLoader').classList.add('checkmark');

        var self = this;
        setTimeout(function () {
          self.afterLogIn();
          console.log('Logged In');
        }, 800);

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
