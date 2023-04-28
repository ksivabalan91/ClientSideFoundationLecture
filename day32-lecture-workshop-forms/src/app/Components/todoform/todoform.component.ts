import { Component, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from './models';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.css']
})

export class TodoformComponent implements OnInit{

  @Output()
  onSave = new Subject<Task>()

  @Input()
  inputTask!: Task

  form!: FormGroup
  toDoArray!: FormArray

  constructor(private fb:FormBuilder){
  }

  ngOnInit():void{
    console.info("passed in data:", this.inputTask)
    this.form = this.createForm()
  }
  saveTasks() {
    const taskOwner: Task = this.form.value
    console.info(">> name and due date: ", taskOwner)
    this.onSave.next(taskOwner)
  }
  addTask() {
    const task = this.createTask()
    this.toDoArray.push(task)
  }
  removeTask(idx:number){
    this.toDoArray.removeAt(idx)
  }
  hasError(cn:string):boolean{
    //! to ignore errors !!
    return !!(this.form.get(cn)?.invalid && this.form.get(cn)?.dirty)
  }

  isValid():boolean{
    console.info("",)
    // @ts-ignore
    return this.form.invalid || this.toDoArray.length<=0
  }

  private createForm(): FormGroup{
    this.toDoArray = this.fb.array([])

    return this.fb.group({
      name: this.fb.control<string>('',[Validators.required, Validators.minLength(1)]),
      dueDate: this.fb.control<string>('', [Validators.required]),
      tasks: this.toDoArray
    })
  }

  private createTask(): FormGroup{
    return this.fb.group({
      taskName: this.fb.control<string>('', [Validators.required,Validators.minLength(3)]),
      priority: this.fb.control<number>(1, [Validators.required, Validators.max(3),Validators.min(1)]),
    })
  }
}
