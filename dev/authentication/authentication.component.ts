import {Component, onInit} from 'angular2/core';
import {RouteConfig, Router,ROUTER_DIRECTIVES} from 'angular2/router';
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
    
    { path: '/Login', component: LoginComponent, name: 'LoginComponent', useAsDefault: true},
    { path: '/Home/...', component: HomeComponent, name: 'HomeComponent'}
    
])

export class AuthenticationComponent implements onInit  {
    
constructor(public _translate: TranslateService) {}
    
    ngOnInit(){
        this._translate.setDefaultLang('en');
        this._translate.use('en');
    }
}