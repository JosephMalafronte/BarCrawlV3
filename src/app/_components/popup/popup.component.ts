import { Component, OnInit } from '@angular/core';

import {MainService} from '../../_services/main.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {


  //Cover Variables
  showCoverPopUp: boolean = false;
  reportCoverValue: number = 0;
  coverSubmissionLoader:boolean = false;

  constructor(private mainService: MainService) { }

  ngOnInit() {

    this.mainService.showCoverPopUp.subscribe(value => {
      if(value == true){
        this.showCoverPopUp = value;
      }
      else{
        if(this.showCoverPopUp == true){
          this.hideCoverPopUp();
        }
      }

    });


  }


  reportCover() {
    this.mainService.setReportCoverValue(this.reportCoverValue);

  }


  hideCoverPopUp(){

    this.coverSubmissionLoader = true;
  
    var self = this;

    setTimeout(function() {
      // document.getElementById('check').classList.add('check-complete');
      // document.getElementById('fill').classList.add('fill-complete');


      document.getElementById('circleLoader').classList.add('load-complete');
      document.getElementById('checkLoader').classList.remove('checkmarkHidden');
      document.getElementById('checkLoader').classList.add('checkmark');
      
      setTimeout(function () {
        self.showCoverPopUp = false;
        self.coverSubmissionLoader = false;
        self.reportCoverValue = 0;
      }, 1000);
    }, 750);

  }


  decrementReportCover () {
    if(this.reportCoverValue == 0) return;
    this.reportCoverValue = this.reportCoverValue - 5;
  }

  incrementReportCover () {
    if(this.reportCoverValue >= 100) return;
    this.reportCoverValue = this.reportCoverValue + 5;
  }

}
