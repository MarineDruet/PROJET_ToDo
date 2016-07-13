import { provideRouter, RouterConfig }  from '@angular/router';
import { TodosDetailComponent } from './todos/todos.component';
import { AccountDetailComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';

export const routes: RouterConfig = [
    {
        path: '',
        redirectTo:'/home',
        pathMatch: 'full'
    },
    {
        path:'account',
        component:AccountDetailComponent
    },
    {
        path:'todos',
        component:TodosDetailComponent
    },
    {
        path:'home',
        component:HomeComponent
    }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
