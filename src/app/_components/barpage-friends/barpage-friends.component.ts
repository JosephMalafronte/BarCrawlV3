import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { User } from '../../_models/User.Model';
import { MainService } from '../../_services/main.service';

@Component({
  selector: 'app-barpage-friends',
  templateUrl: './barpage-friends.component.html',
  styleUrls: ['./barpage-friends.component.css', '../../_pages/main/main.component.css']
})
export class BarpageFriendsComponent implements OnInit {

  displayFriends: boolean = false;
  subscription: any;
  friends: User[] = [];

  constructor(private authService: AuthService, private mainService: MainService) { }

  ngOnInit() {

    this.authService.reloadFriendData();

    this.subscription = this.authService.loadingFriendData.subscribe(value => {
      // once done loading
      if(value == "Done") {
        var tempList = this.authService.currentUser.friends;
        var barId = this.mainService.currentBarPageId;

        for(var i=0; i<tempList.length;i++){
          var item = tempList[i];
          if(item.barsAttending.indexOf(barId) >= 0){
            this.friends.push(item);
          } 
        }

        //Show info
        this.displayFriends = true;
      

        this.authService.loadingFriendData.next("None");

        this.subscription.unsubscribe();

      }
    });

  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  openFriendPopUp(user: User) {
    this.mainService.activateFriendPopUp(user);
  }

}
