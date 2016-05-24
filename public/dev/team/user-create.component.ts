//Angular
import {Component} from '@angular/core';
import {Router} from '@angular/router';

//Service
import {UserService} from "./user.service";

@Component({
    selector: 'project-create',
    templateUrl: './dev/team/user-create.component.html',
    providers: [UserService]
})

export class UserCreateComponent {

    constructor(private _userService: UserService, private _router: Router) { }

    createUser(username, role) {
        this._userService.postUser(username, role);
        this._router.navigate(['/Home/Team'])
    }
}
