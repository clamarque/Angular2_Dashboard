import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MD_GRID_LIST_DIRECTIVES } from '@angular2-material/grid-list';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card'

import { AuthService, DataService, ObjectToArrayPipe, TitlePageService } from '../../shared';

@Component({
    selector: 'dashboard-index',
    templateUrl: './app/+dashboard/dashboard-index/dashboard-index.component.html',
    directives: [ROUTER_DIRECTIVES, MD_GRID_LIST_DIRECTIVES, MD_CARD_DIRECTIVES],
    providers: [DataService, TitlePageService]
})

export class DashboardIndexComponent implements OnInit {
    customersCount: number;
    missionsCount: number;
    usersCount: number;
    skillsCount: number;
    date: Date;
    public infos: any = {};

    constructor(private _dataService: DataService, private _titlePageService: TitlePageService) {

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

    ngOnInit() {
        this._titlePageService.setTitle('Dashboard');
        
        let user = firebase.auth().currentUser;
        ///console.log(user.uid);
        if (user) {
            this._dataService.getData('collaborator', user.uid).then((snapshot) => {
                this.infos = snapshot.val();
                //console.log(this.infos.admin);
            })
        }
    }
}