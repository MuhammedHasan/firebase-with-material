import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {AngularFireModule} from 'angularfire2';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import {firebaseConfig} from '../firebase.config';

import { AppComponent } from './app.component';
import { UskTextboxComponent } from './usk-textbox/usk-textbox.component';
import { UskTextControlComponent } from './usk-text-control/usk-text-control.component';

@NgModule({
  declarations: [
    AppComponent,
    UskTextboxComponent,
    UskTextControlComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
