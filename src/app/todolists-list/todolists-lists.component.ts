import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'

interface renderNg {
  name: string
  age: number
}

interface Todo {
  addedDate: string
  id: string
  order: number
  title: string
}

export interface Response {
  data: {
    item: Todo
  }
  messages: string[]
  fieldsErrors: string[]
  resultCode: number
}

@Component({
  selector: 'todo-todolists-list',
  templateUrl: 'todolists-list.component.html',
  styleUrls: ['todolists-list.component.scss'],
})
export class TodolistsListsComponent implements OnInit {
  children = 'children works'
  str = ''

  renderNg: renderNg[] = [
    { name: 'Max', age: 28 },
    { name: 'Vasia', age: 25 },
  ]
  httpOptions = {
    withCredentials: true,
    headers: {
      'api-key': 'fab19197-098e-4362-876a-0c0797e21ac6',
    },
  }
  todos: Todo[] = []

  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.getTodos()
  }

  getTodos() {
    this.http
      .get<Todo[]>(
        'https://social-network.samuraijs.com/api/1.1/todo-lists',
        this.httpOptions
      )
      .subscribe(res => {
        this.todos = res
      })
  }

  createTodo() {
    this.http
      .post<Response>(
        'https://social-network.samuraijs.com/api/1.1/todo-lists',
        {
          title: 'angular Todo',
        },
        this.httpOptions
      )
      .subscribe(res => {
        this.todos.unshift(res.data.item)
      })
  }

  emitHandler(value: string) {
    this.str = value
  }

  deleteTodo(todolistId: string) {
    this.http
      .delete(
        `https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`,
        this.httpOptions
      )
      .subscribe(res => {
        this.todos = this.todos.filter(tl => tl.id !== todolistId)
      })
  }
}
