//Angular
import { CORE_DIRECTIVES } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, Routes, ROUTER_DIRECTIVES } from '@angular/router';

import { DataService } from "../shared/data.service";
import { ObjectToArrayPipe } from '../shared/pipes/object-to-array.pipe';

//Component
import { CustomerIndexComponent } from '../customer/customer-index.component';
import { CustomerCreateComponent } from '../customer/customer-create.component';
import { CustomerViewComponent } from '../customer/customer-view.component';
import { CollaboratorIndexComponent } from '../collaborator/collaborator-index.component';
import { CollaboratorViewComponent } from '../collaborator/collaborator-view.component';
import { HomeIndexComponent } from './home-index.component';
import { MissionIndexComponent } from '../mission/mission-index.component';
import { MissionCreateComponent } from "../mission/mission-create.component";
import { MissionViewComponent } from "../mission/mission-view.component";
import { RoleIndexComponent } from '../role/role-index.component';
import { RoleCreateComponent } from '../role/role-create.component';
import { SettingIndexComponent } from '../setting/setting-index.component'
import { SkillIndexComponent } from '../skill/skill-index.component';
import { SkillCreateComponent } from '../skill/skill-create.component';
import { SkillViewComponent } from '../skill/skill-view.component';
import { UserRegisterComponent } from '../user/user-register.component';

@Component({
    selector: 'home',
    templateUrl: './dev/home/home.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [DataService, ObjectToArrayPipe]
})
@Routes([
    { path: '/', component: HomeIndexComponent },
    { path: '/Mission', component: MissionIndexComponent },
    { path: '/CreateMission', component: MissionCreateComponent },
    { path: '/ViewMission/:id', component: MissionViewComponent },
    { path: '/Collaborator', component: CollaboratorIndexComponent },
    { path: '/CreateCollaborator', component: UserRegisterComponent },
    { path: '/ViewCollaborator/:id', component: CollaboratorViewComponent },
    { path: '/Customer', component: CustomerIndexComponent },
    { path: '/CreateCustomer', component: CustomerCreateComponent },
    { path: '/ViewCustomer/:id', component: CustomerViewComponent },
    { path: '/Setting', component: SettingIndexComponent },
    { path: '/Skill', component: SkillIndexComponent },
    { path: '/CreateSkill', component: SkillCreateComponent },
    { path: '/ViewSkill/:id', component: SkillViewComponent },
    { path: '/Role', component: RoleIndexComponent },
    { path: '/CreateRole', component: RoleCreateComponent }
])

export class HomeComponent implements OnInit {

    public username: String;
    public infos: any = {}
    list_infos: any[];
    data: any;

    constructor(private _router: Router, private _objectToArrayPipe: ObjectToArrayPipe, private _dataService: DataService) {
        this.username = localStorage.getItem('username');
    }

    logout() {
        firebase.auth().signOut()
        localStorage.removeItem('username');
        this._router.navigate(['/']);
    }

    ngOnInit() {
        let user = firebase.auth().currentUser;
        console.log(user.uid);
        if (user) {
            this._dataService.getData('collaborator', user.uid).then((snapshot) => {
                this.infos = snapshot.val();
                
                console.log(this.infos.admin);
            })
        }
    }
}
