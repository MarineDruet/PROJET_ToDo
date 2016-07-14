import { Injectable } from '@angular/core';
import { USERS } from './user.mock';
import { User } from './user';

@Injectable()
export class UserService{
    constructor() { }
    
    public getUsers(){
        return USERS;
    }
    
    public getUser(id : number) {
        return Promise.resolve(USERS.filter(user => user.id === id));
    }
    
    public setUser(user : User) : boolean {
        return false;
    }
    
    public addUser(user : User) : boolean {
        return false;
    }
    
    public delUser(user : User) : boolean {
        return false;
    }
}