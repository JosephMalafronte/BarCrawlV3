import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable, Subject } from 'rxjs';
import { BrowserModule } from '@angular/platform-browser';
import {
  animate, state, style, transition, trigger
} from '@angular/animations';



import { DateDirective} from '../../_directives/date.directive';

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
  

  barPage: BarPage;
  //BarPage Variables
  barName = "";
  barPictureUrl = "";

  dailyDeals = [];
  dayOfTheWeek: String;

  db: AngularFireDatabase;

  

  constructor(
    dbA: AngularFireDatabase,
    dateDirective: DateDirective
  ) { 
    this.db = dbA;
    //this.dayOfTheWeek = dateDirective.getDayOfWeek();
    this.dayOfTheWeek = "Wednesday";
  }

  ngOnInit() {

    
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

  clearBarPageData(){
    this.isLoading = true;
    this.barPictureUrl = "";
    this.barName = "";
    this.dailyDeals = [];
    this.barPictureUrl = "";
  }


  imageLoaded() {
    this.isLoading = false;
  }


  getDailyDeals(){
    this.db.list('dailyDeals/'+this.dayOfTheWeek+'/'+this.barName).valueChanges().subscribe(result => {
      this.dailyDeals = result;
    });
  }

}
