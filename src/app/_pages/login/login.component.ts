import { Component, OnInit } from '@angular/core';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { User } from '../../_models/User.Model';
import {AuthService} from '../../_services/auth.service';
import { Router } from '@angular/router';
declare var $ : any;



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logInUsername: string = 'testmail@test.com';
  logInPassword: string = 'password';
  isLoading: boolean = false;
  currentPage: string = "login";
  switchPageText: string = "SIGN UP";



  constructor(private authService: AuthService , private router: Router) {

   }

  ngOnInit() {


  }

  ngAfterInit(){


    // console.log('test');

    $("#login").on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',   
    function(e) {

    // code to execute after transition ends
      console.log('done');
    });
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

  goToSignUp(){

    $("#login").off();
    $("#signup").off();

    if(this.currentPage == "login"){
      console.log('weird');
      $("#login").collapse("hide");
      this.currentPage = "signup";

      var self = this;
      //Start listener for animation end
      $("#login").on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
        function (e) {
          $("#signup").collapse("show");
          self.switchPageText = "LOG IN";
        });

    }
    else if(this.currentPage == "signup"){
      console.log('test');
      $("#signup").collapse("hide");
      this.currentPage = "login";

      var self = this;
      //Start listener for animation end
      $("#signup").on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
        function (e) {
          $("#login").collapse("show");
          self.switchPageText = "SIGN UP";
        });
        
    }

    
  }

}
