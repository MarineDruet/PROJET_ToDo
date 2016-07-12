import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { TodosDetailComponent } from './todos/todos.component';
import { AccountDetailComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: [ TodosDetailComponent, AccountDetailComponent, ROUTER_DIRECTIVES ],
  precompile: [TodosDetailComponent,AccountDetailComponent, HomeComponent]
})

export class AppComponent { }
