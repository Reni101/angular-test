import { Component } from '@angular/core'

interface renderNg {
  name: string
  age: number
}

@Component({
  selector: 'todo-todolists-list',
  templateUrl: 'todolists-list.component.html',
  styleUrls: ['todolists-list.component.scss'],
})
export class TodolistsListsComponent {
  children = 'children works'
  str = ''

  renderNg: renderNg[] = [
    { name: 'Max', age: 28 },
    { name: 'Vasia', age: 25 },
  ]

  emitHandler(value: string) {
    this.str = value
  }
}
