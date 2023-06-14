import { Component, OnInit } from '@angular/core'
import { ValueService } from 'src/app/services/value.service'

@Component({
  selector: 'todo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  value = 0
  constructor(private valueService: ValueService) {
    setTimeout(() => {
      this.isLoading = false
    }, 1000)
    setTimeout(() => {
      this.isGreen = false
    }, 3000)
  }
  ngOnInit() {
    this.valueService.value$.subscribe(value => {
      this.value = value
    })
  }

  isGreen = true
  isLoading = true
  title = 'todolist-angular'

  incValue() {
    this.valueService.inc()
  }

  decValue() {
    this.valueService.dec()
  }
}
