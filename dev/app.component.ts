//Angular
import {Component} from 'angular2/core';
import {Location, RouteConfig, Router,ROUTER_DIRECTIVES, RouterOutlet} from 'angular2/router';

//LoggedInOutlet
//import {LoggedInRouterOutlet} from './LoggedInOutlet';

import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";


@Component({
    selector: 'my-app',
    templateUrl: './dev/app.html',
    directives:[RouterOutlet]
})
@RouteConfig([ 
    
    { path: '/login', component: LoginComponent, as: 'LoginComponent'}
    { path: '/home/...', component: HomeComponent, as: 'HomeComponent'},
    
])

export class AppComponent {
    
    constructor(public router: Router) {}

}