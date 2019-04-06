import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { BarCard} from '../../models';

import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-scroll',
  templateUrl: './main-scroll.component.html',
  styleUrls: ['./main-scroll.component.css',
  '../../_pages/main/main.component.css'
  ]
})
export class MainScrollComponent implements OnInit {

  displayPage: boolean = true;

  @Output() barCardClick = new EventEmitter<boolean>();
  dayOfTheWeek: string = "Wednesday";

  //BarCards
  barCards = [];

  db: AngularFireDatabase;


  constructor(dbA: AngularFireDatabase) { 
    this.db = dbA;
  }

  ngOnInit() {
    this.getBarCards();
  }

  getBarCards() {
    this.db.list('barCards/' + this.dayOfTheWeek).valueChanges().subscribe(result => {
      this.barCards = result;
      console.log(this.barCards);
    });
  }

  onBarCardClick() {
    this.barCardClick.emit(true);
  }



}
