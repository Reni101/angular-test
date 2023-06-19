import { Component, OnInit } from '@angular/core'
import { Response, Todo, TodosService } from 'src/app/services/todos.service'
import { HttpErrorResponse } from '@angular/common/http'

@Component({
  selector: 'todo-todolists-list',
  templateUrl: 'todolists-list.component.html',
  styleUrls: ['todolists-list.component.scss'],
})
export class TodolistsListsComponent implements OnInit {
  children = 'children works'
  str = ''

  todos: Todo[] = []

  constructor(private todoService: TodosService) {}

  emitHandler(value: string) {
    this.str = value
  }

  ngOnInit() {
    this.getTodos()
  }

  getTodos() {
    this.todoService.getTodos().subscribe({
      next: res => {
        this.todos = res
      },
      error: (e: HttpErrorResponse) => {
        this.str = e.message
      },
    })
  }

  createTodo() {
    this.todoService.createTodo().subscribe((res: Response) => {
      this.todos.unshift(res.data.item)
    })
  }

  deleteTodo(event: any, todolistId: string) {
    this.todoService.deleteTodo(todolistId).subscribe(res => {
      this.todos = this.todos.filter(tl => tl.id !== todolistId)
    })
  }
}
