//Angular
import { Component, OnInit } from '@angular/core';
import { Routes, Router, ROUTER_DIRECTIVES } from '@angular/router';

import { HomeIndexComponent, UserLoginComponent } from './';
import { TranslateService, TranslatePipe } from 'ng2-translate/ng2-translate';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    directives: [ROUTER_DIRECTIVES]
})
@Routes([
    { path: '/Home', component: HomeIndexComponent },
    { path: '/', component: UserLoginComponent },
    { path: '*', component: UserLoginComponent }
])

export class AppComponent implements OnInit {

    constructor(private _router: Router, private _translate: TranslateService) { }

    ngOnInit() {
        this._translate.setDefaultLang('fr');
        this._translate.use('fr');
    }
}
