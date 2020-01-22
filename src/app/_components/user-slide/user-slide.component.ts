import { Component, OnInit } from '@angular/core';
import {MainService} from '../../_services/main.service';
import {AuthService} from '../../_services/auth.service';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { ImageCroppedEvent } from 'ngx-image-cropper';

declare var navigator: any;
declare var Camera: any;
declare var window: any;

@Component({
  selector: 'app-user-slide',
  templateUrl: './user-slide.component.html',
  styleUrls: ['./user-slide.component.css']
})
export class UserSlideComponent implements OnInit {


  slideInLogin: boolean = true;

  avatarImage: string = "./assets/images/users/blank_profile.png";

  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;

  con: string;

  screenHeight: any;

  //AuthService used in html
  constructor(
    private mainService: MainService, 
    private authService: AuthService, 
    private router: Router,
    private storage: AngularFireStorage
  ) {

  }

  ngOnInit() {

    this.screenHeight = window.screen.height;

    //Set profile picture if not null
    console.log(this.authService.currentUser);
    if(!this.authService.currentUser.profilePicUrl.toLowerCase().includes("null")){
      this.avatarImage = this.authService.currentUser.profilePicUrl;
    }
    this.profilePicChangeListerner();
  }

  ngAfterViewInit(){
    document.getElementById("userSlide").classList.add("hidden");
    document.getElementById("userSlide").classList.add("out");
    this.userSlideInit();
  }

  profilePicChangeListerner(){
    this.authService.profilePicUrlChange.subscribe(value => {
      if(value == "") return;
      console.log("Change");
      setTimeout(_ => {
        this.avatarImage = value;
      }, 2000)
      this.avatarImage = "";
    })
  }

  userSlideInit(){
    this.mainService.userSlide.subscribe(result => {
      var self = this;
      this.slideInLogin = result;
       if(result == true){
        document.getElementById("userSlide").classList.remove("hidden");
        setTimeout(function() {document.getElementById("userSlide").classList.add("in")}, 50);
      }
       else {
        var dom = document.getElementById("userSlide");
        dom.classList.remove("in");
        dom.addEventListener("transitionend", function () {
          if(self.slideInLogin == false){
            dom.classList.add("hidden");
          }
        });
       }
    });
  }


  logout(){
    this.authService.logOut();
    // this.mainService.changeUserSlide();
    // this.router.navigateByUrl('/login');
  }

  openPicEditing() {
    this.mainService.showProfilePicEditing.next(true);
  }

  userSlideSelect(num: number){
    this.mainService.userSlideClick.next(num);
  }


}
