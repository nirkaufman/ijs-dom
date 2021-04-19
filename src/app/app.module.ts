import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardDeckDirective } from './card-deck.directive';


@NgModule({
  declarations: [AppComponent, CardDeckDirective],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
