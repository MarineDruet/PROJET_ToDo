import { Injectable } from '@angular/core';
import { TASKS } from './task.mock';
import { Task } from './task';

@Injectable()
export class TaskService{
    constructor() { }
    
    public getTasks(){
        return TASKS;
    }
    
    public getTask(id : number) {
        return Promise.resolve(TASKS.filter(task => task.id === id));
    }
    
    public setTask(task : Task) : boolean {
        return false;
    }
    
    public addTask(task : Task) : boolean {
        return false;
    }
    
    public delTask(task : Task) : boolean {
        return false;
    }
}