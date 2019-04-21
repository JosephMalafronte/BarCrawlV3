import { Injectable } from '@angular/core';
import { AngularFireAuth} from "angularfire2/auth";
import { AngularFireDatabase } from '@angular/fire/database';
import { User } from '../_models/User.Model';
import { BarCard } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: User = null;
  af: AngularFireAuth;
  db: AngularFireDatabase;


  constructor(dbA: AngularFireDatabase, public afAuth: AngularFireAuth) {
    this.af = afAuth;
    this.db = dbA;

  }

  setUser(user: User){
    if(this.currentUser != null && user.uid == this.currentUser.uid) return;
    this.currentUser = user;
    this.getBarCardCountThenLiked();
  }

  getBarCardCountThenLiked(){
    this.db.object('barCardCount').valueChanges().subscribe(result => {
      this.currentUser.barCardCount = +result;
      this.getLikedCards();
    });
  }

  logIn(email:string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email,password);
  }

  createUser() {
    return this.afAuth.auth.createUserWithEmailAndPassword("testmail@test.com", "password");
  }

  getLikedCards(){
    let uid: string = this.currentUser.uid;
    const itemRef = this.db.object('userInfo/' + uid + '/likedBars');
    itemRef.valueChanges().subscribe(result => {
      this.currentUser.likedBars = [];
      if(result != null){
        for(var i =1;i<=this.currentUser.barCardCount;i++){
          if(result[i]!=null){
            this.currentUser.likedBars.push(+result[i].id);
          }
        }
      }

      // console.log(this.currentUser.likedBars);

    });
  }

  likeBar(barCard:BarCard){
    let barId: string = barCard.barId.toString();
    let uid: string = this.currentUser.uid;

    if(this.currentUser.likedBars.indexOf(barCard.barId) == -1){
      const itemRef = this.db.object('userInfo/' + uid + '/likedBars/' + barId);
      itemRef.set({id : barId }).then(_ => {

      });
    }
    else{
      const itemRef = this.db.object('userInfo/' + uid + '/likedBars/' + barId);
      itemRef.remove().then(_ => {

      });
    }

  }


}
