import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


//Import Components
import {LoginComponent} from './login.component';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    LoginComponent
  ],
  providers: [],
  bootstrap: []
})
export class LoginModule { }
  