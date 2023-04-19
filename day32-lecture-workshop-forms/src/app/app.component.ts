import { Component, OnInit } from '@angular/core';
import { Task } from './Components/todoform/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'day32-lecture-workshop-forms';
  userTasks: Task[]=[]

  ngOnInit():void{
    const d = localStorage.getItem('todo')
    if(!d){
      return
    }
      // @ts-ignore
    const t: Task = JSON.parse(d)
    console.info('>>>t: ',t)
    }


  save(task: Task){
    localStorage.setItem("todo",JSON.stringify(task))
    this.userTasks.unshift(task)
  }

}
