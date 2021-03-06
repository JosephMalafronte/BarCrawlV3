import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AuthService } from '../../_services/auth.service';
import { MainService } from '../../_services/main.service';

@Component({
  selector: 'app-liked-bars',
  templateUrl: './liked-bars.component.html',
  styleUrls: ['./liked-bars.component.css', '../main/main.component.css']
})
export class LikedBarsComponent implements OnInit {

  barCards = [];
  attendingBarCards = [];

  showInfo = false;

  //Bar Page Slide Variables
  barSlide: boolean = false;
  showBarPage: boolean = false;
  barPageId: number = 0;

  //Subscriptions
  barSlideSub: any;

  constructor(
    private db: AngularFireDatabase, 
    private authService: AuthService,
    private mainService: MainService
  ) { }

  dayOfTheWeek = "Wednesday" // Needs to be calculated

  ngOnInit() {
    this.barSlideSub = this.mainService.barSlideLikedBars.subscribe(value => {
      this.barSlide = value;
      if(value == false) {
        console.log("Run");
        this.getBarCards();
      }
    })
  }

  ngOnDestroy() {
    this.barSlideSub.unsubscribe();
  }

  getBarCards() {

    //Start Loading
    this.showInfo = false;

    this.barCards = [];
    this.attendingBarCards = [];

    this.db.list('barCards/' + this.dayOfTheWeek).valueChanges().subscribe((result:any) => {
      result.forEach(item => {
        if(this.authService.currentUser.barsAttending.indexOf(item.barId) > -1) this.attendingBarCards.push(item);
        else if(this.authService.currentUser.likedBars.indexOf(item.barId) > -1) this.barCards.push(item);
      });

      //Done Loading
      this.showInfo = true;
    });
  }

  onBarCardClick(event,barId){
    if(event.target.id != undefined && event.target.id == "like") return;
    console.log(barId);
    this.barSlide = true;
    this.showBarPage = true;
    this.barPageId = barId;
    this.mainService.toggleBarSlideLikedBars();
  }

  likeBar(barCard){
    this.authService.likeBar(barCard.barId);
    if(this.authService.currentUser.likedBars.indexOf(barCard.barId) < 0) {
      for(var i = 0; i<this.barCards.length; i++){
        var car = this.barCards[i];
        if(car.barId == barCard.barId){
          this.barCards.splice(i,1);
          return;
        }
      }
    }
  }

  checkLikedStatus(barCard){
    if(this.authService.currentUser.likedBars == undefined) return;
    if(this.authService.currentUser.likedBars.indexOf(barCard.barId) == -1){
      return false;
    }
    else return true;
  }

}
