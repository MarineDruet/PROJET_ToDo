import { provideRouter, RouterConfig }  from '@angular/router';
import { TodosDetailComponent } from './component/todos/todos.component';
import { AccountDetailComponent } from './component/account/account.component';
import { HomeComponent } from './component/home/home.component';
import { TaskDisplayComponent } from './component/task/task.component';

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
    },
    {
        path:'task',
        component: TaskDisplayComponent
    }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
