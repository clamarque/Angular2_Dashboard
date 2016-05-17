import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from '@angular/router-deprecated';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import {TranslatePipe, TranslateService} from 'ng2-translate/ng2-translate';

@Component({
    selector: 'customer-index',
    templateUrl: '/dev/customer/customer-index.component.html',
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES, CORE_DIRECTIVES],
    pipes: [TranslatePipe]
})

export class CustomerIndexComponent  {
    
    constructor( private _router: Router) { }

}