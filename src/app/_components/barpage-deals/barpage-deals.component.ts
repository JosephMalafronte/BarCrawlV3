import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import {UpcomingDeal} from '../../models';
import { DateDirective} from '../../_directives/date.directive';
import {BarPageService} from '../../_services/barpage.service';
import { BarPage } from '../../_models/BarPage.Model';


@Component({
  selector: 'app-barpage-deals',
  templateUrl: './barpage-deals.component.html',
  styleUrls: ['./barpage-deals.component.css',
  '../../_pages/main/main.component.css'
  ],
})
export class BarpageDealsComponent implements OnInit {

  barPage: BarPage;
  barName: string;

  hidePage: boolean = true;

  //Deals Variables
  noDailyDeals = false;
  dailyDealsExpanded = false;
  expandDealsButtonText = "VIEW MORE";
  upcomingExpanded = false;
  expandUpcomingText = "VIEW MORE";
  headDailyDeals = [];
  tailDailyDeals = [];
  allDailyDeals = [];
  dayOfTheWeek: string;
  
  upcomingDeals: UpcomingDeal[] = [];
  upcomingDealsHead: UpcomingDeal[] = [];
  upcomingDealsTail: UpcomingDeal[] = [];

  db: AngularFireDatabase;
  dateDirective: DateDirective;
  barpageService: BarPageService;

  constructor(
    _dbA: AngularFireDatabase,
    _dateDirective: DateDirective,
    _barpageService: BarPageService
  ) { 
    this.db = _dbA;
    this.dateDirective = _dateDirective;
    this.barpageService = _barpageService;

    //this.dayOfTheWeek = _dateDirective.getDayOfWeek();
    this.dayOfTheWeek = "Wednesday";
  }

  ngOnInit() {

    this.barpageService.currentBarPage.subscribe(value => {
      if(value != null){
        this.barPage = value;
        this.barName = this.barPage.barName;


        this.clearBarDeals();
        this.getDailyDeals();
      }
    });

  }

  clearBarDeals(){
    this.headDailyDeals = [];
    this.tailDailyDeals = [];
    this.allDailyDeals = [];
    this.upcomingDeals = [];
    this.upcomingDealsHead = [];
    this.upcomingDealsTail = [];
  }

  getDailyDeals(){

    this.db.object('dailyDeals/'+ this.barName).valueChanges().subscribe((result: any) => {


      //Upcoming Deals
      var handleObject: UpcomingDeal = new UpcomingDeal();
      this.upcomingDeals = handleObject.insertAll(result);

      var index = -1;
      for(var i=0; i<this.upcomingDeals.length; i++){
        var deal = this.upcomingDeals[i];
        if(deal.dayOfTheWeek == this.dayOfTheWeek){
          index = i;
        }
      }
      if(i>-1){ //Set Daily Deal
        this.allDailyDeals = this.upcomingDeals[index].deals;
        this.upcomingDeals.splice(index,1);
      }

      //sort by weekday
      var order = this.dateDirective.weekOrderSwitch(this.dayOfTheWeek);
      this.upcomingDeals.sort(function (a, b) {
        return order[a.dayOfTheWeek] - order[b.dayOfTheWeek];
      });

      //Split into head and tail
      this.upcomingDealsHead = [];
      for(var i = 0; i<this.upcomingDeals.length && i<2; i++){
        this.upcomingDealsHead.push(this.upcomingDeals[i]);
      }
      this.upcomingDealsTail = [];
      for(var i = 2; i<this.upcomingDeals.length; i++){
        this.upcomingDealsTail.push(this.upcomingDeals[i]);
      }



      //Daily Deals
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
      

      this.hidePage = false;

    });
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

  handleUpcomingExpandButtonClick(){
    if(this.upcomingExpanded == false){
      this.upcomingExpanded = true;
      this.expandUpcomingText = "VIEW LESS";
    }
    else {
      this.upcomingExpanded = false;
      this.expandUpcomingText = "VIEW MORE";
    }
  }



}
