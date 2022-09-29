import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PruebaComponent } from './prueba/prueba.component';
import { FormComponent } from './form/form.component';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgclassDirectivaComponent } from './ngclass-directiva/ngclass-directiva.component';
import { NgclassMultipleComponent } from './ngclass-multiple/ngclass-multiple.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    FormComponent,
    NgclassDirectivaComponent,
    NgclassMultipleComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
