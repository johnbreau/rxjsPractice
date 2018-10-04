import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PluralsightComponent } from './pluralsight/pluralsight.component';
import { RxjsinactionComponent } from './rxjsinaction/rxjsinaction.component';
import { RandomPracticeComponent } from './random-practice/random-practice.component';

@NgModule({
  declarations: [
    AppComponent,
    PluralsightComponent,
    RxjsinactionComponent,
    RandomPracticeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
