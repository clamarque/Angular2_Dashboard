import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';

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
    
    
    deleteProject(){
        let self = this;
         let id = this._routeParams.get('id');
        this._projectService.deleteProject(id).subscribe(
            self._router.parent.navigateByUrl('/Home')
        );
   
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