import { Injectable, } from '@angular/core';
import { AngularFireAuth} from "angularfire2/auth";
import { AngularFireDatabase } from '@angular/fire/database';
import { User } from '../_models/User.Model';
import { BarCard } from '../models';
import { forkJoin, Observable, BehaviorSubject } from 'rxjs';  // RxJS 6 syntax
import { take } from 'rxjs/operators'



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: User = null;
  authStateValue:boolean = false;
  authStateSet: BehaviorSubject<boolean>;
  loadingFriendData: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);  
  af: AngularFireAuth;
  db: AngularFireDatabase;
  subUser: boolean = false;


  constructor(dbA: AngularFireDatabase, public afAuth: AngularFireAuth) {
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

      //Get Liked Cards
      if(userInfo.hasOwnProperty('likedBars')){
        this.getLikedCards(userInfo.likedBars);
      }

      //Get Friend Ids
      if(userInfo.friends){
        this.currentUser.friendIds = Object.keys(userInfo.friends).map(key => userInfo.friends[key]);
        this.loadAllUserFriendData();
      }

      this.listenForFriendRequest();

      //Get About Info
      this.currentUser.firstName = userInfo.about.firstName;
      console.log(this.currentUser);

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
      }
    });
  }



  logIn(email:string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email,password);
  }

  logOut(){
    this.afAuth.auth.signOut();
    console.log(this.afAuth.auth);
    // Refresh page to wipe all info, might need to rework later
    var pathArray = window.location.pathname.split( '/' );

    window.location.href=pathArray[0];

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

  checkUniqueUser(username){
    return this.db.list('userInfo', ref => ref.orderByChild('about/userName').limitToFirst(10).equalTo(username)).valueChanges();
  }


  // Loads all friend data from friend ids
  loadAllUserFriendData() {
    this.loadingFriendData.next(true);
    let requestArray = [];

    this.currentUser.friends = [];

    for(var i =0; i<this.currentUser.friendIds.length; i++){
      let id: string = this.currentUser.friendIds[i];
      var request = this.db.object('userInfo/' + id + '/about').valueChanges().pipe(take(1));
      requestArray.push(request);
    }

    forkJoin(requestArray).subscribe(responseList => {
      console.log("Loaded Friends!");
      responseList.forEach(userObject => {
        var friendUser: User = new User();
        friendUser.setFriendData(userObject);    
        this.currentUser.friends.push(friendUser);    
      });
      console.log("Set Friends!");
      console.log(this.currentUser.friends);
      this.loadingFriendData.next(false);
    });
    
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
      console.log(this.currentUser.friendRequestIn);
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

  }


}
