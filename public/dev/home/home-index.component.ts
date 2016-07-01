//Angular
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

import { ObjectToArrayPipe } from '../pipes/object-to-array.pipe';


declare var firebase;

@Component({
    selector: 'home-index',
    templateUrl: '/dev/home/home-index.component.html',
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES, CORE_DIRECTIVES],
    providers: [ObjectToArrayPipe]
})

export class HomeIndexComponent implements OnInit {
    customersCount: number;
    missionsCount: number;
    usersCount: number;
    skillsCount: number;
    date: Date;

    constructor(private _router: Router, private _objectToArrayPipe: ObjectToArrayPipe) {
        this.date = new Date();
        this.usersCount = 0;
        this.missionsCount = 0;
        this.customersCount = 0;
        this.skillsCount = 0;

        let self = this;

        firebase.database().ref('user/').on('value', function (data) {
            self.usersCount = data.numChildren();
        })

        firebase.database().ref('mission/').on('value', function (data) {
            self.missionsCount = data.numChildren();
        })
        firebase.database().ref('customer/').on('value', function (data) {
            self.customersCount = data.numChildren();
        })
        firebase.database().ref('skill/').on('value', function (data) {
            self.skillsCount = data.numChildren();
        })


    }

    ngOnInit() {

    }


}
