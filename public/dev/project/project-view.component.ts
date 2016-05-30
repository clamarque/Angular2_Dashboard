//Angular
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouteSegment, OnActivate } from '@angular/router';

//Project
import { ProjectService } from './project.service';
import { Project } from './project';

import { ObjectToArrayPipe } from '../pipes/object-to-array.pipe'

//Firebase
declare var firebase: any;

@Component({
    selector: "project-view",
    templateUrl: "/dev/project/project-view.component.html",
    directives: [CORE_DIRECTIVES],
    providers: [ProjectService, ObjectToArrayPipe]
})

export class ProjectViewComponent implements OnActivate {
    project: Project;
    temp: any;
    users: any[];

    constructor(private _projectService: ProjectService, private _router: Router, private _routeSegment: RouteSegment, private _objecToArray: ObjectToArrayPipe) { }

    routerOnActivate(current: RouteSegment) {
        let id = current.parameters['id'];
        this._projectService.getProject(id).subscribe(data => this.project = data, error => console.log(error))
        
        firebase.database().ref('user').once('value').then((snapshot) =>{
            let data = snapshot.val();
            this.temp = data;
            this.users = this._objecToArray.transform(this.temp);
            console.log(this.users)
        })
    }

    deleteProject() {
        let id = this._routeSegment.getParam('id');
        this._projectService.deleteProject(id);
        this._router.navigate(['/Home/Project'])
    }

    setProject(name, description, date, member) {
        let id = this._routeSegment.getParam('id');
        this._projectService.setProject(id, name, description, date, member);
        this._router.navigate(['/Home/Project'])
    }
}
