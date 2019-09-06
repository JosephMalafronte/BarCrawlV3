import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import {AngularFireModule} from  '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { environment } from '../environments/environment';

import {InitModule} from './_pages/init/init.module';
import { MainModule} from './_pages/main/main.module';
import { LoginModule} from './_pages/login/login.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';


import {DateDirective} from './_directives/date.directive';
import { RouteReuseStrategy } from '@angular/router';
import { CustomReuseStrategy } from './custom-reuse-strategy';
import { RefreshComponent } from './_components/refresh/refresh.component';
import { FriendPageComponent } from './_pages/friend-page/friend-page.component';
import { AllFriendsComponent } from './_pages/all-friends/all-friends.component';
import { SettingsComponent } from './_pages/settings/settings.component';



@NgModule({
  declarations: [
    AppComponent,
    RefreshComponent,
    FriendPageComponent,
    AllFriendsComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    InitModule,
    MainModule,
    LoginModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: RouteReuseStrategy,useClass:CustomReuseStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
