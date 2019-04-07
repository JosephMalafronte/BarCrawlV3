import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


//Import Components
import { MainComponent } from './main.component';
import { NavbarComponent } from '../../_components/navbar/navbar.component';
import {HeaderComponent} from '../../_components/header/header.component';
import {MainScrollComponent} from '../../_components/main-scroll/main-scroll.component';
import {BarPageComponent} from '../../_components/bar-page/bar-page.component';



@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent,
    HeaderComponent,
    MainScrollComponent,
    BarPageComponent
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    MainComponent
  ],
  providers: [],
  bootstrap: []
})
export class MainModule { }
  