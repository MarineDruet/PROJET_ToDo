import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Project } from './project';
import { ProjectService } from './project.service';

@Component({
    selector: 'project',
    templateUrl: 'app/component/project/project.component.html',
    providers: [ProjectService]
})

export class ProjectComponent implements OnInit {
    private _listProjects: Project[];
    private _projectService: ProjectService;
    private _idNewProject: number;

    constructor(projectService: ProjectService) {
        this._projectService = projectService;
    }

    @Input() 
    currentProject: Project;
    active = false; // manage form display

    // display existing projects
    ngOnInit() {
        this._projectService.getProjects()
            .then(projects => {
                this._listProjects = projects;
            });
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
        if(position === (-1)){
            this._listProjects.push(this.currentProject);
        } else{
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
    
    private modifyTitle(project:Project){
        this.active = true;
        this.currentProject = project;
    }

}