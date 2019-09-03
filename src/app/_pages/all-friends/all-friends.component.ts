import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AuthService} from '../../_services/auth.service';
import { User } from '../../_models/User.Model';
import { MainService } from '../../_services/main.service';

@Component({
  selector: 'app-all-friends',
  templateUrl: './all-friends.component.html',
  styleUrls: ['./all-friends.component.css', '../main/main.component.css']
})
export class AllFriendsComponent implements OnInit {

  displayFriends: boolean = false;
  friends: User[] = [];

  subscription: any;

  constructor(private authService: AuthService, private mainService: MainService) { }

  ngOnInit() {

    this.authService.reloadFriendData();

    this.subscription = this.authService.loadingFriendData.subscribe(value => {
      // once done loading
      if(value == false) {
        this.friends = this.authService.currentUser.friends;
        var self = this;
        setTimeout(function() {self.displayFriends = true;}, 150);
      }
    });

  }

  ngOnDestroy(){
    console.log("rip");
    this.subscription.unsubscribe();
  }

  openFriendPopUp(user: User) {
    this.mainService.activateFriendPopUp(user);
  }


}
