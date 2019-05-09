import { Component, OnInit } from '@angular/core';
import {MainService} from '../../_services/main.service';
import {AuthService} from '../../_services/auth.service';


@Component({
  selector: 'app-user-slide',
  templateUrl: './user-slide.component.html',
  styleUrls: ['./user-slide.component.css']
})
export class UserSlideComponent implements OnInit {

  slideInLogin: boolean = true;


  //AuthService used in html
  constructor(private mainService: MainService, private authService: AuthService) {

  }

  ngOnInit() {
    this.userSlideInit();
  }

  userSlideInit(){
    this.mainService.userSlide.subscribe(result => {
      //this.slideInLogin = result;
       if(result == true){
        document.getElementById("userSlide").classList.add("in");
       }
       else {
        document.getElementById("userSlide").classList.remove("in");
       }
    });
  }

}
