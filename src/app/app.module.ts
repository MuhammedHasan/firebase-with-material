import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {AngularFireModule} from 'angularfire2';
import { MaterialModule } from '@angular/material';
import { QuillEditorModule } from 'ng2-quill-editor';
import 'hammerjs';

import {firebaseConfig} from '../firebase.config';

import { AppComponent } from './app.component';

import {
  UskTextboxComponent,
  UskEditableTextComponent,
  UskRichTextboxComponent,
  UskEditableRichTextComponent
} from './components';


import {UskDbService} from './services';

@NgModule({
  declarations: [
    AppComponent,
    UskTextboxComponent,
    UskEditableTextComponent,
    UskRichTextboxComponent,
    UskEditableRichTextComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    QuillEditorModule,
    AngularFireModule.initializeApp(firebaseConfig),
    MaterialModule.forRoot()
  ],
  entryComponents: [
    UskTextboxComponent,
    UskRichTextboxComponent,
    
  ],
  providers: [
    UskDbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
