import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import {
  animate, state, style, transition, trigger
} from '@angular/animations';


import * as $ from 'jquery'; 

import { DateDirective} from '../../_directives/date.directive';
import { AuthService } from '../../_services/auth.service';

import {BarPage, UpcomingDeal} from '../../models';

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
  expandDealsButtonText = "VIEW MORE";

  headDailyDeals = [];
  tailDailyDeals = [];
  allDailyDeals = [];
  dayOfTheWeek: string;

  db: AngularFireDatabase;
  authService: AuthService;
  dateDirective: DateDirective;

  upcomingDeals: UpcomingDeal[];

  

  constructor(
    _dbA: AngularFireDatabase,
    _dateDirective: DateDirective,
    _authService: AuthService
  ) { 
    this.db = _dbA;
    this.authService = _authService;
    this.dateDirective = _dateDirective;
    //this.dayOfTheWeek = _dateDirective.getDayOfWeek();
    this.dayOfTheWeek = "Wednesday";
  }

  ngOnInit() {

    
  }

  clearBarPageData(){
    this.isLoading = true;
    this.barPictureUrl = "";
    this.barName = "";
    this.headDailyDeals = [];
    this.tailDailyDeals = [];
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

    this.db.object('dailyDeals/'+ this.barName).valueChanges().subscribe((result: any) => {

      var handleObject: UpcomingDeal = new UpcomingDeal();
      this.upcomingDeals = handleObject.insertAll(result);

      var index = -1;
      for(var i=0; i<this.upcomingDeals.length; i++){
        var deal = this.upcomingDeals[i];
        if(deal.dayOfTheWeek == this.dayOfTheWeek){
          index = i;
        }
      }
      if(i>-1){
        this.allDailyDeals = this.upcomingDeals[1].deals;
        this.upcomingDeals.splice(index,1);
      }

      //sort by weekday
      var order = this.dateDirective.weekOrderSwitch(this.dayOfTheWeek);
      this.upcomingDeals.sort(function (a, b) {
        return order[a.dayOfTheWeek] - order[b.dayOfTheWeek];
      });


      if(this.allDailyDeals.length == 0){
        this.noDailyDeals = true;
      }
      else this.noDailyDeals = false;

      //Set display deals
      this.headDailyDeals = [];
      for(var i = 0; i<this.allDailyDeals.length && i<2; i++){
        this.headDailyDeals.push(this.allDailyDeals[i]);
      }

      this.tailDailyDeals = [];
      for(var i = 2; i<this.allDailyDeals.length; i++){
        this.tailDailyDeals.push(this.allDailyDeals[i]);
      }
      
      console.log(this.upcomingDeals);

    });


    // this.db.list('dailyDeals/' + this.barName+'/'+ this.dayOfTheWeek).valueChanges().subscribe(result => {
    //   this.allDailyDeals = [];
    //   this.allDailyDeals = result;

    //   if(this.allDailyDeals.length == 0){
    //     this.noDailyDeals = true;
    //   }
    //   else this.noDailyDeals = false;

    //   //Set display deals
    //   this.headDailyDeals = [];
    //   for(var i = 0; i<this.allDailyDeals.length && i<2; i++){
    //     this.headDailyDeals.push(this.allDailyDeals[i]);
    //   }

    //   this.tailDailyDeals = [];
    //   for(var i = 2; i<this.allDailyDeals.length; i++){
    //     this.tailDailyDeals.push(this.allDailyDeals[i]);
    //   }


    // });
  }

  handleExpandButtonClick() {
    //$('.collapse').collapse();
    if(this.dailyDealsExpanded == false){
      this.dailyDealsExpanded = true;
      this.expandDealsButtonText = "VIEW LESS";
    }
    else {
      this.dailyDealsExpanded = false;
      this.expandDealsButtonText = "VIEW MORE";
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
