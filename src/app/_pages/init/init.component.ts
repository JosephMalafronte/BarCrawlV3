import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../_services/auth.service';
import { Router } from '@angular/router';
import {User} from '../../_models/User.Model';
import { take } from 'rxjs/operators'

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.css']
})
export class InitComponent implements OnInit {


  constructor(private authService: AuthService , private router: Router) {

  }

  ngOnInit() {
 
     this.authService.af.authState.pipe(take(1)).subscribe(result =>{
       console.log(result);
       console.log('Init Running');
       if(result == null){
        this.router.navigate(['/login']);
       }
       else{
        this.authService.setUser(new User(result));
        //When user is set run this
        this.authService.authStateSet.subscribe(value => {
          if(value == true){
            console.log(result);
            this.router.navigate(['/main/barlist']);
          }
        });
       }
     });


  }

}
