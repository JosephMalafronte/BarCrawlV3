import { Component, OnInit } from '@angular/core';
import {MainService} from '../../_services/main.service';


@Component({
  selector: 'app-user-slide',
  templateUrl: './user-slide.component.html',
  styleUrls: ['./user-slide.component.css']
})
export class UserSlideComponent implements OnInit {

  slideInLogin: boolean = false;

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.userSlideInit();
  }

  userSlideInit(){
    this.mainService.userSlide.subscribe(result => {
       if(result == true){
        document.getElementById("userSlide").classList.add("in");
       }
       else {
        document.getElementById("userSlide").classList.remove("in");
       }
    });
  }

}
