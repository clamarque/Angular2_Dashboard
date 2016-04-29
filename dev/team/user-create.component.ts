import {Component} from "angular2/core";
import {TranslatePipe, TranslateService} from 'ng2-translate/ng2-translate';
import {Router} from 'angular2/router'

//Service
import {UserService} from "./user.service";

@Component({
    selector: 'new-projet',
    templateUrl: './dev/team/user-create.component.html',
    pipes: [TranslatePipe],
    providers: [UserService]

})

export class UserCreateComponent {

    constructor(public translate: TranslateService, private _userService: UserService, private _router: Router) { }

    CreateProject(username, role) {
        let self = this;

        this._userService.createUser(username,role)
            .subscribe(
            self._router.parent.navigateByUrl('/Teams')
            );

    }
}