import { NgModule } from '@angular/core';
import {InitComponent} from './init.component';
import {FullLoadingModule} from '../../_components/full-loading/full-loading.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  



//Import Components

@NgModule({
  declarations: [
    InitComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FullLoadingModule,
  ],
  exports: [
    InitComponent
  ],
  providers: [],
  bootstrap: []
})
export class InitModule { }
  