import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterLink, Route, ROUTER_DIRECTIVES } from '@angular/router';
import { Project } from './project';
import { ProjectService } from './project.service';
import { Task } from '../task/task';
import { TaskService } from '../task/task.service';

@Component({
    selector: 'project',
    templateUrl: 'app/component/project/project.component.html',
    styleUrls: ['app/component/project/project.component.css'],
    providers: [ProjectService, TaskService],
    directives: [ROUTER_DIRECTIVES]
})

export class ProjectComponent implements OnInit {
    private _listProjects: Project[];
    private _projectService: ProjectService;
    private _idNewProject: number;
    private _listTasks : Task[];
    private _taskService : TaskService;

    constructor(projectService: ProjectService, taskService : TaskService) {
        this._projectService = projectService;
        this._taskService = taskService;
    }

    @Input()
    currentProject: Project;
    active = false; // manage form display
    currentTask : Task; // selected task


    // display existing projects with its list of tasks
    ngOnInit() {

        // get all existing projects
        let p1 = new Promise(() => {
            this._projectService.getProjects()
            .then(projects => {
                this._listProjects = projects;
                return this._listProjects;
            });
        });
        
        // get all existing tasks
        let p2 = new Promise(() =>{
            this._taskService.getTasks()
            .then(tasks => {
                this._listTasks = tasks;
                return this._listTasks;
            });
        });
        
        // display tasks in their project
        Promise.all([p1, p2]).then(() => {
                for(let project of this._listProjects){
                    for(let task of this._listTasks){
                        if (task.idList === project.id){
                            project.tasks.push(task);
                        }
                    }
                }
            }
        );
        
        
    }

    onSelectTask(task: Task){
        this.currentTask = task;
        console.log(this.currentTask);
    }

    // display a form to create a new project
    private addProject() {
        this._idNewProject = this._listProjects.length;
        this.active = true;
        this.currentProject = new Project(this._idNewProject, '');
    }

    // hide the form to create a new project
    private cancelProject() {
        this._idNewProject--;
        this.active = false;
    }

    // add the new project to the existing ones and close the form
    // if it already exists, update the project
    private submitProject() {
        let position = this._listProjects.indexOf(this.currentProject);
        if (position === (-1)) {
            this._listProjects.push(this.currentProject);
        } else {
            this._listProjects[position].title = this.currentProject.title;
        }

        setTimeout(() => this.active = false, 0);
    }

    // to delete a project
    private delProject(project: Project) {
        let verif = confirm("Êtes vous sur de vouloir supprimer cette liste (et les tâches qu'elle contient) ?");
        if (verif) {
            this.currentProject = project;
            for (let i = 0; i < this._listProjects.length; i++) {
                if (this._listProjects[i] === this.currentProject) {
                    this._listProjects.splice(i, 1);
                }
            }
        }
    }

    // to change the title of a project
    private modifyTitle(project: Project) {
        this.active = true;
        this.currentProject = project;
    }
    
    private addTask(project: Project){
        this.currentProject = project;
        
    }

}
