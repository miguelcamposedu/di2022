import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialImportsModule } from './modules/material-imports.module';
import { LightDartPageComponent } from './light-dart-page/light-dart-page.component';
import { Table1Component } from './table1/table1.component';

@NgModule({
  declarations: [
    AppComponent,
    LightDartPageComponent,
    Table1Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialImportsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
