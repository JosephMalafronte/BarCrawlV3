import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AuthService} from '../../_services/auth.service';
import { User } from '../../_models/User.Model';

@Component({
  selector: 'app-all-friends',
  templateUrl: './all-friends.component.html',
  styleUrls: ['./all-friends.component.css']
})
export class AllFriendsComponent implements OnInit {

  displayFriends: boolean = false;
  friends: User[] = [];

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.friends = this.authService.currentUser.friends;
    this.displayFriends = true;
    console.log(this.friends);
  }


}
