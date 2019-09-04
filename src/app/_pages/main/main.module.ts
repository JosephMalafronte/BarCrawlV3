import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//Import Components
import { MainComponent } from './main.component';
import { NavbarComponent } from '../../_components/navbar/navbar.component';
import {HeaderComponent} from '../../_components/header/header.component';
import {MainScrollComponent} from '../../_components/main-scroll/main-scroll.component';
import {BarPageComponent} from '../../_components/bar-page/bar-page.component';
import { AppRoutingModule } from '../../app-routing.module';
import { BarlistComponent} from '../../_pages/barlist/barlist.component';
import { SearchComponent } from '../../_pages/search/search.component';
import { UserSlideComponent } from '../../_components/user-slide/user-slide.component';
import { BarpageDealsComponent } from '../../_components/barpage-deals/barpage-deals.component';
import { BarpageCoverComponent } from '../../_components/barpage-cover/barpage-cover.component';
import { BarpageFriendsComponent } from '../../_components/barpage-friends/barpage-friends.component';
import { BarpageMapComponent } from '../../_components/barpage-map/barpage-map.component';
import { PopupComponent } from '../../_components/popup/popup.component';
import { LikedBarsComponent } from '../../_pages/liked-bars/liked-bars.component';


//Import Modules
import {FullLoadingModule} from '../../_components/full-loading/full-loading.module';


@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent,
    HeaderComponent,
    MainScrollComponent,
    BarPageComponent,
    BarlistComponent,
    SearchComponent,
    LikedBarsComponent,
    UserSlideComponent,
    BarpageDealsComponent,
    BarpageCoverComponent,
    BarpageFriendsComponent,
    BarpageMapComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FullLoadingModule
  ],
  exports: [
    MainComponent
  ],
  providers: [],
  bootstrap: []
})
export class MainModule { }
