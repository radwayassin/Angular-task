import {AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBLXOtBrjkpo7wXhERKSPZIAOVibTu6c3Y",
      authDomain: "angular-task-a850c.firebaseapp.com",
      projectId: "angular-task-a850c",
      storageBucket: "angular-task-a850c.appspot.com",
      messagingSenderId: "747730731998",
      appId: "1:747730731998:web:1f7ff4eb117c129282134f",
      measurementId: "G-DYX0QVMB1D"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
