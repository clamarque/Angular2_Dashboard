import {Component} from '@angular/core';
import {Router} from '@angular/router-deprecated';

//Service
import {UserService} from "./user.service";

@Component({
    selector: 'new-projet',
    templateUrl: './dev/team/user-create.component.html',
    providers: [UserService]

})

export class UserCreateComponent {

    constructor(private _userService: UserService, private _router: Router) { }

    CreateProject(username, role) {
        let self = this;

        this._userService.createUser(username,role)
            .subscribe(
                
                this._router.parent.navigateByUrl('/Home/Team')
                )
    }
}