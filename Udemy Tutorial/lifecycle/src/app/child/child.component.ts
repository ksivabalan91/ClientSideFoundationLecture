import { AfterContentInit, Component, ContentChild, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnDestroy, OnChanges, DoCheck, AfterContentInit {

  @Input()
  childVar = 'input from child component';

  //! view child to acces contents in child HTML file
  @ViewChild('childContent', { static: true }) childContent: any;
  //! though technically 'projectedcontent' makes its way into child HTML eventually from the parent HTML template ref, 
  //! it can be accessed through ContentChild instead
  @ContentChild('projectedContent', { static: true }) projectedContent: any;

  counter = 0;
  interval: any;

  //* order of calls
  //! First
  constructor() {
    console.log("Child constructor")
  }

  //! Second
  ngOnChanges(changes: SimpleChanges): void {
    console.log("Child ngOnChanges")
    console.log("Child", changes)
    console.log("Child ngOnChanges ProjectedContent:" + this.projectedContent)
    console.log("Child ngOnChanges ChildContent:" + this.childContent)
  }

  //! Third
  ngOnInit(): void {
    console.log("Child ngOnInit")
    console.log("Child ngOnInit ProjectedContent:" + this.projectedContent)
    console.log("Child ngOnInit ChildContent:" + this.childContent)
    // this.interval = setInterval(()=>{
    //   this.counter += 1;
    //   console.log(this.counter);
    // },1000)
  }

  //! Fourth and On any changes
  ngDoCheck(): void {
    console.log("Child ngDoCheck")
    console.log("Child ngDoCheck ProjectedContent:" + this.projectedContent)
    console.log("Child ngDoCheck ChildContent:" + this.childContent)
  }
  //! Runs once first DoCheck if there is ng-content
  ngAfterContentInit(): void {
    console.log("Child ngAfterContentInit ProjectedContent:" + this.projectedContent)
    console.log("Child ngAfterContentInit ChildContent:" + this.childContent)
  }

  //! Last if destroyed
  ngOnDestroy(): void {
    clearInterval(this.interval)
    console.log("Child ngOnDestroy")
  }

}
