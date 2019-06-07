import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Router} from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  currentPageValue: number = 0;
  currentPage: BehaviorSubject<number>;
  barSlideValue: boolean = false;
  barSlide: BehaviorSubject<boolean>;
  userSlideValue: boolean = false;
  userSlide: BehaviorSubject<boolean>
  userSlideEvent: Event;
  friendId: number;

  barlistUrl: string = "main/barlist/deals";


  //Popups
  showCoverPopUpValue: boolean = false;
  showCoverPopUp: BehaviorSubject<boolean>;
  reportCoverSwitch: BehaviorSubject<boolean>;
  reportCoverValue: number = 0;


  constructor(private router: Router) {
    this.barSlide = new BehaviorSubject<boolean>(false);
    this.currentPage = new BehaviorSubject<number>(-1);
    this.userSlide = new BehaviorSubject<boolean>(false);
    this.showCoverPopUp = new BehaviorSubject<boolean>(false);
    this.reportCoverSwitch = new BehaviorSubject<boolean>(false);
   }

  reverseBarSlide() {
    this.barSlideValue = !this.barSlideValue;
    this.barSlide.next(this.barSlideValue);
  }

  changePage(num: number){
    if(this.userSlideValue == true) this.changeUserSlide();
    if(this.currentPageValue == num) return;

    console.log(this.router.url);
    if(this.router.url == "/main/barlist/cover") this.barlistUrl = this.router.url;
    if(this.router.url == "/main/barlist/deals") this.barlistUrl = this.router.url;


    this.currentPageValue = num;
    this.currentPage.next(num);
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

}
