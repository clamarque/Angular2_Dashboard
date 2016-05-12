import {Component, OnInit} from '@angular/core';
import {RouteParams, Router} from '@angular/router-deprecated'
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';

import {ProjectService} from './project.service';
import {Project} from './project';

@Component({
    selector: "project-view",
    templateUrl: "/dev/project/project-view.component.html",
    directives: [CORE_DIRECTIVES],
    providers: [ProjectService]
})

export class ProjectViewComponent implements OnInit {
    project: Project;
    public username: String;
    

    constructor(private _routeParams: RouteParams, private _projectService: ProjectService, private _router: Router) {
        this.username = localStorage.getItem('username');
    }


    deleteProject() {
        let id = this._routeParams.get('id');
        this._projectService.deleteProject(id);
        this._router.parent.navigateByUrl('/Home/Project');
        /*.subscribe(
           this._router.parent.navigateByUrl('/Home/Project')
        );*/
    }
   SetProject(name, description, date){
       let id = this._routeParams.get('id');
        this._projectService.setProject(id,name, description, date);
        this._router.parent.navigateByUrl('/Home/Project');
        /*.subscribe(
         this._router.parent.navigateByUrl('/Home'),
          error => console.log(error)
        );*/
    }

    ngOnInit() {
        let id = this._routeParams.get('id');
        this._projectService.getProject(id)
            .subscribe(
            data => this.project = data,
            error => console.log(error)
            )
    }
}