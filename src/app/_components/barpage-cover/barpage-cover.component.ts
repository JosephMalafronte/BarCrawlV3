import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import {UpcomingDeal} from '../../models';
import { DateDirective} from '../../_directives/date.directive';
import {BarPageService} from '../../_services/barpage.service';
import {MainService} from '../../_services/main.service';
import { BarPage, HourlyEstimate } from '../../models';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-barpage-cover',
  templateUrl: './barpage-cover.component.html',
  styleUrls: ['./barpage-cover.component.css',
  '../../_pages/main/main.component.css'
  ],
})
export class BarpageCoverComponent implements OnInit {

  barPage: BarPage;
  barPageId: number;
  barName: string;

  hidePage: boolean = true;


  db: AngularFireDatabase;
  dateDirective: DateDirective;
  barpageService: BarPageService;

  dayOfTheWeek: string;

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


  constructor(
    _dbA: AngularFireDatabase,
    _dateDirective: DateDirective,
    _barpageService: BarPageService,
    private mainService: MainService,
  ) { 
    this.db = _dbA;
    this.dateDirective = _dateDirective;
    this.barpageService = _barpageService;

    //this.dayOfTheWeek = _dateDirective.getDayOfWeek();
    this.dayOfTheWeek = "Wednesday";

    var self = this;

    setInterval(function () {
      self.numberSinceRefresh = 0;
    }, 30000);
  }

  ngOnInit() {


    this.barpageService.currentBarPage.subscribe(value => {
      if(value != null){
        this.barPage = value;
        this.barPageId = this.barPage.barId;
        this.barName = this.barPage.barName;

        this.getCoverInfo();
      }
    });

    this.mainService.reportCoverSwitch.subscribe(result => {
      if(result == true){
        this.reportCoverValue = this.mainService.reportCoverValue;
        console.log(this.reportCoverValue);
        this.reportCover();
        this.mainService.reportCoverSwitch.next(false);
      }
    });


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
      this.hidePage = false;
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

    toggleCoverPopUp(){
      this.mainService.activateCoverPopUp();
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
      console.log('Cover Reported');
  

      this.coverSubmissionLoader = true;
      
      this.mainService.hideCoverPopUp();

      this.coverSubmissionLoader = false;
  

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
  
  


}
