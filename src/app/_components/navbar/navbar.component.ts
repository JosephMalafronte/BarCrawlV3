import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {MainService} from '../../_services/main.service';
import { AuthService } from '../../_services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  showUsersAlert: boolean = false;

  constructor(private mainService: MainService, private authService: AuthService) { }

  ngOnInit() {

    this.authService.showUsersAlert.subscribe(value=> {
      this.showUsersAlert = value;
    });

    if(this.mainService.iphoneVersion != "new"){
      document.getElementById("navbar").classList.remove("navbarNewIphone");
    }

    this.mainService.userSlideClick.subscribe(value => {
      if(value > -1){
        switch (value){
          case 0: 
            this.icon0Click();
            break;
          case 1:
            this.icon1Click(); break;
          case 2:
            this.icon2Click(); break;
          case 3:
            this.icon3Click(); break;
          case 4:
            this.icon4Click(); break;
        }
      }
    })
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
