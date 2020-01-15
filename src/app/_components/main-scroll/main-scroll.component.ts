import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AuthService} from '../../_services/auth.service';

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

  @Output() barCardClick = new EventEmitter<number>();
  dayOfTheWeek: string = "Wednesday";

  //BarCards
  barCards = [];
  allBarCards = [];

  cardsPerPage = 7; //Hardcoded value by preference
  curPage = 1;
  maxPage = 1;

  db: AngularFireDatabase;


  constructor(
    dbA: AngularFireDatabase, 
    private authService: AuthService,
  ) { 
    this.db = dbA;
  }

  ngOnInit() {
    this.getBarCards();
    console.log(this.authService.currentUser);
  }


  getBarCards() {
    this.db.list('barCards/' + this.dayOfTheWeek).valueChanges().subscribe(result => {
      this.allBarCards = result;
      this.maxPage = Math.ceil(this.allBarCards.length / this.cardsPerPage);
      this.pageChange(1);
    });
  }

  pageChange(pageNum: number) {
    if(pageNum > this.maxPage || pageNum < 1) return;

    var tempList = [];
    this.barCards = [];
    var start = (pageNum-1) * this.cardsPerPage;
    var length = this.allBarCards.length-start;
    var limit = (Math.min(length, this.cardsPerPage)) + start;
    for(var i = start; i<limit; i++){
      tempList.push(this.allBarCards[i]);
    }

    this.barCards = tempList;
    this.curPage = pageNum;
  }


  checkLikedStatus(barCard: BarCard):boolean {
    if(this.authService.currentUser.likedBars == undefined) return;
    if(this.authService.currentUser.likedBars.indexOf(barCard.barId) == -1){
      return false;
    }
    else return true;
  }

  onBarCardClick(event,id: number) {
    if(event.target.id != undefined && event.target.id == "like") return;

    this.barCardClick.emit(id);
  }


  likeBar(barCard: BarCard){
    this.authService.likeBar(barCard.barId);
  }



}
