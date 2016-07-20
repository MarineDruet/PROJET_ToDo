import { Component, Input, Output } from '@angular/core';
import { ROUTER_DIRECTIVES, Route, RouterLink, Router } from '@angular/router';
import { TodosDetailComponent } from './component/todos/todos.component';
import { AccountDetailComponent } from './component/account/account.component';
import { HomeComponent } from './component/home/home.component';
import { User } from './component/user/user';
import { UserService } from './component/user/user.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [TodosDetailComponent, AccountDetailComponent, ROUTER_DIRECTIVES],
    precompile: [TodosDetailComponent, AccountDetailComponent, HomeComponent],
    providers: [UserService]
})

export class AppComponent {
    private _userService: UserService;
    private _router: Router;
    @Input()
    connected: boolean;


    constructor(userService: UserService, router: Router) {
        this._userService = userService;
        this._router = router;
    }
    /* permet de se connecter en recuperant les infos saisies dans le formulaire */
    login(formLogin: User) {
        /* recupere les differents Users dans la variable pseudotemp */
        let pseudotemp: any = this._userService.getUsers();
        /* parcours des Users pour touver l'utilisateur en cours */
        for (let user of pseudotemp) {
            if ((formLogin.pseudo === user.pseudo) && (formLogin.password === user.password)) {
                alert("Bienvenue " + formLogin.pseudo.charAt(0).toUpperCase() + formLogin.pseudo.substr(1));
                this.connected = true;
                /* transfert vers la page todos */
                this._router.navigate(['todos']);
            } else if ((formLogin.pseudo === user.pseudo) && (formLogin.password !== user.password)) {
                alert("Attention " + formLogin.pseudo.charAt(0).toUpperCase() + formLogin.pseudo.substr(1) + "! Erreur de mot de passe!");
            }
        }
    }
}
