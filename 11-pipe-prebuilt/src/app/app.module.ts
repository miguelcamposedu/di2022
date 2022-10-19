import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SamplePipeComponent } from './components/sample-pipe/sample-pipe.component';
import { PokemonImagePipe } from './pipes/pokemon-image.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SamplePipeComponent,
    PokemonImagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
