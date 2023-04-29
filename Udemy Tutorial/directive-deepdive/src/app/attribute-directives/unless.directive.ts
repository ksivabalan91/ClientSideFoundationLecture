import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  //! turns into a method which get executed whenever the property changes
  @Input() set appUnless(condition: boolean){
    if(!condition){
      this.vcRef.createEmbeddedView(this.templateRef);
    }else{
      this.vcRef.clear();
    }
  } 

  //! need to indicate at which template u need to render this, hence you inject the following template(what) and viewcontainer(where)
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {
  }

}
