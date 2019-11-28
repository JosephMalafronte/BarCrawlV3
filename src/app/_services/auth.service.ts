import { Injectable, } from '@angular/core';
import { AngularFireAuth} from "angularfire2/auth";
import { AngularFireDatabase } from '@angular/fire/database';
import { User } from '../_models/User.Model';
import { BarCard } from '../models';
import { forkJoin, Observable, BehaviorSubject } from 'rxjs';  // RxJS 6 syntax
import { take } from 'rxjs/operators';
import { MainService } from './main.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: User = null;
  authStateValue:boolean = false;
  authStateSet: BehaviorSubject<boolean>;
  loadingFriendData: BehaviorSubject<string> = new BehaviorSubject<string>("None");  
  af: AngularFireAuth;
  db: AngularFireDatabase;
  subUser: boolean = false;

  //Profile Changes
  profilePicUrlChange: BehaviorSubject<string> = new BehaviorSubject<string>("");


  constructor(private mainService: MainService, dbA: AngularFireDatabase, public afAuth: AngularFireAuth) {
    this.af = afAuth;
    this.db = dbA;
    this.authStateSet = new BehaviorSubject<boolean>(false);
  }

  setUser(user: User){
    if(this.currentUser != null && user.uid == this.currentUser.uid) return;
    this.currentUser = user;

    this.getUserInfo().subscribe(responseList => {
      let barCardCount = responseList[0];
      let userInfo = responseList[1];

      if(userInfo == null) this.afAuth.auth.signOut();

      //Set User Info
      this.currentUser.userName = userInfo.about.userName;

      //Set Bar Card Count
      this.currentUser.barCardCount = +barCardCount;

      //Get Attending Bars
      if(userInfo.about.hasOwnProperty("barsAttending")){
        this.currentUser.barsAttending = Object.keys(userInfo.about.barsAttending).map(key => userInfo.about.barsAttending[key]);
      }

      //Get Liked Cards
      if(userInfo.hasOwnProperty('likedBars')){
        this.getLikedCards(userInfo.likedBars);
      }

      //Get Friend Ids
      if(userInfo.friends){
        this.currentUser.friendIds = Object.keys(userInfo.friends).map(key => userInfo.friends[key]);
        this.loadAllUserFriendData();
      }

      // Listen for Friend Request
      this.listenForFriendRequest();

      //Get About Info
      this.currentUser.firstName = userInfo.about.firstName;
      this.currentUser.lastName = userInfo.about.lastName;
      this.currentUser.profilePicUrl = userInfo.about.profilePicUrl;

      //Set settings
      if(userInfo.settings) this.currentUser.locationTracking = userInfo.settings.locationTracking;
      else this.currentUser.locationTracking = false;

      //Mark As Finished
      this.authStateValue = true;
      this.authStateSet.next(true);
    });
  }


  getUserInfo(): Observable<any[]>{
    let uid: string = this.currentUser.uid;
    let response0 = this.db.object('barCardCount').valueChanges().pipe(take(1));
    let response1 = this.db.object('userInfo/' + uid).valueChanges().pipe(take(1));
    return forkJoin([response0, response1]);
  }

  getLikedCards(result){

    this.currentUser.likedBars = [];
    if(result != null){
      for(var i =1;i<=this.currentUser.barCardCount;i++){
        if(result[i]!=null){
          this.currentUser.likedBars.push(+result[i].id);
        }
      }
    }

  }


  createUserInfo(user: User){
    return this.db.object('userInfo/' + user.uid).set({
      about: {
        firstName: user.firstName, 
        lastName: user.lastName, 
        userName: user.userName,
        email: user.email,
        profilePicUrl: "null",
        uid: user.uid
      },
      settings: {
        locationTracking: false
      }
    });
  }



  logIn(email:string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email,password);
  }

  logOut(){

    this.afAuth.auth.signOut();
    // Refresh page to wipe all info, might need to rework later

    window.location.href="index.html";

  }

  createUser(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }



  likeBar(barId: number){
    console.log("Like");
    let barIdString: string = barId.toString();
    let uid: string = this.currentUser.uid;
    let index = this.currentUser.likedBars.indexOf(barId);

    //If bar was not liked before
    if(index == -1){
      this.currentUser.likedBars.push(barId);
      const itemRef = this.db.object('userInfo/' + uid + '/likedBars/' + barIdString);
      itemRef.set({id : barIdString }).then(_ => {

      });
    }
    //If bar was liked before
    else{
      this.currentUser.likedBars.splice(index,1);
      
      const itemRef = this.db.object('userInfo/' + uid + '/likedBars/' + barIdString);
      itemRef.remove().then(_ => {

      });
    }

  }

  markAttending(barId: number){
    let barIdString: string = barId.toString();
    let uid: string = this.currentUser.uid;
    let index = this.currentUser.barsAttending.indexOf(barId);

    //If bar was not attended before
    if(index == -1){
      this.currentUser.barsAttending.push(barId);
      const itemRef = this.db.object('userInfo/' + uid + '/about/barsAttending');
      itemRef.set(this.currentUser.barsAttending).then(_ => {

      });
    }
    //If bar was attended before
    else{
      this.currentUser.barsAttending.splice(index,1);
      
      const itemRef = this.db.object('userInfo/' + uid + '/about/barsAttending');
      itemRef.set(this.currentUser.barsAttending).then(_ => {

      });
    }

  }

  checkUniqueUser(username){
    return this.db.list('userInfo', ref => ref.orderByChild('about/userName').limitToFirst(10).equalTo(username)).valueChanges();
  }


  // Should be called whenever loading a component that shows friend data
  reloadFriendData() {
    this.db.list('userInfo/' + this.currentUser.uid + '/friends').valueChanges().pipe(take(1)).subscribe((data:any) => {
      this.currentUser.friendIds = data;

      if(this.currentUser.friendIds.length == 0){
        this.loadingFriendData.next("Done");
        return;
      }

      this.loadAllUserFriendData();
    })
  }

  // Loads all friend data from friend ids
  loadAllUserFriendData() {
    this.loadingFriendData.next("Loading");
    let requestArray = [];


    for(var i =0; i<this.currentUser.friendIds.length; i++){
      let id: string = this.currentUser.friendIds[i];
      var request = this.db.object('userInfo/' + id + '/about').valueChanges().pipe(take(1));
      requestArray.push(request);
    }

    forkJoin(requestArray).subscribe(responseList => {

      this.currentUser.friends = [];
      responseList.forEach(userObject => {
        var friendUser: User = new User();
        friendUser.setFriendData(userObject);    
        this.currentUser.friends.push(friendUser);    
      });
      this.loadingFriendData.next("Done");
      this.loadingFriendData.next("None");
    });
    
  }

  //Function that takes array of uids and returns a fork join of user data
  loadGenericUserData(uidArray: string[]): Observable<any>{
    let requestArray = [];

    console.log(uidArray);

    for(var i =0; i<uidArray.length; i++){
      let id: string = uidArray[i];
      var request = this.db.object('userInfo/' + id + '/about').valueChanges().pipe(take(1));
      requestArray.push(request);
    }

    return forkJoin(requestArray);
  }

  //Load data for a new friend and append to the user array
  addFriendData(id){
    this.db.object('userInfo/' + id + '/about').valueChanges().pipe(take(1)).subscribe(userObject => {
      var friendUser: User = new User();
      friendUser.setFriendData(userObject);    
      this.currentUser.friends.push(friendUser);
    });
  }

  removeFriend(uid){
    //Remove from id array
    for(var i=0;i<this.currentUser.friendIds.length;i++){
      var userName: string = this.currentUser.friendIds[i];
      if(uid === userName) this.currentUser.friendIds.splice(i,1);
      break;
    }

    //Remove from data array
    for(var i=0;i<this.currentUser.friends.length;i++){
      var user: User = this.currentUser.friends[i];
      if(uid === user.uid) this.currentUser.friends.splice(i,1);
      break;
    }    

  }

  listenForFriendRequest(){
    this.db.object('/userInfo/' + this.currentUser.uid + '/friendRequestIn').valueChanges().subscribe(object => {
      if(!object){
        this.currentUser.friendRequestIn = [];
        return;
      } 

      this.currentUser.friendRequestIn = Object.keys(object).map(key => object[key]);
    });

  }

  submitFriendRequest(uid: string){
    this.db.object('/userInfo/' + this.currentUser.uid + '/friendRequestOut/' + uid).set(uid);
    this.db.object('/userInfo/' + uid + '/friendRequestIn/' + this.currentUser.uid).set(this.currentUser.uid);
  }

  acceptFriendRequest(uid: string){
    this.db.object('/userInfo/' + this.currentUser.uid + '/friendRequestIn/' + uid).remove();
    this.db.object('/userInfo/' + uid + '/friendRequestOut/' + this.currentUser.uid).remove();
    
    this.db.object('userInfo/' + this.currentUser.uid + '/friends/' + uid).set(uid);
    this.db.object('userInfo/' + uid + '/friends/' + this.currentUser.uid).set(this.currentUser.uid);

    //If we are on the all friends page reset page
    if(this.mainService.currentPageValue == 2){
      this.mainService.acceptFriendRequestId.next(uid);
    }

  }

  setProfilePicture(url: string) {
    console.log('set');
    this.db.object('userInfo/' + this.currentUser.uid +'/about/profilePicUrl').set(url);
    this.currentUser.profilePicUrl = url;
    this.profilePicUrlChange.next(url);
  }


}
