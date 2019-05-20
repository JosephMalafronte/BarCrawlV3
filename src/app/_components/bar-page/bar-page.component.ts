import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import {
  animate, state, style, transition, trigger
} from '@angular/animations';
import { Router } from '@angular/router';


import { take } from 'rxjs/operators'
import * as $ from 'jquery'; 

import { DateDirective} from '../../_directives/date.directive';
import { AuthService } from '../../_services/auth.service';
import {BarPageService} from '../../_services/barpage.service';
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
      this.barpageService.setBarPage(null);
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

  dayOfTheWeek: string;






  db: AngularFireDatabase;
  authService: AuthService;
  dateDirective: DateDirective;
  barpageService: BarPageService;

  

  constructor(
    _dbA: AngularFireDatabase,
    _dateDirective: DateDirective,
    _authService: AuthService,
    _barpageService: BarPageService,
    private router: Router
  ) { 
    this.db = _dbA;
    this.authService = _authService;
    this.dateDirective = _dateDirective;
    this.barpageService = _barpageService;

    //this.dayOfTheWeek = _dateDirective.getDayOfWeek();
    this.dayOfTheWeek = "Wednesday";


  }

  ngOnInit() {

    
  }


  //COVERS: Get Mode of day.values and mode of day.hourValues. If hourvalues mode> values mode display hourvalues
  //If current Hour > Last Hour wipe hour Values and update last hour



  clearBarPageData(){
    this.isLoading = true;
    this.barPictureUrl = "";
    this.barName = "";
    this.barPictureUrl = "";
  }

  getBarPage(barId: number){
    this.barPageId = barId;
    this.clearBarPageData();

    this.db.object('barPages/'+this.barPageId.toString()).valueChanges().subscribe(result => {
      this.barPage = result as BarPage;
      this.barpageService.setBarPage(this.barPage);
      this.barPictureUrl = this.barPage.barPicture1Url;
      this.barName = this.barPage.barName;


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
      this.router.navigateByUrl('/main/barlist/deals');
    }
    if(index == 1){
      this.router.navigateByUrl('/main/barlist/cover');
    }
    this.activeInfoPage = index;
  }


 






}
