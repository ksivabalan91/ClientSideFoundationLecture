import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  
  @Output() selectPage = new EventEmitter<string>();
  
  constructor(){}
  
  ngOnInit(): void {
  }

  onSelect(page: string){
    console.log(page);
    this.selectPage.emit(page);
  }

}
