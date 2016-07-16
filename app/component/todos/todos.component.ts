import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ProjectComponent } from '../project/project.component';
import { ProjectService } from '../project/project.service';


@Component({
    selector: 'todos',
    templateUrl: 'app/component/todos/todos.component.html',
    styleUrls: ['app/component/todos/todos.component.css'],
    directives : [ ProjectComponent ],
    providers: [ ProjectService ]
})

export class TodosDetailComponent{

}