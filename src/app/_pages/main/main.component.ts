import { Component, OnInit, ViewChild, Input} from '@angular/core';
import {BarPageComponent} from '../../_components/bar-page/bar-page.component';
import {User} from '../../_models/User.Model';
import {BarlistComponent} from '../../_pages/barlist/barlist.component';
import {MainService} from '../../_services/main.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  @Input() slideInLogin: boolean = false;
  userSlide: boolean = false;

  constructor(private mainService: MainService, private router: Router) { }

  ngOnInit() {
    this.pageChangeInit();
    this.userSlideInit();

  }

  pageChangeInit(){
    this.mainService.currentPage.subscribe(result => {
      if(this.mainService.currentPageValue == -1) return;
      if(result == 0){
        this.router.navigate(['/main/barlist']);
      }
      else if(result == 1){
        this.router.navigate(['/main/search']);
      }
    });
  }

  userSlideInit(){
    this.mainService.userSlide.subscribe(result => {
      this.userSlide = result;
      let elm = document.getElementById("headerAndRouter");
      if(result == true){
        elm.classList.add("block_clicks");
        //elm.classList.add("out");
      }
      else{
        elm.classList.remove("block_clicks");
        //elm.classList.remove("out");
      }
    });
  }


  pageClick(){
    if(this.mainService.userSlideValue == true){
      this.mainService.changeUserSlide();
    }
  }

}
