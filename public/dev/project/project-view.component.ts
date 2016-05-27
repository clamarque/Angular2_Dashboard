//Angular
import { Component, OnInit } from '@angular/core';
import { Router, RouteSegment, OnActivate } from '@angular/router';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';

//Project
import { ProjectService } from './project.service';
import { Project } from './project';

@Component({
    selector: "project-view",
    templateUrl: "/dev/project/project-view.component.html",
    directives: [CORE_DIRECTIVES],
    providers: [ProjectService]
})

export class ProjectViewComponent implements OnActivate {
    project: Project;

    constructor(private _projectService: ProjectService, private _router: Router, private _routeSegment: RouteSegment) { }

    routerOnActivate(current: RouteSegment) {
        let id = current.parameters['id'];
        this._projectService.getProject(id).subscribe(data => this.project = data, error => console.log(error))
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
