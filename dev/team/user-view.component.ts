import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RouteParams} from '@angular/router-deprecated'
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';

//Service
import {UserService} from "./user.service";
import {User} from './user';

@Component({
    selector: "user-view",
    templateUrl: "/dev/team/user-view.component.html",
    directives: [CORE_DIRECTIVES],
    providers: [UserService]
})

export class UserViewComponent implements OnInit {
    user: User[];

    constructor(private _userService: UserService, private _routeParams: RouteParams,private _router: Router) { }

    deleteUser(user: User) {
        this._userService.deleteUser(user.id);
        this._router.parent.navigateByUrl('/Home')
    }
    SetUser(username, role) {
        let id = this._routeParams.get('id');
        this._userService.setUser(id, username, role);
        this._router.parent.navigateByUrl('/Home/Team');
    }

    ngOnInit() {
        let id = this._routeParams.get('id');
        this._userService.getUser(id)
            .subscribe(
            data => this.user = data,
            error => console.log(error)
            )
    }
}