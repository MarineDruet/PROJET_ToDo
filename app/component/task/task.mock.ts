import { Task } from './task';

let creationDate = new Date();
let dueDate = new Date();

export const TASKS: Task[]=[
    {'id':1,'description':'description tache n°1','creationDate':creationDate,'dueDate':dueDate,'state':'en cours','author':'machin','executant':'bidule','title':'Tache N°1'},
    {'id':2,'description':'description tache n°2','creationDate':creationDate,'dueDate':dueDate,'state':'en cours','author':'machin','executant':'bidule','title':'Tache n°2'},
    {'id':3,'description':'description tache n°3','creationDate':creationDate,'dueDate':dueDate,'state':'en cours','author':'machin','executant':'bidule','title':'Tache n°3'},
    {'id':4,'description':'description tache n°4','creationDate':creationDate,'dueDate':dueDate,'state':'en cours','author':'machin','executant':'bidule','title':null},
    {'id':5,'description':'description tache n°5','creationDate':creationDate,'dueDate':dueDate,'state':'en cours','author':'machin','executant':'bidule','title':null}
];