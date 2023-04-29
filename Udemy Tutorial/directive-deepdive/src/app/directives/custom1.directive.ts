//! @HostBinding is used to bind a class property to a DOM property of the host element
//! @HostListener is used to listen to events on the host element and call a method in response.

import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustom1]'
})
export class Custom1Directive implements OnInit{

  @Input() defaultColor:string = 'transparent'
  @Input() fontColor:string = 'black'
  @Input() changedDefault:string = 'maroon'
  @Input() changedFont:string = 'white'
  
  //! gotta use camelCase to access the property
  @HostBinding('style.backgroundColor') backgroundColor!:string;
  @HostBinding('style.Color') color!:string;

  constructor() { }
  
  //! can set styles here as well
  ngOnInit(): void {
    this.backgroundColor=this.defaultColor
    this.color = this.fontColor

  }
  //! this method can be triggered when some event is triggered, in this case, the 'mouseEnter' event on the element this directive sits on
  //todo event data can be anything you pass in, can be string/number etc
  @HostListener('mouseleave') method1(eventDate: Event){
    this.backgroundColor = this.defaultColor;
    this.color =this.fontColor;
  }
  @HostListener('mouseenter') method2(eventDate: Event){
    this.backgroundColor = this.changedDefault;
    this.color =this.changedFont;
  }
  
}
