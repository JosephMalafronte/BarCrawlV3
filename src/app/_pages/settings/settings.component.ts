import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../_services/auth.service';
import {User} from '../../_models/User.Model';
import { AngularFireDatabase } from '@angular/fire/database';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  user: User;
  firstName: string;
  lastName: string;
  bugReport: string;
  featureRequest: string;

  isLoading: boolean = false;

  constructor(private authService: AuthService, private db: AngularFireDatabase) { }

  ngOnInit() {
    this.user = this.authService.currentUser;
    console.log(this.user);
    this.firstName = this.user.firstName;
    this.lastName = this.user.lastName;
  }

  focus(id: string){
    document.getElementById(id).focus();
    document.getElementById(id).addEventListener('keyup',function(e){
      if (e.which == 13) this.blur();
    });
  }


  saveChanges() {
    this.isLoading = true;

    var self = this;
    setTimeout(function () {
      self.stopLoadingAnimation();
    }, 5000);
  }

  submitBug() {
    this.isLoading = true;
    var test = this.db.database.ref('/testing/bugReports').push({
      userId: this.authService.currentUser.uid,
      fullName: this.authService.currentUser.firstName + ' ' + this.authService.currentUser.lastName,
      text: this.bugReport
    }).then(ref => {
      this.stopLoadingAnimation();
    });
  }

  submitFeatureRequest(){
    this.isLoading = true;
    var test = this.db.database.ref('/testing/featureRequest').push({
      userId: this.authService.currentUser.uid,
      fullName: this.authService.currentUser.firstName + ' ' + this.authService.currentUser.lastName,
      text: this.featureRequest
    }).then(ref => {
      this.stopLoadingAnimation();
    });
  }

  stopLoadingAnimation(){
    document.getElementById('circleLoader').classList.add('load-complete');
    document.getElementById('checkLoader').classList.remove('checkmarkHidden');
    document.getElementById('checkLoader').classList.add('checkmark');
    setTimeout(_ => {
      this.isLoading = false;
    }, 1000);
  }


}
