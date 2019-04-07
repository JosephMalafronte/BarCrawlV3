import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable, Subject } from 'rxjs';
import { BrowserModule } from '@angular/platform-browser';


import { DateDirective} from '../../_directives/date.directive';

import {BarPage} from '../../models';

@Component({
  selector: 'app-bar-page',
  templateUrl: './bar-page.component.html',
  styleUrls: ['./bar-page.component.css',
  '../../_pages/main/main.component.css'
  ]
})
export class BarPageComponent implements OnInit {

  barPageId: number;
  @Input() set barPageIdChange(barId: number) {
    if(this.barPageId != 0){
      this.getBarPage(barId);
    }
  }

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
    this.barPictureUrl = "";
    this.barName = "";

    this.db.object('barPages/'+this.barPageId.toString()).valueChanges().subscribe(result => {
      console.log(result);
      this.barPage = result as BarPage;
      this.barPictureUrl = this.barPage.barPicture1Url;
      this.barName = this.barPage.barName;

      this.getDailyDeals();
    });
   
  }


  getDailyDeals(){
    this.db.list('dailyDeals/'+this.dayOfTheWeek+'/'+this.barName).valueChanges().subscribe(result => {
      this.dailyDeals = result;
    });
  }

}
