import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PIOCommonModule } from '@pull-it-off/pio-common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PIOCommonModule.forRoot(environment)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
