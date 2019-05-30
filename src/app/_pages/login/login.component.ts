import { Component, OnInit } from '@angular/core';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { User } from '../../_models/User.Model';
import {AuthService} from '../../_services/auth.service';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators'

declare var $ : any;



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logInUsername: string = 'test@test.com';
  logInPassword: string = '124577';
  createFirstName: string = "";
  createLastName: string = "";
  createUsername: string = "";
  takenUsername: boolean = false;
  createEmail: string = "";
  createPassword: string = "";
  createPassword2: string = "";
  passwordsDoNotMatch: boolean = false;
  isLoading: boolean = false;
  currentPage: string = "login";
  switchPageText: string = "SIGN UP";



  constructor(private authService: AuthService , private router: Router) {

   }

  ngOnInit() {


  }

  ngAfterInit(){


  }



  logIn() {
    this.isLoading = true;

    this.authService.logIn(this.logInUsername,this.logInPassword).then(
      (success) => {

        var user = new User(this.authService.af.auth.currentUser);
        this.authService.setUser(user);
        //Once User Is Set
        this.authService.authStateSet.subscribe(value => {
          if(value == true){
            var self = this;
            this.stopLoadingAnimation();
            setTimeout(function () {
              self.router.navigate(['/main/barlist']);
            },1000);
          }
        });
        


      }).catch(
      (err) => {
        console.log(err);
        //this.error = err;
      });
  }

  stopLoadingAnimation(){
    document.getElementById('circleLoader').classList.add('load-complete');
    document.getElementById('checkLoader').classList.remove('checkmarkHidden');
    document.getElementById('checkLoader').classList.add('checkmark');

  }


  afterLogIn(){
    //Redirect
    this.router.navigate(['/main']);
  }


  comparePasswords(){
    if(this.createPassword != this.createPassword2){
      this.passwordsDoNotMatch = true;
      return true;
    }
    else {
      this.passwordsDoNotMatch = false;
      return false;
    }
  }


  register(){


    if(this.createFirstName == "") return;
    if(this.createUsername == "") return;
    if(this.createEmail == "") return;
    if(this.createPassword == "") return;
    if(this.comparePasswords() == true) return;

    this.authService.subUser = true;

    console.log('Register');
    this.isLoading = true;

    //Check unique username
    if(this.createUsername.charAt(0) != '@') this.createUsername = '@' + this.createUsername;
    this.authService.checkUniqueUser(this.createUsername).pipe(take(1)).subscribe(result => {
      if(result.length > 0) {
        this.takenUsername = true;
        this.isLoading = false;
        return;
      }
      else{
        this.createUser();
      }
    });
    

  }



  createUser(){
    this.authService.createUser(this.createEmail, this.createPassword).then( (success) => {

      //Need to upload user info

      var user = new User(this.authService.af.auth.currentUser);
      var firstName = this.createFirstName;
      firstName = firstName.toLowerCase();
      firstName =  firstName.charAt(0).toUpperCase() + firstName.slice(1);

      var lastName = this.createLastName;
      lastName = lastName.toLowerCase();
      lastName =  lastName.charAt(0).toUpperCase() + lastName.slice(1);

      user.firstName = firstName;
      user.lastName = lastName;
      user.userName = this.createUsername;

      this.authService.createUserInfo(user).then(_ => {
        this.authService.setUser(user);

        //Once User Is Set
        this.authService.authStateSet.subscribe(value => {
          if(value == true){
            var self = this;
            this.stopLoadingAnimation();
            setTimeout(function () {
              self.router.navigate(['/main/barlist']);
            },1000);
          }
        });
      });

    });
  }




  goToSignUp(){

    $("#login").off();
    $("#signup").off();

    if(this.currentPage == "login"){
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
