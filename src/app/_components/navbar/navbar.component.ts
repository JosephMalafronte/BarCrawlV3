import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {MainService} from '../../_services/main.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor(private mainService: MainService) { }

  ngOnInit() {
  }



  icon0Click(){
    if(this.mainService.currentPageValue == 0){
      this.mainService.reverseBarSlide();
    }
    this.mainService.changePage(0);
  }

  icon1Click(){
    if(this.mainService.currentPageValue == 1){
      // If slide is closed dont do anything
      if(this.mainService.barSlideSearch.getValue() == false) return;

      //If slide is open close it
      this.mainService.toggleBarSlideSearch();
      return;
    }
    this.mainService.changePage(1);
  }

  icon2Click(){
    if(this.mainService.currentPageValue == 2){
        //Same click functionality here
        return;
    }
    this.mainService.changePage(2);
  }

  icon3Click(){
    if(this.mainService.currentPageValue == 3){
      // If slide is closed dont do anything
      console.log('test');
      if(this.mainService.barSlideLikedBars.getValue() == false) return;

      //If slide is open close it
      this.mainService.toggleBarSlideLikedBars();
      return;
    }
    this.mainService.changePage(3);
  }

  icon4Click(){
    console.log("click");
    if(this.mainService.currentPageValue == 4){
      //Same click functionality here
      return;
    }
    this.mainService.changePage(4);
  }
}
