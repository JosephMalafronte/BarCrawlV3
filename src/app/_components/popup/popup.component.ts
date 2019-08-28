import { Component, OnInit } from '@angular/core';

import {MainService} from '../../_services/main.service';
import {AuthService} from '../../_services/auth.service';
import { User } from '../../_models/User.Model';

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
  friendUser: User = null;
  isFriend: boolean = false;
  isRequestOut: boolean = false;
  isRequestIn: boolean = false;

  constructor(private mainService: MainService, private authService: AuthService) { }

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

        this.isFriend = false;
        this.isRequestOut = false;
        this.isRequestIn = false;

        console.log(this.authService.currentUser.friendRequestIn);
        console.log(this.friendUser.uid);

        //If user is friend activate friend mode
        if(this.authService.currentUser.friendIds.indexOf(this.friendUser.uid) > -1){
          this.isFriend = true;
        }
        else {
          // if user is request activate request mode
          if(this.authService.currentUser.friendRequestOut.indexOf(this.friendUser.uid) > -1){
            this.isRequestOut = true;
          } else { // if user is request in activate
            if(this.authService.currentUser.friendRequestIn.indexOf(this.friendUser.uid) > -1) this.isRequestIn = true;
          }
        } 


        this.showFriendPopUp = true;
      }
    })


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
