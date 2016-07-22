import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'dashboard-index',
    templateUrl: './app/+dashboard/dashboard-index/dashboard-index.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class DashboardIndexComponent {
    constructor(){ }
}