import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ProjectComponent } from '../project/project.component';
import { ProjectService } from '../project/project.service';


@Component({
    selector: 'todos',
    templateUrl: 'app/todos/todos.component.html',
    directives : [ ProjectComponent ],
    providers: [ ProjectService ]
})

export class TodosDetailComponent{

}