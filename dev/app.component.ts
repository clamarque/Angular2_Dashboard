//Angular
import {Component} from 'angular2/core';
import {Location, RouteConfig, Router,ROUTER_DIRECTIVES, RouterOutlet} from 'angular2/router';
import {TranslateService, TranslatePipe} from 'ng2-translate/ng2-translate';

//LoggedInOutlet
import {LoggedInRouterOutlet} from './LoggedInOutlet';

import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";


@Component({
    selector: 'my-app',
    templateUrl: './dev/app.html',
    pipes: [TranslatePipe],
    directives:[RouterOutlet,LoggedInRouterOutlet]
})
@RouteConfig([ 
    
    { path: '/AUTH', component: LoginComponent, name: 'LoginComponent', useAsDefault: true},
    { path: '/home/...', component: HomeComponent, name: 'HomeComponent'}
    
])

export class AppComponent {
    
    constructor(public router: Router) {}

}
