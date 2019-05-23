import { Component, OnInit } from '@angular/core';
import {MainService} from '../../_services/main.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [
    './header.component.css',
    '../../_pages/main/main.component.css'
]
})
export class HeaderComponent implements OnInit {

  constructor(private mainService: MainService) { }

  ngOnInit() {
  }

  userClick(){
    this.mainService.changeUserSlide();
  }

  refresh(){
    this.mainService.refresh();
  }

}
