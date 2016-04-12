import {Component} from 'angular2/core';
import {TeamListComponent} from "./teams/team-list.component";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {Location, RouteConfig, Router} from 'angular2/router';
import {LoggedInRouterOutlet} from './LoggedInOutlet';


import {NewMemberComponent} from "./teams/new-member.component";
import {ProjetsListComponent} from "./projets/projets-list.component";
import {NewProjetComponent} from "./projets/new-project.component";
import {ImportProjetComponent} from "./projets/import-project.component";
import {ExportProjetComponent} from "./projets/export-project.component";
import {SaveProjetComponent} from "./projets/save-project.component";
import {ArchiveProjetsComponent} from "./projets/archive-project.component";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";

@Component({
    selector: 'my-app',
    template: `
    <header class="highMin colorSogeti container-fluid">
        <img class="col-lg-2 marginTopImg" src="src/img/Logosogeti.jpg">
	    <h1 class="textWhite col-lg-9 text-center">Plateforme d Integration Continue</h1>
	    <div class="">
		    <img *ngIf="connect===true" class="img" src="src/img/logoprofilsuperman.jpg">
	    </div>
    </header>
    
    <div class="main" >
        <router-outlet></router-outlet>
    </div>
`,
directives:[LoggedInRouterOutlet]
})
@RouteConfig([
    
    { path: '/', redirectTo: ['/Home'] },
    { path: '/login', component: LoginComponent, name: 'LoginComponent' },
  	{ path: '/home', component: HomeComponent, name: 'Home' },
    {path: '/projects', name: 'Projets', component: ProjetsListComponent},
    {path: '/projects/newprojet', name: 'NewProjet', component: NewProjetComponent},
    {path: '/projects/importprojet', name: 'ImportProjet', component: ImportProjetComponent},
    {path: '/projects/exportprojet', name: 'ExportProjet', component: ExportProjetComponent},
    {path: '/projects/saveprojet', name: 'SaveProjet', component: SaveProjetComponent},
    {path: '/projects/archives', name: 'Archives', component: ArchiveProjetsComponent},
    {path: '/teams', name: 'Teams', component: TeamListComponent},
    {path: '/teams/newmember', name: 'NewTeam', component: NewMemberComponent}
    
])

export class AppComponent {
   
    constructor(public router: Router){}
  
   public connect=false;
   public onHome() {
       this.connect=true;
   }
   
   public selectedProjet= false;
   public onSelectProject() {
       this.selectedProjet=true;
   }
   
}
