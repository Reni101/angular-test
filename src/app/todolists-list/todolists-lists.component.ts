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

  todos: Todo[] = []

  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.getTodos()
  }

  getTodos() {
    this.http
      .get<Todo[]>('https://social-network.samuraijs.com/api/1.1/todo-lists', {
        withCredentials: true,
        headers: {
          'api-key': 'fab19197-098e-4362-876a-0c0797e21ac6',
        },
      })
      .subscribe(res => {
        this.todos = res
      })
  }

  emitHandler(value: string) {
    this.str = value
  }
}
