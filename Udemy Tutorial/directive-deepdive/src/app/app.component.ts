import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directive-deepdive';

  isSwitch:boolean = true;
  isCustomSwitch:boolean = true;

  switch(){
    this.isSwitch = !this.isSwitch;
  }
  
  switchCustom(){
    this.isCustomSwitch = !this.isCustomSwitch;
  }
}
