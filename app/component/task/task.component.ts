import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Task } from './task';
import { TaskService } from './task.service';

@Component({
    selector: 'task',
    templateUrl: 'app/component/task/task.component.html',
    providers: [TaskService]
})

export class TaskDisplayComponent implements OnInit{
    private _taskService: TaskService;
    currentTask : Task; // selected task
    
    constructor(taskService: TaskService){
        this._taskService = taskService;
    }
    
    @Input() 
    ngOnInit(){

    }
    
    onSelect(task: Task){
        this.currentTask = task;
    }
    
    private addTask(){
        this.currentTask = new Task(0,'',new Date(),new Date(),'','',null,null);
    }
    
    private delTask(){
        
    }
}