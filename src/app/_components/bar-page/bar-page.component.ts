import { Component, OnInit } from '@angular/core';


import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bar-page',
  templateUrl: './bar-page.component.html',
  styleUrls: ['./bar-page.component.css',
  '../../_pages/main/main.component.css'
  ]
})
export class BarPageComponent implements OnInit {

  

  constructor() { }

  ngOnInit() {
  }


  getBarPage(){

  }

}
