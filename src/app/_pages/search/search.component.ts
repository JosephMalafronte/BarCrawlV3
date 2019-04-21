import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  test:string = "Test";

  constructor() { }

  ngOnInit() {
  }

  testBtn(){
    this.test = "Taco";
  }

}
