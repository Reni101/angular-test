import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LoginComponent } from 'src/app/login/login.component'
import { TodolistsListsComponent } from 'src/app/todolists-list/todolists-lists.component'
import { FormsModule } from '@angular/forms'
import { ChildrenComponent } from './todolists-list/children/children.component'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TodolistsListsComponent,
    ChildrenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

//ng generate component [name]
//ng g c [name] --skip-tests

//yarn global add @angular/cli
// ng new app_name
// ng add @angular-eslint/schematics
// yarn add prettier-eslint eslint-config-prettier eslint-plugin-prettier --save-dev

//https://dev.to/this-is-angular/configure-prettier-and-eslint-with-angular-526c
