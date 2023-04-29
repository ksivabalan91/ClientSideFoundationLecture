import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Custom1Directive } from './attribute-directives/custom1.directive';
import { Custom2Directive } from './attribute-directives/custom2.directive';
import { UnlessDirective } from './attribute-directives/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    Custom1Directive,
    Custom2Directive,
    UnlessDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
