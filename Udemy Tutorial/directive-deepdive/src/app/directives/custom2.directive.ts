import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustom2]'
})
export class Custom2Directive implements OnInit{

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  
  ngOnInit(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color','black')
    this.renderer.setStyle(this.elementRef.nativeElement, 'color','white')
  }

  @HostListener('mouseleave') method1(eventDate: Event){
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color','black')
    this.renderer.setStyle(this.elementRef.nativeElement, 'color','white')
  }
  @HostListener('mouseenter') method2(eventDate: Event){
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color','transparent')
    this.renderer.setStyle(this.elementRef.nativeElement, 'color','black')
  }

}
