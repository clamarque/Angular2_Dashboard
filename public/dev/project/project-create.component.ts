//Angular
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

//Project
import {ProjectService} from "./project.service";
import {Project} from './project'

//User
import {User} from '../team/user';
import {UserService} from '../team/user.service';

@Component({
    selector: 'new-projet',
    templateUrl: './dev/project/project-create.component.html',
    providers: [ProjectService, UserService]
})

export class ProjectCreateComponent implements OnInit {
    members_list: User[];

    constructor(private _projectService: ProjectService, private _router: Router, private _userService: UserService) { }

    CreateProject(name, description, date, member) {
        this._projectService.Create(name, description, date, member);
        this._router.navigate(['/Home/Project'])
    }
    ngOnInit() {
        this._userService.getUsers()
            .subscribe(
            members_list => this.members_list = members_list,
            error => console.log(error)
            );
    }

}
