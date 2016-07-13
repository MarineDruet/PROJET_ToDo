import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Route, RouterLink, Router } from '@angular/router';
import { TodosDetailComponent } from './todos/todos.component';
import { AccountDetailComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';
import { User } from './user/user';
import { UserService } from './user/user.service';
import { GlobalsService } from './globals';
import { Input } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: [ TodosDetailComponent, AccountDetailComponent, ROUTER_DIRECTIVES ],
  precompile: [TodosDetailComponent,AccountDetailComponent, HomeComponent],
  providers: [ UserService]
})

export class AppComponent {
    private _userService: UserService;
    private _router: Router;
    @Input('connected') connected: boolean;

    constructor(userService: UserService, router: Router){
      this._userService = userService;
      this._router = router;
    }

    login(formLogin: User){
      let pseudotemp:any = this._userService.getUsers();
      console.log(pseudotemp);
        for(let user of pseudotemp){
          if((formLogin.pseudo === user.pseudo) && (formLogin.password === user.password)){
            alert("Bienvenue " + formLogin.pseudo);
            this.connected = true;
            this._router.navigate(['home']);
            }else if((formLogin.pseudo === user.pseudo) && (formLogin.password !== user.password)){
              if(formLogin.pseudo !== user.pseudo){
                alert("Cet utilisateur n'existe pas !!!!!!");
              }else
                alert("Attention " + formLogin.pseudo + "! Erreur de mot de passe!");
              }
          }
    }
 }
