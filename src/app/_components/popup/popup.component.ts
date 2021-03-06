import { Component, OnInit } from '@angular/core';

import {MainService} from '../../_services/main.service';
import {AuthService} from '../../_services/auth.service';
import { User } from '../../_models/User.Model';
import { AngularFireDatabase } from '@angular/fire/database';
import { take } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { forkJoin, Observable, BehaviorSubject } from 'rxjs';  // RxJS 6 syntax


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  isLoading: boolean = false;

  //Cover Variables
  showCoverPopUp: boolean = false;
  reportCoverValue: number = 0;
  coverSubmissionLoader:boolean = false;

  //Friend Variables
  showFriendPopUp: boolean = false;
  showRequestButton: boolean = false;
  friendUser: User = null;
  friendUserBars: any[] = [];
  friendUserFriends: any[] = [];
  isFriend: boolean = false;
  isRequestOut: boolean = false;
  isRequestIn: boolean = false;
  showUnfriend: boolean = false;
  showBars: boolean = false;
  showFriends: boolean = false;
  showFriendOfFriend: boolean = false;
  friendOfFriendUser: any = null;
  friendOfFriendIsFriend: boolean = false;
  showFriendOfFriendRequestButton: boolean = false;
  friendOfFriendIsRequestIn: boolean = false;
  friendOfFriendIsRequestOut: boolean = false;

  //Profile Pic Editing Variables
  showProfilePicEditing: boolean = false;
  currentAvatarUrl: string = "";
  showCurrentAvatar: boolean = true;
  submittingProfilePic: boolean=false;

  constructor(
    private mainService: MainService, 
    private authService: AuthService,
    private db: AngularFireDatabase,
    private storage: AngularFireStorage
  ) { }

  ngOnInit() {

    this.mainService.showCoverPopUp.subscribe(value => {
      if(value == true){
        this.showCoverPopUp = value;
      }
      else{
        if(this.showCoverPopUp == true){
          this.hideCoverPopUp();
        }
      }

    });

    this.mainService.showFriendPopUp.subscribe(value => {
      if(value == true){
        this.friendUser = this.mainService.friendPopUpUser;

        //Load data 
        this.isLoading = true;
        this.loadUserFriendStatus();
        this.showBars = false;
        this.showFriends = false;
        this.showFriendOfFriend = false;
        this.friendOfFriendIsFriend = false;
        this.showFriendOfFriendRequestButton = false;
        this.friendOfFriendIsRequestIn = false;
        this.friendOfFriendIsRequestOut = false;
        this.showUnfriend = false;
        this.showFriendPopUp = true;
      }
    })

    this.mainService.showProfilePicEditing.subscribe( value => {
      if(value == true){
        this.showCurrentAvatar = true;
        this.submittingProfilePic = false;
        this.currentAvatarUrl = this.authService.currentUser.profilePicUrl;

        this.showProfilePicEditing = true;
      }
    })

    this.mainService.hideAllPopUps.subscribe( value=> {
      if(value == true) {
        this.hideAllPopups();
        this.mainService.hideAllPopUps.next(false);
      } 
    })

  }

  loadUserFriendStatus() {

    //Check all three sources

    this.showRequestButton = false;            
    this.isFriend = false;
    this.isRequestOut = false;
    this.isRequestIn = false;

    this.db.object('/userInfo/'+this.authService.currentUser.uid + '/friends/' + this.friendUser.uid).valueChanges().pipe(take(1)).subscribe(object => {
      if(object) {
        this.isFriend = true;
        this.showRequestButton = false;
        this.isLoading = false;
      }
      else {
        var requestOutTask = this.db.object('/userInfo/'+this.authService.currentUser.uid + '/friendRequestOut/' + this.friendUser.uid).valueChanges().pipe(take(1));
        var requestInTask = this.db.object('/userInfo/'+this.authService.currentUser.uid + '/friendRequestIn/' + this.friendUser.uid).valueChanges().pipe(take(1));
        var fork = forkJoin([requestOutTask, requestInTask]);
        fork.subscribe(result => {
          if(result[0]) this.isRequestOut = true;
          if(result[1]) this.isRequestIn = true;
          this.showRequestButton = true;
          this.isLoading = false;
        });
      }
    });
  }

  unFriend(){
    this.isLoading = true;
    this.db.database.ref("userInfo/" + this.authService.currentUser.uid + "/friends/"+ this.friendUser.uid).remove();
    this.db.database.ref("userInfo/" + this.friendUser.uid + "/friends/"+ this.authService.currentUser.uid).remove();
    this.authService.currentUser.friendIds.splice(this.authService.currentUser.friendIds.indexOf(this.friendUser.uid), 1);

    this.loadUserFriendStatus();
  }


  reportCover() {
    this.mainService.reportCover(this.reportCoverValue);

  }


  hideCoverPopUp(){

    this.coverSubmissionLoader = true;
  
    var self = this;

    setTimeout(function() {
      // document.getElementById('check').classList.add('check-complete');
      // document.getElementById('fill').classList.add('fill-complete');


      document.getElementById('circleLoader').classList.add('load-complete');
      document.getElementById('checkLoader').classList.remove('checkmarkHidden');
      document.getElementById('checkLoader').classList.add('checkmark');
      
      setTimeout(function () {
        self.showCoverPopUp = false;
        self.coverSubmissionLoader = false;
        self.reportCoverValue = 0;
      }, 1000);
    }, 750);

  }


  decrementReportCover () {
    if(this.reportCoverValue == 0) return;
    this.reportCoverValue = this.reportCoverValue - 5;
  }

  incrementReportCover () {
    if(this.reportCoverValue >= 100) return;
    this.reportCoverValue = this.reportCoverValue + 5;
  }

  hideFriendPopUp() {
    this.showFriendPopUp = false;
    this.mainService.showFriendPopUp.next(false);
  }

  sendFriendRequest(){

    this.authService.currentUser.friendRequestOut.push(this.friendUser.uid);
    this.isRequestOut = true;
    this.authService.submitFriendRequest(this.friendUser.uid);
  }

  acceptFriendRequest(){
    var arr = this.authService.currentUser.friendRequestIn;
    arr.splice(arr.indexOf(this.friendUser.uid), 1);

    this.authService.currentUser.friendIds.push(this.friendUser.uid);
    this.authService.addFriendData(this.friendUser.uid);

    this.isRequestIn = false;
    this.isFriend = true;

    this.authService.acceptFriendRequest(this.friendUser.uid);
  }

  activateBars(){
    this.isLoading = true;
    this.friendUserBars = [];
    this.showBars = true;
    this.db.list("barPages").valueChanges().pipe(take(1)).subscribe((result:any) => {
      
      result.forEach(barPage => {
        if(this.friendUser.barsAttending.indexOf(barPage.barId) >= 0){
          this.friendUserBars.push(barPage);
        }
      });
      this.isLoading = false;
    });
  }

  backFromBars() {
    this.showBars = false;
  }

  activateFriends(){
    this.isLoading = true;
    this.friendUserFriends = [];
    this.showFriends = true;
    this.db.list("userInfo/" + this.friendUser.uid +"/friends").valueChanges().pipe(take(1)).subscribe((result: any) => {
      this.friendUser.friendIds = result;
      let requestArray = [];
      for(var i=0; i<result.length; i++){
        let id: string = result[i];
        var request = this.db.object('userInfo/' + id + '/about').valueChanges().pipe(take(1));
        requestArray.push(request);
      }

      forkJoin(requestArray).subscribe( responseList => {
        responseList.forEach(friend => {
          if(friend.uid != this.authService.currentUser.uid) this.friendUserFriends.push(friend);
        });
        console.log()
        this.isLoading = false;
      });
    })
  }

  activateFriendOfFriend(user) {
    this.isLoading = true;
    this.friendOfFriendUser = user;
    this.showFriends = false;
    this.loadFriendOfFriendStatus();
  }

  loadFriendOfFriendStatus() {

    //Check all three sources

    this.showFriendOfFriendRequestButton = false;            
    this.friendOfFriendIsFriend = false;
    this.friendOfFriendIsRequestIn = false;
    this.friendOfFriendIsRequestOut = false;

    this.db.object('/userInfo/'+this.authService.currentUser.uid + '/friends/' + this.friendOfFriendUser.uid).valueChanges().pipe(take(1)).subscribe(object => {
      if(object) {
        this.friendOfFriendIsFriend = true;
        this.showFriendOfFriendRequestButton = false;
        this.showFriendOfFriend = true;
        console.log(this.friendOfFriendUser);
        this.isLoading = false;
      }
      else {
        var requestOutTask = this.db.object('/userInfo/'+this.authService.currentUser.uid + '/friendRequestOut/' + this.friendOfFriendUser.uid).valueChanges().pipe(take(1));
        var requestInTask = this.db.object('/userInfo/'+this.authService.currentUser.uid + '/friendRequestIn/' + this.friendOfFriendUser.uid).valueChanges().pipe(take(1));
        var fork = forkJoin([requestOutTask, requestInTask]);
        fork.subscribe(result => {
          if(result[0]) this.friendOfFriendIsRequestOut = true;
          if(result[1]) this.friendOfFriendIsRequestIn = true;
          this.showFriendOfFriendRequestButton = true;
          this.showFriendOfFriend = true;
          this.isLoading = false;
        });
      }
    });
  }

  sendFriendOfFriendRequest() {
    this.authService.currentUser.friendRequestOut.push(this.friendOfFriendUser.uid);
    this.friendOfFriendIsRequestOut = true;
    this.authService.submitFriendRequest(this.friendOfFriendUser.uid);
  }

  acceptFriendOfFriendRequest() {
    var arr = this.authService.currentUser.friendRequestIn;
    arr.splice(arr.indexOf(this.friendOfFriendUser.uid), 1);

    this.authService.currentUser.friendIds.push(this.friendOfFriendUser.uid);
    this.authService.addFriendData(this.friendOfFriendUser.uid);

    this.friendOfFriendIsRequestIn = false;
    this.friendOfFriendIsFriend = true;

    this.authService.acceptFriendRequest(this.friendOfFriendUser.uid);
  }

  back(){
    if(this.showBars) {
      this.showBars = false;
    }
    else if(this.showFriends){
      this.showFriends = false;
    }
    else if (this.showFriendOfFriend) {
      this.showFriendOfFriend = false;
      this.showFriends = true;
    }
  }




  // Profile Pic Editing
  hideProfilePicEditing(){
    this.showProfilePicEditing = false;
    this.mainService.showProfilePicEditing.next(false);
  }



  resizeAndUpload(file){
    var self = this;

    // Ensure it's an image
    if(file.type.match(/image.*/)) {
        console.log('An image has been loaded');

        // Load the image
        var reader:any = new FileReader();
        reader.onload = function (readerEvent) {
            var image:any = new Image();
            image.onload = function (imageEvent) {

                // Resize the image
                var canvas = document.createElement('canvas'),
                max_size = 5000,// TODO : pull max size from a site config
                width = image.width,
                height = image.height;

                //DO NOT DELETE BELOW CODE!!
                // if (width > height) {
                //     if (width > max_size) {
                //         height *= max_size / width;
                //         width = max_size;
                //     }
                // } else {
                //     if (height > max_size) {
                //         width *= max_size / height;
                //         height = max_size;
                //     }
                // }
                // //Override 
                // width = max_size;
                // height = max_size;

                //Because above code is commented no actual resizing occurs but
                // we can still do a quality drop below

                //Number between 0 to 1 for image quality. Higher is more quality
                var imageQuality: number = .92;

                canvas.width = width;
                canvas.height = height;
                canvas.getContext('2d').drawImage(image, 0, 0, width, height);
                var dataUrl = canvas.toDataURL('image/jpeg', imageQuality);
                var resizedImage = self.dataURLToBlob(dataUrl);

                //File upload to firebase
                const uploadFile = resizedImage;
                const filePath = 'profilePics/' + self.authService.currentUser.uid;
                
                self.storage.upload(filePath, uploadFile).then( _ => {
                  const fileRef = self.storage.ref(filePath);
                  fileRef.getDownloadURL().subscribe(url => {
                    console.log('File Uploaded!');
                    console.log(url);
                    self.authService.setProfilePicture(url);
                    //self.avatarImage = url;
                  });
                });

            }
            image.src = readerEvent.target.result as string;
        }
        reader.readAsDataURL(file);
    }
  }

  lowerFileQuality(file) {
    var self = this;

    // Ensure it's an image
    if(file.type.match(/image.*/)) {
        console.log('An image has been loaded');

        // Load the image
        var reader:any = new FileReader();
        reader.onload = function (readerEvent) {
            var image:any = new Image();
            image.onload = function (imageEvent) {

                // Resize the image
                var canvas = document.createElement('canvas'),
                width = image.width,
                height = image.height;

                var imageQuality: number = .5;

                canvas.width = width;
                canvas.height = height;
                canvas.getContext('2d').drawImage(image, 0, 0, width, height);
                var dataUrl = canvas.toDataURL('image/jpeg', imageQuality);
                console.log(dataUrl);
                self.imageBase64 = dataUrl;
            }
            image.src = readerEvent.target.result as string;
        }
        reader.readAsDataURL(file);
    }
  }


  /* Utility function to convert a canvas to a BLOB */
  dataURLToBlob = function (dataURL) {
    var raw: any;
    var BASE64_MARKER = ';base64,';
    if (dataURL.indexOf(BASE64_MARKER) == -1) {
      var parts = dataURL.split(',');
      var contentType = parts[0].split(':')[1];
      raw = parts[1];

      return new Blob([raw], { type: contentType });
    }

    var parts = dataURL.split(BASE64_MARKER);
    var contentType = parts[0].split(':')[1];
    raw = window.atob(parts[1]);
    var rawLength = raw.length;

    var uInt8Array = new Uint8Array(rawLength);

    for (var i = 0; i < rawLength; ++i) {
      uInt8Array[i] = raw.charCodeAt(i);
    }

    return new Blob([uInt8Array], { type: contentType });
  }
  /* End Utility function to convert a canvas to a BLOB      */

  //Try to compress before showing in image cropper
  imageBase64: any = '';
  imageChangedEvent: any = '';

  croppedImage: any = '';
  
  fileChangeEvent(event: any): void {
      this.showCurrentAvatar = false;
      this.imageChangedEvent = event;

      // console.log(event.target.files[0]);
      // this.lowerFileQuality(event.target.files[0]);
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

  doneEditing(){
    this.submittingProfilePic = true;
    var self = this;

    setTimeout(function() {
      // document.getElementById('check').classList.add('check-complete');
      // document.getElementById('fill').classList.add('fill-complete');


      document.getElementById('circleLoader').classList.add('load-complete');
      document.getElementById('checkLoader').classList.remove('checkmarkHidden');
      document.getElementById('checkLoader').classList.add('checkmark');
      
      setTimeout(function () {
        self.showProfilePicEditing = false;
        self.submittingProfilePic = false;
      }, 1000);
    }, 750);
    this.resizeAndUpload(this.dataURLToBlob(this.croppedImage));
  }

  blobToFile = (theBlob: Blob, fileName:string): File => {
    var b: any = theBlob;
    //A Blob() is almost a File() - it's just missing the two properties below which we will add
    b.lastModifiedDate = new Date();
    b.name = fileName;

    //Cast to a File() type
    return <File>theBlob;
  }

  hideAllPopups() {
    this.showCoverPopUp = false;
    this.showFriendPopUp = false;
  }




}
