import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {BarPage} from '../models';

@Injectable({
  providedIn: 'root'
})
export class BarPageService {


  currentBarPage: BehaviorSubject<BarPage>;


  constructor() {

    this.currentBarPage = new BehaviorSubject<BarPage>(null);
   }



   setBarPage(BarPage: BarPage){
     this.currentBarPage.next(BarPage);
   }




}
