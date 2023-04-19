import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Friend } from './models';
import { FriendsComponent } from './components/friends/friends.component';
import { FriendsListComponent } from './components/friends-list/friends-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{

  @ViewChild(FriendsComponent)
  friendComp!: FriendsComponent

  @ViewChild(FriendsListComponent)
  friendsList!: FriendsListComponent

  ngOnInit(): void {
    console.info(">>> on init friendCOmp", this.friendComp)
  }
  ngAfterViewInit(): void {
    console.info(">>> after view init friendCOmp", this.friendComp)
    // this.friendsList.onSelectedFriend.subscribe()
    // this.selection(f)
  }
  title = 'day33-lecture';

  selectedFriend!: Friend
  updateMode = false

  friends: Friend[] = [{
    name:"fred",
    email:"Fred@gmail.com",
    phone: "123456"
  },
 {
    name:"bob",
    email:"bob@gmail.com",
    phone: "654321"
  }
]

  process(friend: Friend){
    let idx = this.friends.findIndex(f => f.name == friend.name)
    console.info(idx)
    if(idx==-1)
      this.friends.push(friend)
    else
      this.friends[idx]=friend
  }
  unFriend(){
    let idx = this.friends.findIndex(f => f.name == this.selectedFriend.name)
    console.info(idx)
    if(idx==-1)
      return
    this.friends.splice(idx,1)
    console.info(">>> deleting: ", this.friendComp.value)
    this.friendComp.clear()

  }

  selection(name: string){
    const fr = this.friends.find(f => f.name == name)
    console.info("Selected Friend: ",fr)
    // @ts-ignore
    // this.selectedFriend=fr
    //! using setter method
    this.friendComp.value = fr
    this.updateMode=true
  }

}
