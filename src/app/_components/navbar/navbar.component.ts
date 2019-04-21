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
    else {
      this.mainService.changePage(0);
    }
  }

  icon1Click(){
    if(this.mainService.currentPageValue == 1){

    }
    else {
      this.mainService.changePage(1);
    }
  }
}
