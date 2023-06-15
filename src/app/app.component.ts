import { Component, OnInit } from '@angular/core'
import { ValueService } from 'src/app/services/value.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'todo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  value$ = new Observable()

  constructor(private valueService: ValueService) {
    setTimeout(() => {
      this.isLoading = false
    }, 1000)
    setTimeout(() => {
      this.isGreen = false
    }, 3000)
  }
  ngOnInit() {
    // this.valueService.value$.subscribe(value => {
    //   this.value = value
    // })
    this.value$ = this.valueService.value$
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
