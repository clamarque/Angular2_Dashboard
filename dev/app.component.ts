//Angular
import {Component, OnInit} from 'angular2/core';
import {Location, RouteConfig, Router,ROUTER_DIRECTIVES, RouterOutlet} from 'angular2/router';
import {TranslateService, TranslatePipe} from 'ng2-translate/ng2-translate';

//LoggedInOutlet
import {LoggedInRouterOutlet} from './LoggedInOutlet';

import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import { LanguageComponent } from './language/language.component';


@Component({
    selector: 'my-app',
    templateUrl: './dev/app.html',
    pipes: [TranslatePipe],
    directives:[RouterOutlet,LoggedInRouterOutlet, LanguageComponent]
})
@RouteConfig([ 
    
    { path: '/AUTH', component: LoginComponent, name: 'LoginComponent', useAsDefault: true},
    { path: '/home/...', component: HomeComponent, name: 'HomeComponent'}
    
])

export class AppComponent implements OnInit {
    
    constructor(public router: Router , private _translate: TranslateService) {}
    
    ngOnInit(){
        this._translate.setDefaultLang('en');
        this._translate.use('fr');
    }
}
