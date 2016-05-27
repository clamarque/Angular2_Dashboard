//Angular
import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { Router, Routes, ROUTER_DIRECTIVES } from '@angular/router';

//Component
import { HomeIndexComponent } from './home-index.component';

import { ProjectIndexComponent } from '../project/project-index.component';
import { ProjectCreateComponent } from "../project/project-create.component";
import { ProjectViewComponent } from "../project/project-view.component";

import { UserIndexComponent } from '../member/user-index.component';
import { UserCreateComponent } from '../member/user-create.component';
import { UserViewComponent } from '../member/user-view.component';

import { CustomerIndexComponent } from '../customer/customer-index.component';
import { CustomerCreateComponent } from '../customer/customer-create.component';
import { CustomerViewComponent } from '../customer/customer-view.component';

import { SettingComponent } from '../setting/setting.component';

//Service
import { LoginService } from "../login/login.service"

@Component({
    selector: 'home',
    templateUrl: './dev/home/home.component.html',
    directives: [ROUTER_DIRECTIVES]
})
@Routes([
    { path: '/', component: HomeIndexComponent},
    { path: '/Project', component: ProjectIndexComponent },
    { path: '/CreateProject', component: ProjectCreateComponent },
    { path: '/ViewProject/:id', component: ProjectViewComponent },
    { path: '/Member', component: UserIndexComponent },
    { path: '/CreateMember', component: UserCreateComponent },
    { path: '/ViewMember/:id', component: UserViewComponent },
    { path: '/Customer', component: CustomerIndexComponent },
    { path: '/CreateCustomer', component: CustomerCreateComponent},
    { path: '/ViewCustomer/:id', component: CustomerViewComponent},
    { path: '/Setting', component: SettingComponent }
])

export class HomeComponent {

    logged: boolean;
    public username: String;

    constructor(private _router: Router) {
        this.username = localStorage.getItem('username');
    }

    logout() {
        event.preventDefault();

        localStorage.removeItem('username');
        localStorage.removeItem('password');

       // this.router.navigate(['/login']);
    }
}
