//Angular
import { Component } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { Http, Headers} from 'angular2/http';
import { Router, RouteConfig, RouterOutlet,RouterLink, ROUTER_DIRECTIVES} from 'angular2/router';

import {ProjetsListComponent} from '../projets/projets-list.component';
import {TeamListComponent} from '../teams/team-list.component';

@Component({
    selector: 'home',
    templateUrl: './dev/home/home.html',
    directives: [RouterOutlet, RouterLink,ROUTER_DIRECTIVES]

})
@RouteConfig([   
    { path: '/', component: ProjetsListComponent,name: 'Projets', useAsDefault: true}
    { path: 'team', component: TeamListComponent, name: 'Team'}
])

export class HomeComponent{
    
       
    public username: String;
    public password: String;
    
    constructor(private router: Router, private http: Http ) {
	  this.username = localStorage.getItem('username');
	  this.password = localStorage.getItem('password');
	  
	}
    
    logout() {
        event.preventDefault();
            
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        
	    this.router.parent.navigateByUrl('/login');
	}
}
