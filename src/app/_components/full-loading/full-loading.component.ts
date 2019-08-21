import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-full-loading',
  templateUrl: './full-loading.component.html',
  styleUrls: [
    './full-loading.component.css',
    '../../_pages/main/main.component.css'
  ]
})
export class FullLoadingComponent implements OnInit {

  @Input() loadingType: number;

  constructor() { }

  ngOnInit() {
  }

}
