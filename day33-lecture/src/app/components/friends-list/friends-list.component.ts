import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Friend } from 'src/app/models';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent {
  @Input()
  friendsList: Friend[] = []

  @Output()
  onSelectedFriend = new Subject<string>()

  selection(name:string){
    this.onSelectedFriend.next(name)
  }

}
