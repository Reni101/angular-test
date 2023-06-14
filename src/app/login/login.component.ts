import { Component } from '@angular/core'

interface IUser {
  name: string
  age: number
}

@Component({
  selector: 'todo-login',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.scss'],
})
export class LoginComponent {
  textInput = 'asd'
  textNG = '123'
  user: IUser = { name: 'Maxim', age: 27 }
  isLoading = true

  constructor() {
    setTimeout(() => {
      this.isLoading = false
    }, 2000)
  }

  changeNameHandler() {
    this.user.name = 'Vasia'
  }

  changeTextHandler(event: Event) {
    this.textInput = (event.currentTarget as HTMLInputElement).value
  }

  deletText() {
    this.textNG = ''
  }
}
