import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

import { TranslateService, TranslatePipe } from 'ng2-translate/ng2-translate';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class AppComponent implements OnInit {

    constructor(private _router: Router, private _translate: TranslateService) { }

    ngOnInit() {
        this._translate.setDefaultLang('en');
        this._translate.use('en');
    }
}
