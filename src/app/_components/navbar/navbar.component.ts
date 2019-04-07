import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() samePageClick = new EventEmitter();
  @Input() samePageIndex: number;

  constructor() { }

  ngOnInit() {
  }

  icon0Click(){
    if(this.samePageIndex == 0){
      this.samePageClick.emit();
    }
  }

}
