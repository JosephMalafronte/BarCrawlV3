import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AuthService } from '../../_services/auth.service';

import { BarCard } from '../../models';

import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { DateDirective } from '../../_directives/date.directive';
import { take } from 'rxjs/operators';


declare let window: any;


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
    private dateDirective: DateDirective
  ) {
    this.db = dbA;
  }

  ngOnInit() {

    //Get notification permission
    window.FirebasePlugin.grantPermission(function (hasPermission) {
      console.log("Permission was " + (hasPermission ? "granted" : "denied"));
    });

    // window.FirebasePlugin.hasPermission(function (hasPermission) {
    //   console.log("Permission is " + (hasPermission ? "granted" : "denied"));
    // });


    this.getNotificationToken();


    this.dayOfTheWeek = this.dateDirective.getDayOfWeek();
    this.getBarCards();
    console.log(this.authService.currentUser);
  }


  getNotificationToken() {
    var refString = 'userInfo/' + this.authService.currentUser.uid + '/notificationTokens';

    var currentTokens = this.db.list(refString).valueChanges().pipe(take(1)).subscribe(value => {
      //If there are no tokens in the database set the curret one
      if (value.length == 0) {
        window.FirebasePlugin.getToken(fcmToken => {

          if (fcmToken == null) {
            console.log("No token assigned yet");
            return;
          }

          console.log("Succesfully got Token");
          console.log(fcmToken);
          this.db.list(refString).push(fcmToken);
        }, function (error) {
          console.log("Error Retrieving Token:");
          console.error(error);
        });
      }
    });

    //Runs anytime the user has a new token
    window.FirebasePlugin.onTokenRefresh(fcmToken => {
      console.log(fcmToken);
      this.db.list(refString).push(fcmToken);
    }, function (error) {
      console.error(error);
    });

  }


  getBarCards() {
    this.db.list('barCards/' + this.dayOfTheWeek).valueChanges().subscribe(result => {
      this.allBarCards = result;

      this.allBarCards = this.allBarCards.sort((a, b): any => {
        return a.orderRank - b.orderRank;
      });

      this.maxPage = Math.ceil(this.allBarCards.length / this.cardsPerPage);
      this.pageChange(1);
    });
  }

  pageChange(pageNum: number) {
    if (pageNum > this.maxPage || pageNum < 1) return;

    var tempList = [];
    this.barCards = [];
    var start = (pageNum - 1) * this.cardsPerPage;
    var length = this.allBarCards.length - start;
    var limit = (Math.min(length, this.cardsPerPage)) + start;
    for (var i = start; i < limit; i++) {
      tempList.push(this.allBarCards[i]);
    }

    this.barCards = tempList;
    this.curPage = pageNum;
  }


  checkLikedStatus(barCard: BarCard): boolean {
    if (this.authService.currentUser.likedBars == undefined) return;
    if (this.authService.currentUser.likedBars.indexOf(barCard.barId) == -1) {
      return false;
    }
    else return true;
  }

  onBarCardClick(event, id: number) {
    if (event.target.id != undefined && event.target.id == "like") return;

    this.barCardClick.emit(id);
  }


  likeBar(barCard: BarCard) {
    this.authService.likeBar(barCard.barId);
  }



}
