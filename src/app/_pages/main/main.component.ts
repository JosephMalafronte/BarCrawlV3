import { Component, OnInit, ViewChild, Input} from '@angular/core';
import {BarPageComponent} from '../../_components/bar-page/bar-page.component';
import {User} from '../../_models/User.Model';
import {BarlistComponent} from '../../_pages/barlist/barlist.component';
import {MainService} from '../../_services/main.service';
import { Router } from '@angular/router';
import {
  animate, state, style, transition, trigger
} from '@angular/animations';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    trigger('slideInLogin', [
      state('false', style({ transform: 'translateX(100%)' })),
      state('true', style({ transform: 'translateX(0%)' })),
      transition('* => *', animate(200))
    ])]
})
export class MainComponent implements OnInit {


  @Input() slideInLogin: boolean = false;

  constructor(private mainService: MainService, private router: Router) { }

  ngOnInit() {
    this.pageChangeInit();
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

}
