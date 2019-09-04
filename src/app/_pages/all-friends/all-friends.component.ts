import { Component, OnInit, OnDestroy } from '@angular/core';
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
  pendingFriends: User[] = [];

  subscriptions: any[] = [];


  constructor(
    private authService: AuthService, 
    private mainService: MainService
  ) { }

  ngOnInit() {

    this.loadFriendData();

    this.loadPendingFriendData();

    this.listenForAcceptFriendRequest();
  }

  loadFriendData() {
    this.authService.reloadFriendData();

    //Load Friend Data
    var subscription = this.authService.loadingFriendData.subscribe(value => {
      // once done loading
      if (value == "Done") {
        this.friends = this.authService.currentUser.friends;

        this.displayFriends = true;

        this.authService.loadingFriendData.next("None");

        subscription.unsubscribe();
      }
    });

    this.subscriptions.push(subscription);
  }

  loadPendingFriendData() {
    if(this.authService.currentUser.friendRequestIn.length > 0){
      this.authService.loadGenericUserData(this.authService.currentUser.friendRequestIn).subscribe(responseList => {
        responseList.forEach(userObject => {
          var user: User = new User();
          user.setFriendData(userObject);
          this.pendingFriends.push(user);
        });
      });
    }
  }

  listenForAcceptFriendRequest(){
    var sub = this.mainService.acceptFriendRequestId.subscribe(value => {
      if(value != ""){
        for(var i =0; i<this.pendingFriends.length;i++){
          var user = this.pendingFriends[i];
          this.pendingFriends.splice(i,1);
          break;
        }
      }
    });

    this.subscriptions.push(sub);
  }

  ngOnDestroy(){
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    })
  }

  openFriendPopUp(user: User) {
    this.mainService.activateFriendPopUp(user);
  }

}
