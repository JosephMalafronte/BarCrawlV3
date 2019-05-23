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
  goTo
  af: AngularFireAuth;
  db: AngularFireDatabase;


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

      //Set Bar Card Count
      this.currentUser.barCardCount = +barCardCount;

      //Get Liked Cards
      if(userInfo.hasOwnProperty('likedBars')){
        this.getLikedCards(userInfo.likedBars);
      }

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
        email: user.email,
        profilePicUrl: "null"
      }
    });
  }



  logIn(email:string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email,password);
  }

  logOut(){
    this.afAuth.auth.signOut();
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


}
