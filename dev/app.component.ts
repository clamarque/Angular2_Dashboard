import {Component} from 'angular2/core';
import { Http, Headers } from 'angular2/http';
import {Location, RouteConfig, Router, RouterLink, ROUTER_DIRECTIVES, CanActivate} from 'angular2/router';
import {LoggedInRouterOutlet} from './LoggedInOutlet';
import {LoginComponent} from './login/login.component';


import {TeamListComponent} from "./teams/team-list.component";
import {NewMemberComponent} from "./teams/new-member.component";
import {ProjetsListComponent} from "./projets/projets-list.component";
import {NewProjetComponent} from "./projets/new-project.component";
import {ImportProjetComponent} from "./projets/import-project.component";
import {ExportProjetComponent} from "./projets/export-project.component";
import {SaveProjetComponent} from "./projets/save-project.component";
import {ArchiveProjetsComponent} from "./projets/archive-project.component";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {ProjectComponent} from "./projects/project.component";

@Component({
    selector: 'my-app',
    templateUrl: './dev/app.html',
    directives:[LoggedInRouterOutlet, RouterLink, LoginComponent]
})
@RouteConfig([
    
    { path: '/', redirectTo: ['/Home'] },
    { path: '/login', component: LoginComponent, name: 'LoginComponent' },
  	{ path: '/home', component: HomeComponent, name: 'HomeComponent' },
    
    {path: '/projects', component: ProjetsListComponent; name: 'ProjetsListComponent'},
    {path: '/project', component: ProjectComponent; name: 'Project'},
    {path: '/projects/newprojet', name: 'NewProjet', component: NewProjetComponent},
    {path: '/projects/importprojet', name: 'ImportProjet', component: ImportProjetComponent},
    {path: '/projects/exportprojet', name: 'ExportProjet', component: ExportProjetComponent},
    {path: '/projects/saveprojet', name: 'SaveProjet', component: SaveProjetComponent},
    {path: '/projects/archives', name: 'Archives', component: ArchiveProjetsComponent},
    {path: '/teams', name: 'Teams', component: TeamListComponent},
    {path: '/teams/newmember', name: 'NewTeam', component: NewMemberComponent}
    
])



export class AppComponent {
    
    
   
    constructor(public router: Router,  private http: Http){
        
        this.username = localStorage.getItem('username');
        this.password = localStorage.getItem('password');
    }
}