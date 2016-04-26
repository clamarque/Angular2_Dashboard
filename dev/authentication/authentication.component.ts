import {Component} from 'angular2/core';
import {RouteConfig, Router,ROUTER_DIRECTIVES, Location} from 'angular2/router';
import {TranslateService, TranslatePipe} from 'ng2-translate/ng2-translate';

import {LoggedInRouterOutlet} from './LoggedInOutlet';

import {LoginComponent} from '../login/login.component';
import {HomeComponent} from '../home/home.component';
import {LanguageComponent} from '../language/language.component';

@Component({
    selector: 'my-app',
    templateUrl: './dev/authentication/authentication.html',
    directives:[ROUTER_DIRECTIVES, LanguageComponent],
    pipes: [TranslatePipe]
})
@RouteConfig([ 
    
    { path: '/AUTH', component: LoginComponent, name: 'LoginComponent', useAsDefault: true},
    { path: '/home/...', component: HomeComponent, name: 'HomeComponent'}
    
])

export class AuthenticationComponent  {
    
    constructor(public translate: TranslateService) {
        translate.setDefaultLang('en');
        translate.use('en');
    }
}