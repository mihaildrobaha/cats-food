import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { CardContainerComponent } from './components/card-container/card-container.component';
import { DeclinationPipe } from './pipes/declination.pipe';
import { PortionDeclinationPipe } from './pipes/portion-declination.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardContainerComponent,
    DeclinationPipe,
    PortionDeclinationPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
