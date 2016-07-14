/* 
 * task
 */
 
 export class Task {
     id:number;
     title:string;
     description:string;
     creationDate:Date;
     dueDate:Date;
     state:string;
     author:string;
     executant:string;
     
     constructor(id: number, description: string, creationDate: Date, dueDate: Date, state: string, author: string, executant: string, title?:string){
         this.id=id;
         this.description=description;
         this.creationDate=creationDate;
         this.dueDate=dueDate;
         this.state=state;
         this.author=author;
         this.executant=executant;
     }
 }