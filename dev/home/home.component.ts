//Angular
import { Component } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { Http, Headers} from 'angular2/http';
import { Router, RouteConfig, RouterOutlet,RouterLink, ROUTER_DIRECTIVES} from 'angular2/router';

import {ProjetsListComponent} from '../projets/projets-list.component';
import {TeamListComponent} from '../teams/team-list.component';
import {NewProjetComponent} from "../projets/new-project.component";
import {NewMemberComponent} from "../teams/new-member.component";
import {ImportProjetComponent} from "../projets/import-project.component";
import {ExportProjetComponent} from "../projets/export-project.component";
import {SaveProjetComponent} from "../projets/save-project.component";
import {ArchiveProjetsComponent} from "../projets/archive-project.component";

@Component({
    selector: 'home',
    templateUrl: './dev/home/home.html',
    directives: [RouterOutlet, RouterLink,ROUTER_DIRECTIVES]

})
@RouteConfig([   
    { path: '/', component: ProjetsListComponent,as: 'Projets', useAsDefault: true},
    { path: '/team', component: TeamListComponent, as: 'Team'},
    {path: '/projects', name: 'Projets', component: ProjetsListComponent},
    {path: '/projects/newprojet', name: 'NewProjet', component: NewProjetComponent},
    {path: '/projects/importprojet', name: 'ImportProjet', component: ImportProjetComponent},
    {path: '/projects/exportprojet', name: 'ExportProjet', component: ExportProjetComponent},
    {path: '/projects/saveprojet', name: 'SaveProjet', component: SaveProjetComponent},
    {path: '/projects/archives', name: 'Archives', component: ArchiveProjetsComponent},
    {path: '/teams', name: 'Teams', component: TeamListComponent},
    {path: '/teams/newmember', name: 'NewMember', component: NewMemberComponent}    
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
