import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './_pages/main/main.component';
import { LoginComponent } from './_pages/login/login.component';
import { InitComponent } from './_pages/init/init.component';
import { BarlistComponent } from './_pages/barlist/barlist.component';
import { SearchComponent } from './_pages/search/search.component';
import {BarpageDealsComponent} from './_components/barpage-deals/barpage-deals.component';
import {BarpageCoverComponent} from './_components/barpage-cover/barpage-cover.component';
import {BarpageFriendsComponent} from './_components/barpage-friends/barpage-friends.component';
import {BarpageMapComponent} from './_components/barpage-map/barpage-map.component';
import { RefreshComponent } from './_components/refresh/refresh.component';
import { FriendPageComponent } from './_pages/friend-page/friend-page.component';
import {AllFriendsComponent} from './_pages/all-friends/all-friends.component';
import {LikedBarsComponent} from './_pages/liked-bars/liked-bars.component';
import {SettingsComponent} from './_pages/settings/settings.component';


const routes: Routes = [
  { path: 'main', component: MainComponent , 
    children: [
      {
        path:'barlist', 
        component: BarlistComponent,
        children: [
          { path: '', redirectTo: 'deals', pathMatch: 'full' },
          { path: 'deals', component: BarpageDealsComponent },
          { path: 'cover', component: BarpageCoverComponent },
          { path: 'friends', component: BarpageFriendsComponent },
          { path: 'map', component: BarpageMapComponent }
        ]
      },
      {
        path:'search',
        component: SearchComponent,
        children: [
          { path: '', redirectTo: 'deals', pathMatch: 'full' },
          { path: 'deals', component: BarpageDealsComponent },
          { path: 'cover', component: BarpageCoverComponent }
        ]
      },
      {
        path:'all-friends',
        component: AllFriendsComponent
      },
      {
        path:'liked-bars',
        component: LikedBarsComponent
      },
      {
        path:'settings',
        component: SettingsComponent
      },
      {
        path:'friend-page',
        component: FriendPageComponent
      },
      {
        path:'404',
        component: BarlistComponent
      },
      {
        path:'**',
        component: BarlistComponent
      }
    ]
  },
  { path: 'refresh', component: RefreshComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: InitComponent },
  {path: '404', component: InitComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
