//Angular
import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';

@Component({
    selector: 'customer-index',
    templateUrl: '/dev/customer/customer-index.component.html',
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES, CORE_DIRECTIVES]
})

export class CustomerIndexComponent {

    constructor(private _router: Router) { }

}