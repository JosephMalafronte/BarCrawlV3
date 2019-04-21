import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../_services/auth.service';
import { Router } from '@angular/router';
import {User} from '../../_models/User.Model';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.css']
})
export class InitComponent implements OnInit {


  constructor(private authService: AuthService , private router: Router) {

  }

  ngOnInit() {
    this.authService.af.authState.subscribe((auth) => {
      if(auth == null){
        this.router.navigate(['/login']);
      }
      else{
        this.authService.setUser(new User(auth));
        console.log(this.authService.currentUser.uid);
        this.router.navigate(['/main/barlist']);
      }
      
      // auth.updateProfile({
      //   displayName: 'Joseph'
      // })
    });
    
  }

}
