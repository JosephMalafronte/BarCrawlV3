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

  db: AngularFireDatabase;


  constructor(dbA: AngularFireDatabase, private authService: AuthService) { 
    this.db = dbA;
  }

  ngOnInit() {
    this.getBarCards();
  }


  getBarCards() {
    this.db.list('barCards/' + this.dayOfTheWeek).valueChanges().subscribe(result => {
      this.barCards = result;
    });
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
