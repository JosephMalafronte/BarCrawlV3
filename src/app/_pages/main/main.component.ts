import { Component, OnInit, ViewChild} from '@angular/core';
import {BarPageComponent} from '../../_components/bar-page/bar-page.component';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  barSlide: boolean = false;
  showBarPage: boolean = false;
  barPageId: number = 0;


  constructor() { }

  ngOnInit() {
  }

  activateBarSlide(barId: number){
    this.barSlide = true;
    this.showBarPage = true; //move later
    this.barPageId = barId;
    
  }

  reverseBarSlide(){
    if(this.showBarPage == true){ //change later
      this.showBarPage = false;
    }
  }

}
