import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PluralsightComponent } from './pluralsight/pluralsight.component';

@NgModule({
  declarations: [
    AppComponent,
    PluralsightComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
