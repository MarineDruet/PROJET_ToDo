import { Injectable } from '@angular/core';
import { PROJECTS } from './project.mock';
import { Project } from './project';
import { Task } from '../task/task';
import { TASKS } from '../task/task.mock';

@Injectable()
export class ProjectService {
    constructor() { }

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
}