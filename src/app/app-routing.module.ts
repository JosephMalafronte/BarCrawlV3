import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './_pages/main/main.component';
import { LoginComponent } from './_pages/login/login.component';
import { InitComponent } from './_pages/init/init.component';
import { BarlistComponent } from './_pages/barlist/barlist.component';
import { SearchComponent } from './_pages/search/search.component';

const routes: Routes = [
  { path: 'main', component: MainComponent , 
    children: [
      {
        path:'barlist', 
        component: BarlistComponent
      },
      {
        path:'search',
        component: SearchComponent
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
  { path: 'login', component: LoginComponent },
  { path: '**', component: InitComponent },
  {path: '404', component: InitComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
