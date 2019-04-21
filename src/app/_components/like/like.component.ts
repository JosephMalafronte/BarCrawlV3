import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  click(event){
    event.target.classList.add('is_animating');
  }
  
  transitionend(event){
    console.log('over');
    event.target.classList.remove('is_animating');
  }

}
