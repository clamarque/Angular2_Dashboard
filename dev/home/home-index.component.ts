import {Component, OnInit} from "angular2/core";
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {TranslatePipe, TranslateService} from 'ng2-translate/ng2-translate';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';



@Component({
    selector: 'projets-index',
    templateUrl: '/dev/home/home-index.component.html',
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES, CORE_DIRECTIVES],
    pipes: [TranslatePipe]
})

export class HomeIndexComponent  {
    

    constructor( private _router: Router) { }

}