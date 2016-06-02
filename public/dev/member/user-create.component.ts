//Angular
import { Component } from '@angular/core';
import { Router } from '@angular/router';

//Service
import { UserService } from "./user.service";

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'user-create',
    templateUrl: './dev/member/user-create.component.html',
    providers: [UserService, ToastsManager]
})

export class UserCreateComponent {

    constructor(private _userService: UserService, private _router: Router, private _toastr: ToastsManager) { }

    createUser(username, role) {
        this._userService.postUser(username, role);
        this._router.navigate(['/Home/Member'])
        this._toastr.success('User created')
    }
}
