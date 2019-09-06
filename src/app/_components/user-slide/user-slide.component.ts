import { Component, OnInit } from '@angular/core';
import {MainService} from '../../_services/main.service';
import {AuthService} from '../../_services/auth.service';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';

declare var navigator: any;
declare var Camera: any;

@Component({
  selector: 'app-user-slide',
  templateUrl: './user-slide.component.html',
  styleUrls: ['./user-slide.component.css']
})
export class UserSlideComponent implements OnInit {


  slideInLogin: boolean = true;

  avatarImage: any = "./assets/images/avatar3.jpg";


  //AuthService used in html
  constructor(
    private mainService: MainService, 
    private authService: AuthService, 
    private router: Router,
    private storage: AngularFireStorage
  ) {

  }

  ngOnInit() {
    //this.userSlideInit();
  }

  ngAfterViewInit(){
    document.getElementById("userSlide").classList.add("hidden");
    document.getElementById("userSlide").classList.add("out");
    this.userSlideInit();
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

  photoSuccess(imgURL) : any{
    document.getElementById("avatar").setAttribute('src', imgURL);

      const file = imgURL;
      const filePath = 'TestPls';
      const task = this.storage.upload(filePath, file);

      const file2 = "./assets/images/icons/gray/users.png";
      const filePath2 = 'Test2Pls';
      const task2 = this.storage.upload(filePath, file);

  }

  photoFail(msg): any{
    console.log(msg);
  }

  takePhoto(){

    let opts = {
      quality: 80,
      destinationType: Camera.DestinationType.NATIVE_URI,
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
      mediaType: Camera.MediaType.PICTURE,
      encodingType: Camera.EncodingType.JPEG,
      cameraDirection: Camera.Direction.BACK,
      targetWidth: 400,
      targetHeight: 300
    };
    navigator.camera.getPicture(this.photoSuccess, this.photoFail, opts);
  }

}
