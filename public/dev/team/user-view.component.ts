//Angular
import {Component, OnInit} from '@angular/core';
import {Router, RouteSegment, OnActivate} from '@angular/router';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from '@angular/common';

//User
import {UserService} from "./user.service";
import {User} from './user';

@Component({
    selector: "user-view",
    templateUrl: "/dev/team/user-view.component.html",
    directives: [CORE_DIRECTIVES],
    providers: [UserService]
})

export class UserViewComponent implements OnActivate {
    user: User;
    
    constructor(private _userService: UserService, private _router: Router, private _routeSegment: RouteSegment) { }

    routerOnActivate(current: RouteSegment) {
        let id = current.parameters['id'];
        this._userService.getUser(id).subscribe(data => this.user = data, error => console.log(error))
    }

    deleteUser() {
        let id = this._routeSegment.getParam('id');
        this._userService.deleteUser(id);
        this._router.navigate(['/Home/Team'])
    }

    setUser(username, role) {
        let id = this._routeSegment.getParam('id');
        this._userService.setUser(id, username, role);
        this._router.navigate(['/Home/Team'])
    }
}
