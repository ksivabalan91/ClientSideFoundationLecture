import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Custom1Directive } from './directives/custom1.directive';
import { Custom2Directive } from './directives/custom2.directive';

@NgModule({
  declarations: [
    AppComponent,
    Custom1Directive,
    Custom2Directive
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
