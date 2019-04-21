import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


//Import Components
import { MainComponent } from './main.component';
import { NavbarComponent } from '../../_components/navbar/navbar.component';
import {HeaderComponent} from '../../_components/header/header.component';
import {MainScrollComponent} from '../../_components/main-scroll/main-scroll.component';
import {BarPageComponent} from '../../_components/bar-page/bar-page.component';
import {FullLoadingComponent} from '../../_components/full-loading/full-loading.component';
import { AppRoutingModule } from '../../app-routing.module';
import { BarlistComponent} from '../../_pages/barlist/barlist.component';
import { SearchComponent} from '../../_pages/search/search.component';

@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent,
    HeaderComponent,
    MainScrollComponent,
    BarPageComponent,
    FullLoadingComponent,
    BarlistComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
    MainComponent
  ],
  providers: [],
  bootstrap: []
})
export class MainModule { }
  