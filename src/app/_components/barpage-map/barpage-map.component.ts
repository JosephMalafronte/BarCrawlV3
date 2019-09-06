import { Component, OnInit } from '@angular/core';

import { AgmCoreModule } from '@agm/core';
import { MainService } from '../../_services/main.service';

@Component({
  selector: 'app-barpage-map',
  templateUrl: './barpage-map.component.html',
  styleUrls: ['./barpage-map.component.css']
})
export class BarpageMapComponent implements OnInit {

  lat = 0;
  lng = 0;

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.lat = this.mainService.barPageLat;
    this.lng = this.mainService.barPageLong;
  }

  mapsSelector() {
    if /* if we're on iOS, open in Apple Maps */
    ((navigator.platform.indexOf("iPhone") != -1) ||
    (navigator.platform.indexOf("iPad") != -1) ||
      (navigator.platform.indexOf("iPod") != -1))
      window.open("maps://maps.google.com/maps?daddr=<lat>,<long>&amp;ll=");
    else /* else use Google */
      window.open("https://maps.google.com/maps?daddr=<lat>,<long>&amp;ll=");
  }

}
