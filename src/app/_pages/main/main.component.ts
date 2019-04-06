import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  barSlide: boolean = false;
  showBarPage: boolean = false;
  barPageId: number

  constructor() { }

  ngOnInit() {
  }

  activateBarSlide(barId: number){
    console.log(barId);
    this.barSlide = true;
    this.showBarPage = true; //move later
  }

}
