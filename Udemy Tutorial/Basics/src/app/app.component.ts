import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // template: {`html code here`}
  templateUrl: './app.component.html',
  // style: [list of styles here]
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Basics';
  fontColor = 'color: green'
}
