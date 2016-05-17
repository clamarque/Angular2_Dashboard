import {Component, onInit} from '@angular/core';
import {Router,ROUTER_DIRECTIVES, RouteConfig} from '@angular/router-deprecated';

import {TranslateService, TranslatePipe} from 'ng2-translate/ng2-translate';

import {LoggedInRouterOutlet} from './LoggedInOutlet';

import {LoginComponent} from '../login/login.component';
import {HomeComponent} from '../home/home.component';
import {SettingComponent} from '../setting/setting.component';

@Component({
    selector: 'my-app',
    templateUrl: './dev/authentication/authentication.html',
    directives:[ROUTER_DIRECTIVES, SettingComponent],
    pipes: [TranslatePipe]
})
@RouteConfig([ 
    
    { path: '/Login', component: LoginComponent, name: 'LoginComponent', useAsDefault: true},
    { path: '/Home/...', component: HomeComponent, name: 'HomeComponent'}
    
])

export class AuthenticationComponent implements onInit  {
    
constructor(public _translate: TranslateService) {}
    
    ngOnInit(){
        this._translate.setDefaultLang('fr');
        this._translate.use('fr');
    }
}