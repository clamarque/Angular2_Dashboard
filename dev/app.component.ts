//Angular
import {Component} from 'angular2/core';
import {Location, RouteConfig, Router,ROUTER_DIRECTIVES} from 'angular2/router';

//LoggedInOutlet
import {LoggedInRouterOutlet} from './LoggedInOutlet';

import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";


@Component({
    selector: 'my-app',
    templateUrl: './dev/app.html',
    directives:[LoggedInRouterOutlet,ROUTER_DIRECTIVES]
})
@RouteConfig([ 
    { path: '/**', redirectTo:['/home']},  
    { path: '/...', component: HomeComponent, name: 'HomeComponent'},
    { path: '/login', component: LoginComponent, name: 'LoginComponent' }

])

export class AppComponent {
    
      
}