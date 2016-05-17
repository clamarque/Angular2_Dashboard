//Angular
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router-deprecated';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from '@angular/common';

import {TranslatePipe, TranslateService} from 'ng2-translate/ng2-translate';

//Project
import {ProjectService} from "./project.service";
import {Project} from './project'

//User
import {User} from '../team/user';
import {UserService} from '../team/user.service';

@Component({
    selector: 'new-projet',
    templateUrl: './dev/project/project-create.component.html',
    directives: [CORE_DIRECTIVES],
    pipes: [TranslatePipe],
    providers: [ProjectService, UserService]

})

export class ProjectCreateComponent implements OnInit {
        members_list: User[];

    constructor(public translate: TranslateService, private _projectService: ProjectService, private _router: Router, private _userService : UserService) { }

    CreateProject(name, description, date, member) {
        this._projectService.Create(name, description, date, member)
            .subscribe(
            this._router.parent.navigateByUrl('/Home/Project')
            );
    }
    ngOnInit() {
        this._userService.getUsers()
            .subscribe(
            members_list => this.members_list = members_list,
            error => console.log(error)
            );
    }
    
}
