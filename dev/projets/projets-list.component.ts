import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector:'projets-list',
    templateUrl: '/dev/projets/project.html',
    directives: [ROUTER_DIRECTIVES]
   
})

export class ProjetsListComponent {
    public projets =[
		{name: "PIC", status: "DEPLOYED", release: "release-7", url: "www.github.com", completed: "15 january 2014", member: "blabla"},
		{name: "BRCP", status: "DEPLOYED", release: "release-7", url: "www.bitbucket.com", completed: "07 january 2014", member: "blabla"},
		{name: "PRODUCT", status: "DEPLOYED", release: "release-7", url: "www.github.com", completed: "15 january 2014", member: "blabla"},
		{name: "STOL", status: "DEPLOYED", release: "release-7", url: "www.bitbucket.com", completed: "07 january 2014", member: "blabla"},
    ];
    
}