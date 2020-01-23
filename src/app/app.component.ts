import { Component, OnInit } from '@angular/core';
import { MainService } from './_services/main.service';
declare var device;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BarCrawlV3';

  constructor(private mainService: MainService){

  }

  ngOnInit() { 
    this.mainService.setIphoneScreen();

    if(this.mainService.iphoneVersion != "new"){
      document.getElementById("newiPhoneHeader").classList.remove("newiPhoneHeader");
    }
  } 
  
}
