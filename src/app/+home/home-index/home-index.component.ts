//Angular
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

import { AuthService, DataService, ObjectToArrayPipe } from '../../shared';

@Component({
    selector: 'home-index',
    templateUrl: './app/+home/home-index/home-index.component.html',
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES, CORE_DIRECTIVES],
    providers: [AuthService, DataService, ObjectToArrayPipe]
})


export class HomeIndexComponent implements OnInit {

    customersCount: number;
    missionsCount: number;
    usersCount: number;
    skillsCount: number;
    date: Date;
    data: any;

    public username: String;
    public infos: any = {};

    constructor(private _authService: AuthService, private _dataService: DataService, private _router: Router, private _objectToArrayPipe: ObjectToArrayPipe) {
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
    
    onSignOut(){
        this._authService.signOut();
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
