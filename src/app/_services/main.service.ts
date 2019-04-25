import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

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

  constructor() {
    this.barSlide = new BehaviorSubject<boolean>(false);
    this.currentPage = new BehaviorSubject<number>(-1);
    this.userSlide = new BehaviorSubject<boolean>(false);
   }

  reverseBarSlide() {
    this.barSlideValue = !this.barSlideValue;
    this.barSlide.next(this.barSlideValue);
  }

  changePage(num: number){
    if(this.userSlideValue == true) this.changeUserSlide();
    if(this.currentPageValue == num) return;
    this.currentPageValue = num;
    this.currentPage.next(num);
  }

  changeUserSlide(){
    this.userSlideValue = !this.userSlideValue;
    this.userSlide.next(this.userSlideValue);
  }





}
