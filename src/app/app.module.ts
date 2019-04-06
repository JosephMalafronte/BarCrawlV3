import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import {AngularFireModule} from  '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';


import { environment } from '../environments/environment';


import { MainModule} from './_pages/main/main.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    AngularFireDatabaseModule,
    AppRoutingModule,
    MainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
