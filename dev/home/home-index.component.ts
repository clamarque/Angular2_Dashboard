import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from '@angular/router';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import {TranslatePipe, TranslateService} from 'ng2-translate/ng2-translate';




@Component({
    selector: 'projets-index',
    templateUrl: '/dev/home/home-index.component.html',
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES, CORE_DIRECTIVES],
    pipes: [TranslatePipe]
})

export class HomeIndexComponent  {
    

    constructor( private _router: Router) { }

}