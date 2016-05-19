//Angular
import { Component, OnInit } from '@angular/core';
import { Routes, Router, ROUTER_DIRECTIVES } from '@angular/router';

import {TranslateService, TranslatePipe} from 'ng2-translate/ng2-translate';

//Component
import {LoginComponent} from '../login/login.component';
import {HomeComponent} from '../home/home.component';
import {SettingComponent} from '../setting/setting.component';


@Component({
    selector: 'my-app',
    templateUrl: './dev/bootstrapping/bootstrapping.component.html',
    directives: [ROUTER_DIRECTIVES, SettingComponent],
    pipes: [TranslatePipe]
})
@Routes([
    { path: '/Home', component: HomeComponent },
    { path: '/', component: LoginComponent },
    { path: '*', component: LoginComponent }
])

export class BootstrappingComponent implements OnInit {

    constructor(private _translate: TranslateService, private _router: Router) { }

    ngOnInit() {
        this._translate.setDefaultLang('fr');
        this._translate.use('fr');


    }
}