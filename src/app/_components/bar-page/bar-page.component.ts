import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { BrowserModule } from '@angular/platform-browser';
import {
  animate, state, style, transition, trigger
} from '@angular/animations';
import { forkJoin, Observable, BehaviorSubject } from 'rxjs';  // RxJS 6 syntax
import { take } from 'rxjs/operators'



import { DateDirective} from '../../_directives/date.directive';
import { AuthService } from '../../_services/auth.service';

import {BarPage} from '../../models';

@Component({
  selector: 'app-bar-page',
  templateUrl: './bar-page.component.html',
  styleUrls: ['./bar-page.component.css',
  '../../_pages/main/main.component.css'
  ],
  animations: [
    trigger('slideInBarTrigger', [
      state('false', style({ transform: 'translateX(100%)' })),
      state('true', style({ transform: 'translateX(0%)' })),
      transition('* => *', animate(200))
  ])]
})
export class BarPageComponent implements OnInit {

  barPageId: number;
  @Input() set barPageIdChange(barId: number) {
    if(this.barPageId != 0 && this.barPageId!=barId){
      this.getBarPage(barId);
    }
  }
  @Input() slideInBar:boolean = false;
  isLoading: boolean = true;
  
  //BarPage Variables
  barPage: BarPage;
  barName = "";
  barPictureUrl = "";
  likeImageStatus = "lovefilledblack";
  activeInfoPage = 0;
  noDailyDeals = false;
  dailyDealsExpanded = false;
  expandDealsButtonText = "VIEW MORE DEALS & EVENTS FOR TODAY";

  displayDailyDeals = [];
  allDailyDeals = [];
  dayOfTheWeek: String;

  db: AngularFireDatabase;
  authService: AuthService;
  

  constructor(
    _dbA: AngularFireDatabase,
    _dateDirective: DateDirective,
    _authService: AuthService
  ) { 
    this.db = _dbA;
    this.authService = _authService;
    //this.dayOfTheWeek = _dateDirective.getDayOfWeek();
    this.dayOfTheWeek = "Wednesday";
  }

  ngOnInit() {

    
  }

  clearBarPageData(){
    this.isLoading = true;
    this.barPictureUrl = "";
    this.barName = "";
    this.displayDailyDeals = [];
    this.allDailyDeals = [];
    this.barPictureUrl = "";
  }

  getBarPage(barId: number){
    this.barPageId = barId;
    this.clearBarPageData();

    this.db.object('barPages/'+this.barPageId.toString()).valueChanges().subscribe(result => {
      console.log(result);
      this.barPage = result as BarPage;
      this.barPictureUrl = this.barPage.barPicture1Url;
      this.barName = this.barPage.barName;

      this.getDailyDeals();
    });
   
  }


  imageLoaded() {
    this.isLoading = false;
  }


  getDailyDeals(){
    this.db.list('dailyDeals/' + this.dayOfTheWeek+'/'+this.barName).valueChanges().subscribe(result => {
      this.allDailyDeals = [];
      this.allDailyDeals = result;

      if(this.allDailyDeals.length == 0){
        this.noDailyDeals = true;
      }
      else this.noDailyDeals = false;

      //Set display deals
      this.show2DailyDeals();    
      
    });
  }

  show2DailyDeals() {
    this.displayDailyDeals = [];
    for(var i = 0; i<this.allDailyDeals.length && i<2; i++){
      this.displayDailyDeals.push(this.allDailyDeals[i]);
    }
  }

  showAllDailyDeals() {
    this.displayDailyDeals = this.allDailyDeals;
  }


  handleExpandButtonClick() {
    if(this.dailyDealsExpanded == false){
      this.showAllDailyDeals();
      this.dailyDealsExpanded = true;
      this.expandDealsButtonText = "VIEW LESS DEALS & EVENTS FOR TODAY";
    }
    else {
      this.show2DailyDeals();
      this.dailyDealsExpanded = false;
      this.expandDealsButtonText = "VIEW MORE DEALS & EVENTS FOR TODAY";
    }
  }


  checkLikedStatus(){
    if(this.authService.currentUser.likedBars == undefined) return;
    if(this.authService.currentUser.likedBars.indexOf(this.barPageId) == -1){
      return false;
    }
    else return true;
  }

  likeBar(){
    this.authService.likeBar(this.barPageId);
  }


  activeNavIcon(index: number){
    if(this.activeInfoPage == index) return true;
    return false;
  }

  setActiveInfoPage(index: number){
    this.activeInfoPage = index;
  }

}
