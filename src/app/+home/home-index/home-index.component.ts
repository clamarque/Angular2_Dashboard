//Angular
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, Routes, ROUTER_DIRECTIVES } from '@angular/router';

import {
    CollaboratorIndexComponent,
    CollaboratorViewComponent,
    CustomerCreateComponent,
    CustomerIndexComponent,
    CustomerViewComponent,
    MissionCreateComponent,
    MissionIndexComponent,
    MissionViewComponent,
    RoleIndexComponent,
    RoleCreateComponent,
    SettingIndexComponent,
    SkillIndexComponent,
    SkillCreateComponent,
    SkillViewComponent,
    UserRegisterComponent } from '../../';

import { DataService, ObjectToArrayPipe } from '../../shared';

@Component({
    selector: 'home-index',
    templateUrl: './app/+home/home-index/home-index.component.html',
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES, CORE_DIRECTIVES],
    providers: [DataService, ObjectToArrayPipe]
})
@Routes([
    { path: '/', component: MissionIndexComponent },
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

export class HomeIndexComponent implements OnInit {

    customersCount: number;
    missionsCount: number;
    usersCount: number;
    skillsCount: number;
    date: Date;
    data: any;

    public username: String;
    public infos: any = {};

    constructor(private _dataService: DataService, private _router: Router, private _objectToArrayPipe: ObjectToArrayPipe) {
        this.username = localStorage.getItem('username');

        this.date = new Date();
        this.usersCount = 0;
        this.missionsCount = 0;
        this.customersCount = 0;
        this.skillsCount = 0;

        let self = this;

        firebase.database().ref('collaborator/').on('value', function (data) {
            self.usersCount = data.numChildren();
        })

        firebase.database().ref('mission/').on('value', function (data) {
            self.missionsCount = data.numChildren();
        })
        firebase.database().ref('customer/').on('value', function (data) {
            self.customersCount = data.numChildren();
        })
    }

    logout() {
        firebase.auth().signOut()
        localStorage.removeItem('username');
        this._router.navigate(['/login']);
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
