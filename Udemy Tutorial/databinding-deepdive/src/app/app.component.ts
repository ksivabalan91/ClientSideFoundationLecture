import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // //! runs ONCE, once the component are initiallized
  // ngOnInit(): void {}
  // //! runs everytime, an INPUT property is CHANGED
  // ngOnChanges(changes: SimpleChanges): void {}
  // //! runs everytime, on ANY EVENT even button clicks
  // ngDoCheck(): void {}
  // //! call after content (ng-content) has been projected into view
  // ngAfterContentInit(): void {}
  // //! called everytime after the projected conent has been checked
  // ngAfterContentChecked(): void {}
  // //! called after our own components's view (and child views) has been initialized
  // ngAfterViewInit(): void {}
  // //! called after our own components's view (and child views) has been check
  // ngAfterViewChecked(): void {}
  // //! Called once the component is about to be destroyed
  // ngOnDestroy(): void {}

  constructor(){
    console.log('App:            constructor called')
  }
  ngOnInit(): void {
    console.log('App:            ngOnInit called');
  }

  serverElements = [{type:'server',name:'TestServer',content:'just a test'}]

  onServerAdded(serverData:{serverName:string, serverContent:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData:{serverName:string, serverContent:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }


}
