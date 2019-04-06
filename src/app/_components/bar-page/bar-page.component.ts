import { Component, OnInit, Input } from '@angular/core';


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

  @Input() barPageId: number;

  constructor() { }

  ngOnInit() {
  }


  getBarPage(){
    
  }

}
