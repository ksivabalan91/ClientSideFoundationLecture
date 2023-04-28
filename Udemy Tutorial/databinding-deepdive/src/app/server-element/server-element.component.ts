import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit{
  //! can use an Alias as the identifier in the html
  @Input('srvElement')
  element!: {type:string,name:string,content:string}
  
  constructor(){
    console.log('Server-Element: constructor called')
  }
  ngOnInit(): void {
    console.log('Server-Element: ngOnInit called');

}