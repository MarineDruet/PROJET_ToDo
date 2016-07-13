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
    @Input()
    connected: boolean;

    constructor(userService: UserService, router: Router){
      this._userService = userService;
      this._router = router;
    }
/* permet de se connecter en recuperant les infos saisies dans le formulaire */
    login(formLogin: User){
      /* recupere les differents Users dans la variable pseudotemp */
      let pseudotemp:any = this._userService.getUsers();
          /* parcours des Users pour touver l'utilisateur en cours */
        for(let user of pseudotemp){
          if((formLogin.pseudo === user.pseudo) && (formLogin.password === user.password)){
            alert("Bienvenue " + formLogin.pseudo);
            this.connected = true;
            /* transfert vers la page todos */
            this._router.navigate(['todos']);
            }else if((formLogin.pseudo === user.pseudo) && (formLogin.password !== user.password)){
              if(formLogin.pseudo !== user.pseudo){
                alert("Cet utilisateur n'existe pas !!!!!!");
              }else
                alert("Attention " + formLogin.pseudo + "! Erreur de mot de passe!");
              }
          }
    }
 }
