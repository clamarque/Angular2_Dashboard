//Angular
import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { CORE_DIRECTIVES } from '@angular/common';

//Firebase
declare var firebase: any;

//Project
import { ProjectService } from "./project.service";
import { Project } from './project';

import { ObjectToArrayPipe } from '../pipes/object-to-array.pipe'

@Component({
    selector: 'project-index',
    templateUrl: '/dev/project/project-index.component.html',
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES],
    providers: [ProjectService, ObjectToArrayPipe]
})

export class ProjectIndexComponent implements OnInit {
    //projects_list: Project[];
    projects_list: any[];
    temp: any;
    
    constructor(private _projectService: ProjectService, private _objectToArrayPipe: ObjectToArrayPipe) { }

    deleteProject(project: Project) {
        this._projectService.deleteProject(project.id);
        this.ngOnInit();
    }

    ngOnInit() {
           firebase.database().ref('project').once('value').then((snapshot) => {
            let data = snapshot.val();
            this.temp = data;         
            this.projects_list = this._objectToArrayPipe.transform(this.temp);
        });
    }
}
