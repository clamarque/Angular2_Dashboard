import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from '@angular/router';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';

@Component({
    selector: 'projets-index',
    templateUrl: '/dev/home/home-index.component.html',
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES, CORE_DIRECTIVES]
})

export class HomeIndexComponent {

    constructor(private _router: Router) { }

}