import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../_services/auth.service';
import {User} from '../../_models/User.Model';
import { AngularFireDatabase } from '@angular/fire/database';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  user: User;
  firstName: string;
  lastName: string;
  userName: string;
  bugReport: string;
  featureRequest: string;
  barSuggestion: string;

  isLoading: boolean = false;

  //Switches
  trackLocation: boolean = false;

  constructor(private authService: AuthService, private db: AngularFireDatabase) { }

  ngOnInit() {
    this.user = this.authService.currentUser;
    console.log(this.user);
    this.firstName = this.user.firstName;
    this.lastName = this.user.lastName;

    //Shave off the @ sign
    if(this.user.userName[0] == '@') this.userName = this.user.userName.substr(1);
    else this.userName = this.user.userName;

    //Set checkmarks (find better way to do this in future)
    if(this.authService.currentUser.locationTracking) {
      const ele = document.getElementById("trackLocationCheckbox") as HTMLInputElement;
      ele.checked = true;
      this.trackLocation = true;
    }
  }

  focus(id: string){
    document.getElementById(id).focus();
    document.getElementById(id).addEventListener('keyup',function(e){
      if (e.which == 13) this.blur();
    });
  }

  saveChanges() {
    this.isLoading = true;

    this.db.object('/userInfo/' + this.user.uid).valueChanges().pipe(take(1)).subscribe((userObject: any) => {
      userObject.about.firstName = this.firstName;
      this.authService.currentUser.firstName = this.firstName;
      userObject.about.lastName = this.lastName;
      this.authService.currentUser.lastName = this.lastName;

      if(this.userName[0] != '@') this.userName = "@" + this.userName;
      userObject.about.userName = this.userName;
      this.authService.currentUser.userName = this.userName;


      userObject.settings.locationTracking = this.trackLocation;
      this.authService.currentUser.locationTracking = this.trackLocation;

      console.log(userObject);

      this.db.object('/userInfo/' + this.user.uid).set(userObject).then(_ => {
        this.stopLoadingAnimation(); 
      });
    });

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

  submitBarSuggestion(){
    this.isLoading = true;
    var test = this.db.database.ref('/testing/barSuggestion').push({
      userId: this.authService.currentUser.uid,
      fullName: this.authService.currentUser.firstName + ' ' + this.authService.currentUser.lastName,
      text: this.barSuggestion
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

  duplicateStop: boolean = false;
  locationTrackingSwitch(){
    if(this.duplicateStop == true) {
      this.duplicateStop = false;
      return;
    }
    else this.duplicateStop = true;
    this.trackLocation = !this.trackLocation;
    console.log(this.trackLocation);
    document.getElementById("trackLocationCheckbox").click();
  }


}
