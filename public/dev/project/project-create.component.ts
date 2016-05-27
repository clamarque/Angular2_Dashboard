//Angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Firebase
declare var firebase: any;

//Project
import { ProjectService } from "./project.service";
import { Project } from './project'

import { ObjectToArrayPipe } from '../pipes/object-to-array.pipe'

@Component({
    selector: 'project-create',
    templateUrl: './dev/project/project-create.component.html',
    providers: [ProjectService, ObjectToArrayPipe]
})

export class ProjectCreateComponent implements OnInit {
    members_list: any[];
    temp: any;

    constructor(private _projectService: ProjectService, private _router: Router, private _objectToArrayPipe: ObjectToArrayPipe) { }

    createProject(name, description, date, member) {
        this._projectService.postProject(name, description, date, member);
        this._router.navigate(['/Home/Project'])
    }
    ngOnInit() {
        firebase.database().ref('user').once('value').then((snapshot) => {
            let data = snapshot.val();
            this.temp = data;         
            this.members_list = this._objectToArrayPipe.transform(this.temp);
        });
    }
}
