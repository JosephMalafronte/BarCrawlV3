import { Component, OnInit } from '@angular/core';
import { MainService} from '../../_services/main.service';

@Component({
  selector: 'app-barlist',
  templateUrl: './barlist.component.html',
  styleUrls: ['./barlist.component.css']
})
export class BarlistComponent implements OnInit {

  barSlide: boolean = false;
  showBarPage: boolean = false;
  barPageId: number = 0;

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.reverseBarSlideInit();
}

  activateBarSlide(barId: number){
    this.barSlide = true;
    this.showBarPage = true; //move later
    this.barPageId = barId;
    
  }


  reverseBarSlideInit(){
    //Function calls on same page click
    this.mainService.barSlide.subscribe(_ => {
      if(this.barSlide) this.barSlide = false;
    });
  }

  

}
