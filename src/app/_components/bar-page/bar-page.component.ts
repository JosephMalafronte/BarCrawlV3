import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import {
  animate, state, style, transition, trigger
} from '@angular/animations';

import { take } from 'rxjs/operators'
import * as $ from 'jquery'; 

import { DateDirective} from '../../_directives/date.directive';
import { AuthService } from '../../_services/auth.service';

import {BarPage, UpcomingDeal, HourlyEstimate} from '../../models';

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
  upcomingExpanded = false;
  expandUpcomingText = "VIEW MORE";

  //Deals Variables
  headDailyDeals = [];
  tailDailyDeals = [];
  allDailyDeals = [];
  dayOfTheWeek: string;
  
  upcomingDeals: UpcomingDeal[] = [];
  upcomingDealsHead: UpcomingDeal[] = [];
  upcomingDealsTail: UpcomingDeal[] = [];

  //Cover Variables
  coverResult: any;
  currentDate: Date;
  coverDayOfTheWeek: string;
  currentHour: number;
  currentHourString: string;
  currentEstCover: number = 0;
  hourlyEstimates: HourlyEstimate[] = [];
  showHourlyEstimates: boolean = false;
  showCoverPopUp: boolean = false;
  reportCoverValue: number = 0;
  showPlus: boolean = true;
  showMinus: boolean = false;
  coverSubmissionLoader: boolean = false;

  //Cover Timing
  numberSinceRefresh:number = 0;

  db: AngularFireDatabase;
  authService: AuthService;
  dateDirective: DateDirective;


  

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

    var self = this;

    setInterval(function () {
      self.numberSinceRefresh = 0;
    }, 30000);


  }

  ngOnInit() {

    
  }


  //COVERS: Get Mode of day.values and mode of day.hourValues. If hourvalues mode> values mode display hourvalues
  //If current Hour > Last Hour wipe hour Values and update last hour



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
      this.barPage = result as BarPage;
      this.barPictureUrl = this.barPage.barPicture1Url;
      this.barName = this.barPage.barName;

      this.getDailyDeals();

      

    });
   
  }


  imageLoaded() {
    this.isLoading = false;
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
    if(index == 0){
      this.expandDealsButtonText = "VIEW MORE";
      this.expandUpcomingText = "VIEW MORE";
    }
    if(index == 1){
      this.getCoverInfo();
    }
    this.activeInfoPage = index;
  }


  //Daily Deal Functions
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

  handleUpcomingExpandButtonClick(){
    if(this.dailyDealsExpanded == false){
      this.dailyDealsExpanded = true;
      this.expandUpcomingText = "VIEW LESS";
    }
    else {
      this.dailyDealsExpanded = false;
      this.expandUpcomingText = "VIEW MORE";
    }
  }



  //Cover Functions
  getCoverInfo(){

    this.coverDateSetup();


    this.db.object('/coverReports/' + this.barPageId.toString() + '/' + this.coverDayOfTheWeek).valueChanges().pipe(take(1)).subscribe(
    //this.db.object('/coverReports/' + this.barPageId.toString() + '/' + 'Wednesday').valueChanges().pipe(take(1)).subscribe(
    
      (result: any) => {

        this.coverResult = result;

        this.cleanCoverDatabase();
        this.estimateCurrentCover();
        this.loadHourlyEstimates();
      }
    );
  }

  coverDateSetup(){

    this.currentDate = new Date;

    var date = this.currentDate;
    this.currentHour = date.getHours();
    this.currentHourString = this.currentHour.toString() + 'time';
    


    //USE THIS WHEN NOT TESTIng
    // if(this.currentHour < 5) {
    //   this.coverDayOfTheWeek = this.dateDirective.backOneDay(this.dayOfTheWeek);
    // }
    // else this.coverDayOfTheWeek = this.dayOfTheWeek;

    this.coverDayOfTheWeek = "Wednesday";


  }

  cleanCoverDatabase(){
    var currentMonth = this.currentDate.getMonth()+1;
    var currentDay = this.currentDate.getDate();
    var postedDateMonth = this.coverResult.lastMonth;
    var postedDateDay = this.coverResult.lastDay;
    var dayDif = currentDay - postedDateDay;

    var notValidDate = false;
    var needToUpdate = false;
    if(currentMonth != postedDateMonth) notValidDate = true;
    if(currentMonth == postedDateMonth && dayDif> 1 && dayDif < 0) notValidDate = true;

    var lastRecordedHour = +this.coverResult.lastHour;

    if(notValidDate == true){
      needToUpdate = true;
      this.coverResult.lastDay = currentDay;
      this.coverResult.lastMonth = currentMonth;
      this.coverResult.hourValues = "[]";
      this.coverResult.values = "[]";
      this.coverResult.lastHour = "null";
      this.coverResult.hourValues = "[]";

    }
    else if(this.currentHour - lastRecordedHour > 1){
      needToUpdate = true;
      this.coverResult.lastHour = "null";
      this.coverResult.hourValues = "[]";
    }
    


    if(needToUpdate == true) this.db.object('/coverReports/' + this.barPageId.toString() + '/' + this.coverDayOfTheWeek).set(this.coverResult);
      

  }

  estimateCurrentCover(){

    //Get mode for the entire night
    var valuesNight: number[] = JSON.parse(this.coverResult.values);

    //if this is empty use historical values
    if(valuesNight.length == 0){
      var historicalValues: number[] = JSON.parse(this.coverResult.hourlyEstimates[this.currentHourString].cover);
      this.currentEstCover = this.getMode(historicalValues);
      return
    }
    var modeNight = this.getMode(valuesNight);

    //get mode for the past hour if its the past hour
    if(this.coverResult.lastHour == "null"){
      this.currentEstCover = modeNight;
      return;
    }
    var lastRecordedHour = +this.coverResult.lastHour;
    var modeHour = 0;
    if(this.currentHour - lastRecordedHour <= 1){
      var valuesHour: number[] = JSON.parse(this.coverResult.hourValues);
      if(valuesHour.length>1) modeHour = this.getMode(valuesHour);
    }
    
    this.currentEstCover = Math.max(modeHour, modeNight);

  }


  loadHourlyEstimates() {

    // var hourPullArray = ["8","9","10","11","12","1","2","3"];
    // hourPullArray.forEach(item => {
    //   var insert =
    // });

    this.hourlyEstimates = [];
    
    var estimateArray = Object.keys(this.coverResult.hourlyEstimates).map(key => this.coverResult.hourlyEstimates[key]);
    estimateArray.forEach((result:any) => {


      var insert: HourlyEstimate = new HourlyEstimate();

      var coverMode = this.getMode(JSON.parse(result.cover));
      insert.cover = coverMode;

      var waitMode = this.getMode(JSON.parse(result.waitTimes));
      insert.wait = waitMode;
      if(insert.wait == 0) insert.waitString = "No Line";
      else insert.waitString = insert.wait.toString() + ' Minutes';
      
      insert.hour = result.hour;

      if(insert.hour == 0) insert.hourString ="12am";
      else if(insert.hour < 5){
        insert.hourString = insert.hour.toString() + 'am';
      }
      else if(insert.hour > 12){
        var num = insert.hour -12;
        insert.hourString = num.toString() + 'pm';
      }
      else insert.hourString = insert.hour.toString() + 'pm';


      if(insert.hour < 4 || insert.hour>19) {
        this.hourlyEstimates.push(insert);
      }

      this.hourlyEstimates.sort(function (a, b) {
        if(a.hour<5 && b.hour<5) return a.hour-b.hour;
        else if(a.hour<5) return 1;
        else if(b.hour<5) return -1;
        return a.hour-b.hour;
      });

    });

    
    this.showHourlyEstimates = true;
  }

  getMode(array): number {
    var frequency = {}; // array of frequency.
    var maxFreq = 0; // holds the max frequency.
    var modes = [];
  
    for (var i in array) {
      frequency[array[i]] = (frequency[array[i]] || 0) + 1; // increment frequency.
  
      if (frequency[array[i]] > maxFreq) { // is this frequency > max so far ?
        maxFreq = frequency[array[i]]; // update max.
      }
    }
  
    for (var k in frequency) {
      if (frequency[k] == maxFreq) {
        modes.push(k);
      }
    }
  
    return Math.max.apply(Math, modes);
  }

  reportCover(){

    var num = this.reportCoverValue;

    this.numberSinceRefresh++;
    if(this.numberSinceRefresh>2){
      return;
    }


    //TODO add logic to make sure dates arent messed up if user waits too long to report
    this.coverDateSetup();
    var estimateArray: number[] = JSON.parse(this.coverResult.hourlyEstimates[this.currentHourString].cover);

    //If length is greater than 30 wipe it and add 5 reps for weighting
    if(estimateArray.length>30){
      estimateArray = [];
      for(var i =0; i<5;i++){
        estimateArray.push(num);
      }
    }
    else estimateArray.push(num);
    this.coverResult.hourlyEstimates[this.currentHourString].cover = this.convertArrayJson(estimateArray);


    var valuesArray: number [] = JSON.parse(this.coverResult.values);
    valuesArray.push(num);
    this.coverResult.values = this.convertArrayJson(valuesArray);
    this.coverResult.lastHour = this.currentHour.toString();
    var hoursArray: number [] = JSON.parse(this.coverResult.hourValues);
    hoursArray.push(num);
    this.coverResult.hourValues = this.convertArrayJson(hoursArray);


    this.db.object('/coverReports/' + this.barPageId.toString() + '/' + this.coverDayOfTheWeek).set(this.coverResult);
    

    this.coverSubmissionLoader = true;

    var self = this;

    setTimeout(function() {
      document.getElementById('check').classList.add('check-complete');
      document.getElementById('fill').classList.add('fill-complete');
      
      setTimeout(function () {
        self.showCoverPopUp = false;
        self.coverSubmissionLoader = false;
      }, 1500);
    }, 750);

    // setTimeout(function() {
    //   document.getElementById('check').classList.add('success');
    //   document.getElementById('fill').classList.add('success');
    //   document.getElementById('path').classList.add('path-complete');
    // }, 1250);

    //this.showCoverPopUp = false;
  }


  



  convertArrayJson(array: number[]){
    return '[' + array.toString() + ']';
  }

  getLast30(array: number[]){
    var length = array.length;
    if(length <= 30) return array;

    var returnArray: number[] = [];
    var j= 0;
    for(var i=length; i>=length-30;i--){
      returnArray[j] = array[i];
    }
  }


  decrementReportCover () {
    if(this.reportCoverValue == 0) return;
    if(this.reportCoverValue == 100) this.showPlus = true;
    this.reportCoverValue = this.reportCoverValue - 5;
    if(this.reportCoverValue == 0) this.showMinus = false;
  }

  incrementReportCover () {
    if(this.reportCoverValue >= 100) return;
    if(this.reportCoverValue == 0) this.showMinus = true;
    this.reportCoverValue = this.reportCoverValue + 5;
    if(this.reportCoverValue == 100) this.showPlus = false;
  }



}
