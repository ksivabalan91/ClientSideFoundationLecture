import { Directive, ElementRef, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective{
  
  @HostBinding('class.open') isOpen = false;

  // @HostListener('click') toggleDrop(){
  //   this.isOpen = !this.isOpen;
  // }

  @HostListener('document:click', ['$event']) toggleOpen(event:Event){ 
    console.log(event.target)
    console.log(this.elementRef.nativeElement)
    this.isOpen = this.elementRef.nativeElement.contains(event.target)?!this.isOpen:false;    
  }  
  
  constructor(private elementRef: ElementRef) {}

}
