import { Component, OnInit } from '@angular/core';

import {MainService} from '../../_services/main.service';
import {AuthService} from '../../_services/auth.service';
import { User } from '../../_models/User.Model';
import { AngularFireDatabase } from '@angular/fire/database';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {


  //Cover Variables
  showCoverPopUp: boolean = false;
  reportCoverValue: number = 0;
  coverSubmissionLoader:boolean = false;

  //Friend Variables
  showFriendPopUp: boolean = false;
  showRequestButton: boolean = false;
  friendUser: User = null;
  isFriend: boolean = false;
  isRequestOut: boolean = false;
  isRequestIn: boolean = false;

  constructor(
    private mainService: MainService, 
    private authService: AuthService,
    private db: AngularFireDatabase
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
        this.loadUserFriendStatus();
        this.showFriendPopUp = true;

        // //If user is friend activate friend mode
        // if(this.authService.currentUser.friendIds.indexOf(this.friendUser.uid) > -1){
        //   this.isFriend = true;
        // }
        // else {
        //   // if user is request activate request mode
        //   if(this.authService.currentUser.friendRequestOut.indexOf(this.friendUser.uid) > -1){
        //     this.isRequestOut = true;
        //   } else { // if user is request in activate
        //     if(this.authService.currentUser.friendRequestIn.indexOf(this.friendUser.uid) > -1) this.isRequestIn = true;
        //   }
        // } 
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
        this.isFriend = this.showRequestButton = false;
        return;
      }
      else {
        this.showRequestButton = true;
        return;
      }
    });

    this.db.object('/userInfo/'+this.authService.currentUser.uid + '/friendRequestOut/' + this.friendUser.uid).valueChanges().pipe(take(1)).subscribe(object => {
      if(object) {
        this.isRequestOut = this.showRequestButton = true;
        return;
      }
    });

    this.db.object('/userInfo/'+this.authService.currentUser.uid + '/friendRequestIn/' + this.friendUser.uid).valueChanges().pipe(take(1)).subscribe(object => {
      if(object) {
        this.isRequestIn = this.showRequestButton = true;
        return;
      }
    });
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

}
