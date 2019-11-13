import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  firstName: string;

  constructor() { }

  ngOnInit() {
  }

  focus(id: string){
    document.getElementById(id).focus();
    document.getElementById(id).addEventListener('keyup',function(e){
      if (e.which == 13) this.blur();
    });
  }


}
