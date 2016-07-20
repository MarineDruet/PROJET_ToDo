import { Injectable } from '@angular/core';
import { PROJECTS } from './project.mock';
import { Project } from './project';
import { Task } from './task';
import { TASKS } from './task.mock';

@Injectable()

export class TodosService {
    constructor() { }

    // PROJECT SERVICES
    public getProjects(){
        return Promise.resolve(PROJECTS);
    }
    
    public getProject(id:number){
        return Promise.resolve(PROJECTS.filter(project => project.id === id));
    }
    
    public setProject(project : Project) : boolean {
        return false;
    }
    
    public addProject(project : Project) : boolean {
        return false;
    }
    
    public delProject(project : Project) : boolean {
        return false;
    }
    
    // TASK SERVICES
    public getTasks(){
        return Promise.resolve(TASKS);
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