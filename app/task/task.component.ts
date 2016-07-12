import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Task } from './task';
import { TaskService } from './task.service';

@Component({
    selector: 'task',
    templateUrl: 'app/task/task.component.html',
    providers: [TaskService]
})

export class TaskDisplayComponent implements OnInit{
    private _listTasks: Task[];
    private _taskService: TaskService;
    currentTask : Task; // selected task
    
    constructor(taskService: TaskService){
        this._taskService = taskService;
    }
    
    @Input() 
    ngOnInit(){
        // display existing tasks
        this._listTasks = this._taskService.getTasks();
    }
    
    onSelect(task: Task){
        this.currentTask = task;
    }
    
    private addTask(){
        this.currentTask = new Task(0,'',new Date(),new Date(),'','',null);
    }
    
    private delTask(){
        
    }
}