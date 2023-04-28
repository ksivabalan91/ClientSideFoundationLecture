import { AfterContentInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, OnChanges, DoCheck, AfterContentInit {

  switched: boolean = true;
  parentVar = 'initial Input';

  //! First
  constructor(){
    console.log("Parent constructor")    
  }
  
  //! Second
  ngOnChanges(changes: SimpleChanges): void {
    console.log("Parent ngOnChanges")    
    console.log("Parent", changes)    
  }
  
  //! Third
  ngOnInit(): void {
    console.log("Parent ngOnInit")
  }
  
  //! Fourth and On any changes
  ngDoCheck(): void {
    console.log("Parent ngDoCheck")
  }
  //! Runs once first DoCheck if there is ng-content
  ngAfterContentInit(): void {
    console.log("Parent ngAfterContentInit")    
  }
  
  //! Last if destroyed
  toggle(){
    this.switched = !this.switched
  }



}
