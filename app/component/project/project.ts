import {Task} from '../task/task'
/*
 * project 
 */

export class Project{
    id: number;
    title: string;
    tasks : Task[];
    
    constructor(id:number,title:string,tasks?:Task[]){
        this.id = id;
        this.title = title;
    }
}
