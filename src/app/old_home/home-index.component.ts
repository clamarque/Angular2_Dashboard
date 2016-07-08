//Angular
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

@Component({
    selector: 'home-index',
    templateUrl: '/dev/home/home-index.component.html',
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES, CORE_DIRECTIVES]
})

export class HomeIndexComponent  {
    customersCount: number;
    missionsCount: number;
    collaboratorsCount: number;
    skillsCount: number;
    date: Date;

    constructor(private _router: Router) {
        this.date = new Date();
        this.collaboratorsCount = 0;
        this.missionsCount = 0;
        this.customersCount = 0;

        let self = this;

        firebase.database().ref('collaborator/').on('value', function (data) {
            self.collaboratorsCount = data.numChildren();
        })

        firebase.database().ref('mission/').on('value', function (data) {
            self.missionsCount = data.numChildren();
        })
        firebase.database().ref('customer/').on('value', function (data) {
            self.customersCount = data.numChildren();
        })
    }
}
