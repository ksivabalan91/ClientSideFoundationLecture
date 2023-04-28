import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit{
  constructor(){
    console.log('Cockpit:        constructor called')
  }
  ngOnInit(): void {
    console.log('Cockpit:        ngOnInit called');
  }


  //! create properties to emit events
  @Output('serverCreatedAlias') serverCreated = new EventEmitter<{serverName:string, serverContent:string}>();
  @Output('blueprintCreatedAlias') blueprintCreated= new EventEmitter<{serverName:string, serverContent:string}>();

  newServerName = '';
  newServerContent = '';
  
  // todo You can access the ElementRef from the html
  @ViewChild('serverContentInput',{static:true}) serverContentInput!: ElementRef;

  //! for local reference example to get the HTMLInputElement
  onAddServer(nameInput: HTMLInputElement) {
    console.log(nameInput)
    console.log(nameInput.value)
    this.serverCreated.emit({
      serverName:nameInput.value, //* you can then use the value to do something
      serverContent: this.serverContentInput.nativeElement.value //* from native element using viewchild
    });
  }
  
  // todo for element reference example
  onAddBlueprint(nameInput: HTMLInputElement) {    
    console.log(this.serverContentInput)
    console.log(this.serverContentInput.nativeElement.value)
    this.blueprintCreated.emit({
      serverName:nameInput.value, //* you can then use the value to do something
      serverContent: this.serverContentInput.nativeElement.value //* from native element
    });    
  }

  // onAddServer() {
  //   console.log(nameinput)
  //   this.serverCreated.emit({
  //     serverName:this.newServerName,
  //     serverContent:this.newServerContent
  //   });
  // }
  // onAddBlueprint() {
  //   this.blueprintCreated.emit({
  //     serverName:this.newServerName,
  //     serverContent:this.newServerContent
  //   });    
  // }

}
