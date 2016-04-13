import { Component } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { Http, Headers } from 'angular2/http';
import { Router, RouterLink, ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';

@Component({
    selector: 'project',
    templateUrl: './dev/projects/project.html',
    directives: [CORE_DIRECTIVES, RouterLink]
})


export class ProjectComponent{
    

}