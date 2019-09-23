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

  avatarImage: string = "./assets/images/avatar3.jpg";

  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;

  con: string;


  //AuthService used in html
  constructor(
    private mainService: MainService, 
    private authService: AuthService, 
    private router: Router,
    private storage: AngularFireStorage
  ) {

  }

  ngOnInit() {
    //Set profile picture if not null
    console.log(this.authService.currentUser);
    if(!this.authService.currentUser.profilePicUrl.toLowerCase().includes("null")){
      this.avatarImage = this.authService.currentUser.profilePicUrl;
    }
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


  photoFail(msg): any{
    console.log(msg);
  }

  takePhoto(){

    // console.log("Take Photo");

    // let opts = {
    //   quality: 80,
    //   destinationType: Camera.DestinationType.NATIVE_URI,
    //   sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
    //   mediaType: Camera.MediaType.PICTURE,
    //   encodingType: Camera.EncodingType.JPEG,
    //   cameraDirection: Camera.Direction.BACK,
    //   targetWidth: 400,
    //   targetHeight: 300
    // };
    // navigator.camera.getPicture(this.photoSuccess, this.photoFail, opts);
  }

  registerNewCandidate(event){
    // const file = event.target.files[0];
    // const filePath = 'Taco Tuesday';
    // const fileRef = this.storage.ref(filePath);
    // const task = this.storage.upload(filePath, file);

    // Read in file
    var file = event.target.files[0];
    var self = this;

    // Ensure it's an image
    if(file.type.match(/image.*/)) {
        console.log('An image has been loaded');

        // Load the image
        var reader = new FileReader();
        reader.onload = function (readerEvent) {
            var image = new Image();
            image.onload = function (imageEvent) {

                // Resize the image
                var canvas = document.createElement('canvas'),
                    max_size = 300,// TODO : pull max size from a site config
                    width = image.width,
                    height = image.height;
                if (width > height) {
                    if (width > max_size) {
                        height *= max_size / width;
                        width = max_size;
                    }
                } else {
                    if (height > max_size) {
                        width *= max_size / height;
                        height = max_size;
                    }
                }
                //Override 
                width = max_size;
                height = max_size;
                canvas.width = width;
                canvas.height = height;
                canvas.getContext('2d').drawImage(image, 0, 0, width, height);
                var dataUrl = canvas.toDataURL('image/jpeg');
                var resizedImage = self.dataURLToBlob(dataUrl);

                //File upload to firebase
                const uploadFile = resizedImage;
                const filePath = 'profilePics/' + self.authService.currentUser.uid;
                const fileRef = self.storage.ref(filePath);
                const task = self.storage.upload(filePath, uploadFile);
                fileRef.getDownloadURL().subscribe(url => {
                  console.log('File Uploaded!');
                  self.authService.setProfilePicture(url);
                  self.avatarImage = url;
                  alert('done');
                });
            }
            image.src = readerEvent.target.result;
        }
        reader.readAsDataURL(file);
    }
  }


  /* Utility function to convert a canvas to a BLOB */
  dataURLToBlob = function (dataURL) {
    var BASE64_MARKER = ';base64,';
    if (dataURL.indexOf(BASE64_MARKER) == -1) {
      var parts = dataURL.split(',');
      var contentType = parts[0].split(':')[1];
      var raw = parts[1];

      return new Blob([raw], { type: contentType });
    }

    var parts = dataURL.split(BASE64_MARKER);
    var contentType = parts[0].split(':')[1];
    var raw = window.atob(parts[1]);
    var rawLength = raw.length;

    var uInt8Array = new Uint8Array(rawLength);

    for (var i = 0; i < rawLength; ++i) {
      uInt8Array[i] = raw.charCodeAt(i);
    }

    return new Blob([uInt8Array], { type: contentType });
  }
  /* End Utility function to convert a canvas to a BLOB      */


  imageChangedEvent: any = '';
  croppedImage: any = '';
  
  fileChangeEvent(event: any): void {
      this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
      this.croppedImage = event.base64;
  }
  imageLoaded() {
      // show cropper
  }
  cropperReady() {
      // cropper ready
  }
  loadImageFailed() {
      // show message
  }

}
