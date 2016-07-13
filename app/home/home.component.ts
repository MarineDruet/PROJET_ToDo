import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
    selector:'home',
    templateUrl:'app/home/home.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class HomeComponent{
    
}