import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';


//Import Components
import {LoginComponent} from './login.component';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    LoginComponent
  ],
  providers: [],
  bootstrap: []
})
export class LoginModule { }
  