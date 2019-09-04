import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Router} from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { User } from '../_models/User.Model';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  currentPageValue: number = 0;
  currentPage: BehaviorSubject<number>;
  currentBarPageId: number = 0;
  barSlideValue: boolean = false;
  barSlide: BehaviorSubject<boolean>;
  barSlideSearch: BehaviorSubject<boolean>;
  userSlideValue: boolean = false;
  userSlide: BehaviorSubject<boolean>
  userSlideEvent: Event;
  friendId: number;
  acceptFriendRequestId: BehaviorSubject<string> = new BehaviorSubject<string>("");

  barlistUrl: string = "main/barlist/deals";
  searchUrl: string = "main/search/deals";


  //Popups
  showCoverPopUpValue: boolean = false;
  showCoverPopUp: BehaviorSubject<boolean>;
  reportCoverSwitch: BehaviorSubject<boolean>;
  reportCoverValue: number = 0;
  showFriendPopUp: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  friendPopUpUser: User = null;


  constructor(private router: Router) {
    this.barSlide = new BehaviorSubject<boolean>(false);
    this.barSlideSearch = new BehaviorSubject<boolean>(false);
    this.currentPage = new BehaviorSubject<number>(-1);
    this.userSlide = new BehaviorSubject<boolean>(false);
    this.showCoverPopUp = new BehaviorSubject<boolean>(false);
    this.reportCoverSwitch = new BehaviorSubject<boolean>(false);
   }

  reverseBarSlide() {
    this.barSlideValue = !this.barSlideValue;
    this.barSlide.next(this.barSlideValue);
  }

  toggleBarSlideSearch() {
    console.log(!this.barSlideSearch.getValue());
    this.barSlideSearch.next(!this.barSlideSearch.getValue());
  }

  changePage(num: number){
    if(this.userSlideValue == true) this.changeUserSlide();
    if(this.currentPageValue == num) return;

    //Saved state pages mneed to log their url
    if(this.router.url.includes("/main/barlist")) this.barlistUrl = this.router.url;
    else if(this.router.url.includes("/main/search")) this.searchUrl = this.router.url;

    this.currentPageValue = num;
    this.currentPage.next(num);
    // Subscription in main.component.ts handles behaviour
  }

  changeUserSlide(){
    this.userSlideValue = !this.userSlideValue;
    this.userSlide.next(this.userSlideValue);
  }


  activateCoverPopUp(){
    this.showCoverPopUpValue = true;
    this.showCoverPopUp.next(true);
  }

  reportCover(num: number){
    this.reportCoverValue = num;
    this.reportCoverSwitch.next(true);
  }

  hideCoverPopUp(){
    this.showCoverPopUpValue = false;
    this.showCoverPopUp.next(false);
  }

  refresh(){


  }

  activateFriendPopUp(user: User){
    this.friendPopUpUser = user;
    this.showFriendPopUp.next(true);
  }

  hideFriendPopUp(){
    this.friendPopUpUser = null;
    this.showFriendPopUp.next(false);
  }

}
