import {Component, OnInit} from "angular2/core";
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {TranslatePipe, TranslateService} from 'ng2-translate/ng2-translate';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';



//Service
import {UserService} from "./user.service";
import {User} from './user';

@Component({
    selector: 'projets-index',
    templateUrl: '/dev/team/user-index.component.html',
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES, CORE_DIRECTIVES],
    pipes: [TranslatePipe],
    providers: [UserService]

})

export class UserIndexComponent implements OnInit {
    users_list: User[];

    constructor(private _userService: UserService, private _router: Router) { }
    
    deleteUser(user: User) {
        this._userService.deleteUser(user.id).subscribe(
             this._router.parent.navigateByUrl('/Home/Team'),
            error => console.error('Error: ' + error)
        );
    }

    ngOnInit() {
        
        console.log('ngoninit');
        this._userService.getUsers()
            .subscribe(
            projects_list => this.users_list = projects_list,
            error => console.log(error)
            );
    }
}