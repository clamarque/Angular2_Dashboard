//Angular
import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { Router, ROUTER_DIRECTIVES} from '@angular/router';
import {RouteConfig, RouterOutlet} from '@angular/router-deprecated';
import {TranslateService, TranslatePipe} from 'ng2-translate/ng2-translate';

//LoggedInOutlet
import {LoggedInRouterOutlet} from '../authentication/LoggedInOutlet';


//component
import {HomeIndexComponent} from './home-index.component';

import {ProjectIndexComponent} from '../project/project-index.component';
import {ProjectCreateComponent} from "../project/project-create.component";
import {ProjectViewComponent} from "../project/Project-view.component";

import {UserIndexComponent} from '../team/user-index.component';
import {UserCreateComponent} from '../team/user-create.component';
import {UserViewComponent} from '../team/user-view.component';

//Service
import {FirebaseService} from "../login/firebase.service"


@Component({
    selector: 'home',
    templateUrl: './dev/home/home.html',
    directives: [ROUTER_DIRECTIVES],
    pipes : [TranslatePipe]
})
@RouteConfig([
    {path: '/', component: HomeIndexComponent,name: 'Home', useAsDefault: true},   
    {path: '/Project', component: ProjectIndexComponent,name: 'Projects'},
    {path: '/CreateProject', component: ProjectCreateComponent , name: 'CreateProject'},
    {path: '/ViewProject/:id',component:  ProjectViewComponent, name: "ProjectView"},
    {path: '/Team', component: UserIndexComponent, name: 'Teams' },
    {path: '/CreateTeam', component: UserCreateComponent, name: 'CreateTeam'},
    {path: '/ViewUser/:id',component:  UserViewComponent, name: "UserView"},

    
])

export class HomeComponent{
    
    logged: boolean;
    
           
    public username: String;
    public password: String;
    
constructor(private router: Router, public translate: TranslateService) {
	  this.username = localStorage.getItem('username');
	  this.password = localStorage.getItem('password');
	  
	}
    
    
    logout() {
        event.preventDefault();
  
        //this.logged = false;
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        
	    this.router.parent.navigateByUrl('/AUTH');
	}
}
