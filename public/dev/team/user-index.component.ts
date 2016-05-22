//Angular
import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES, Router, RouteSegment} from '@angular/router';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from '@angular/common';
declare var firebase: any;
//User
import {UserService} from "./user.service";
import {User} from './user';

import {KeysPipe} from './user.pipes'

@Component({
    selector: 'user-index',
    templateUrl: '/dev/team/user-index.component.html',
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES, CORE_DIRECTIVES],
    providers: [UserService],
    pipes: [KeysPipe]
})

export class UserIndexComponent implements OnInit {
    users_list: User[];
    constructor(private _userService: UserService, private _router: Router) { }

    deleteUser(user: User) {
        this._userService.deleteUser(user.id);
        this.ngOnInit();
    }

    ngOnInit() {
        this._userService.getUsers().subscribe(
            projects_list => this.users_list = projects_list,
            error => console.log(error)
        )
    }
}
