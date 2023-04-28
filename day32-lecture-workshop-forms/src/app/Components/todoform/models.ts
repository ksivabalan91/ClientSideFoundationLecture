export interface Task
{
  name: string
  dueDate: string
  tasks: ToDo[]
}

export interface ToDo{
  taskName: string
  priority: number
}
