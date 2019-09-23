import { Component, OnInit } from '@angular/core';
import {MainService} from '../../_services/main.service';
import {AuthService} from '../../_services/auth.service';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

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

  avatarImage: any = "./assets/images/avatar3.jpg";

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

  getBase64Image(imgUrl, callback) {

    var img = new Image();

    // onload fires when the image is fully loadded, and has width and height

    img.onload = function(){

      var canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      var dataURL = canvas.toDataURL("image/png"),
          dataURL = dataURL.replace(/^data:image\/(png|jpg);base64,/, "");

      callback(dataURL); // the base64 string

    };

    // set attributes and src 
    img.setAttribute('crossOrigin', 'anonymous'); //
    img.src = imgUrl;

  }
  

  dataURItoBlob(dataURI) {
    const byteString = window.atob(dataURI);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], { type: 'image/jpeg' });    
    return blob;
 }

  photoSuccess(imgURL) : any{

    var self = this;

    window.resolveLocalFileSystemURL(imgURL, function (fileEntry) {
      fileEntry.file(function (file) {
        alert(file.filePath);
        var reader = new FileReader();
        reader.onloadend = function () {
          // This blob object can be saved to firebase
          var blob = new Blob([new Uint8Array(this.result)], { type: "image/jpeg" });
          // Send blob
          const file = blob;
          const filePath = 'name-your-file-path-here';
          const ref = self.storage.ref(filePath);
          const task = ref.put(file);
          alert("Put File");
        };
        reader.readAsArrayBuffer(file);
      });
    });


    // alert(imgURL);
    // imgURL = imgURL.replace(/\s/g, '');

    // var longImgURL = "data:image/jpeg;base64," + imgURL;

    // // var canvas = document.getElementById("avatar");
    // // canvas.setAttribute('src', longImgURL);
    // // canvas.toBlob(blob => {

    // // });
    // const filePath = 'TestPls2';
    // const fileRef = this.storage.ref(filePath);

    // try{
    //   const task = fileRef.putString(imgURL, 'data_url', {contentType:'image/jpg'});
    // } catch (e){
    //   alert(e.message);
    // }
    

    // var blob = this.base64toBlob(imgURL, 'image/jpg');
    // const file = blob;
    // const filePath = 'name-your-file-path-here';
    // const task = this.storage.upload(filePath, file);

    // const file = imgURL;
    // const filePath = 'Taco Tuesday';
    // const fileRef = this.storage.ref(filePath);
    // const task = this.storage.upload(filePath, file);

    // // observe percentage changes
    // this.uploadPercent = task.percentageChanges();
    // // get notified when the download URL is available
    // task.snapshotChanges().pipe(
    //     finalize(() => this.downloadURL = fileRef.getDownloadURL() )
    //   )
    // .subscribe()

  }

  photoFail(msg): any{
    console.log(msg);
  }

  takePhoto(){

    // var self = this;
    // this.getBase64Image("https://media.tacdn.com/media/attractions-splice-spp-674x446/07/25/13/74.jpg", function(base64image){
    //   console.log(base64image);
    //   self.photoSuccess(base64image);
    // });

    console.log("Take Photo");

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

  registerNewCandidate(event){
    const file = event.target.files[0];
    const filePath = 'Taco Tuesday';
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
  }

  base64toBlob(base64Data, contentType) {
    contentType = contentType || '';
    var sliceSize = 1024;
    var byteCharacters = atob(base64Data);
    var bytesLength = byteCharacters.length;
    var slicesCount = Math.ceil(bytesLength / sliceSize);
    var byteArrays = new Array(slicesCount);

    for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
        var begin = sliceIndex * sliceSize;
        var end = Math.min(begin + sliceSize, bytesLength);

        var bytes = new Array(end - begin);
        for (var offset = begin, i = 0 ; offset < end; ++i, ++offset) {
            bytes[i] = byteCharacters[offset].charCodeAt(0);
        }
        byteArrays[sliceIndex] = new Uint8Array(bytes);
    }
    return new Blob(byteArrays, { type: contentType });
}

  

}
