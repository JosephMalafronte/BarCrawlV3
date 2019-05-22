import { Component, OnInit } from '@angular/core';
import {MainService} from '../../_services/main.service';
import {AuthService} from '../../_services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-slide',
  templateUrl: './user-slide.component.html',
  styleUrls: ['./user-slide.component.css']
})
export class UserSlideComponent implements OnInit {

  slideInLogin: boolean = true;


  //AuthService used in html
  constructor(private mainService: MainService, private authService: AuthService, private router: Router) {

  }

  ngOnInit() {
    //this.userSlideInit();
  }

  ngAfterViewInit(){
    document.getElementById("userSlide").classList.add("hidden");
    document.getElementById("userSlide").classList.add("out");
    this.userSlideInit();
  }

  userSlideInit(){
    this.mainService.userSlide.subscribe(result => {
      var self = this;
      this.slideInLogin = result;
       if(result == true){
        document.getElementById("userSlide").classList.remove("hidden");
        setTimeout(function() {document.getElementById("userSlide").classList.add("in")}, 50);
      }
       else {
        var dom = document.getElementById("userSlide");
        dom.classList.remove("in");
        dom.addEventListener("transitionend", function () {
          if(self.slideInLogin == false){
            dom.classList.add("hidden");
          }
        });
       }
    });
  }


  logout(){
    this.authService.logOut();
    this.mainService.changeUserSlide();
    this.router.navigateByUrl('/init');
  }

}
