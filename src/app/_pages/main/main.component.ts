import { Component, OnInit, ViewChild, Input} from '@angular/core';
import {BarPageComponent} from '../../_components/bar-page/bar-page.component';
import {User} from '../../_models/User.Model';
import {BarlistComponent} from '../../_pages/barlist/barlist.component';
import {MainService} from '../../_services/main.service';
import {AuthService} from '../../_services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  @Input() slideInLogin: boolean = false;
  userSlide: boolean = false;
  showCoverPopUp: boolean = false;

  constructor(private mainService: MainService, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    if(this.authService.afAuth.auth==null) this.router.navigate(['/login']);

    this.pageChangeInit();
    this.noScrollInit();
    this.popUpInit();

  }

  pageChangeInit(){
    this.mainService.currentPage.subscribe(result => {
      if(this.mainService.currentPageValue == -1) return;
      if(result == 0){
        console.log(this.mainService.barlistUrl);

        this.router.navigate([this.mainService.barlistUrl]);
      }
      else if(result == 1){
        this.router.navigate([this.mainService.searchUrl]);
      }
    });
  }

  noScrollInit(){
    var self = this;

    var fixed = document.getElementById('mainPage');
    function blockScrolling(e) {
      if(self.userSlide == false || self.showCoverPopUp == false) return; 
      e.preventDefault();
    }

    fixed.addEventListener('touchmove', blockScrolling, false);

    let elm = document.getElementById("headerAndRouter");
    this.mainService.userSlide.subscribe(result => {
      this.userSlide = result;
      if(result == true){
        elm.classList.add("block_clicks");
      }
      else{
        elm.classList.remove("block_clicks");

      }
    });
  }

  popUpInit(){
    this.mainService.showCoverPopUp.subscribe(result => {
        this.showCoverPopUp = result;
    });
  }


  pageClick(){
    if(this.mainService.userSlideValue == true){
      this.mainService.changeUserSlide();
    }
  }

}
