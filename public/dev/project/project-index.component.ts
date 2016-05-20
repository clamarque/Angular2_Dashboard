//Angular
import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from '@angular/router';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from '@angular/common';

//Project
import {ProjectService} from "./project.service";
import {Project} from './project';

@Component({
    selector: 'project-index',
    templateUrl: '/dev/project/project-index.component.html',
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES, CORE_DIRECTIVES],
    providers: [ProjectService],
})

export class ProjectIndexComponent implements OnInit {
    projects_list: Project[];

    constructor(private _projectService: ProjectService, private _router: Router) { }

    deleteProject(project: Project) {
        this._projectService.deleteProject(project.id);
        this.ngOnInit();
    }

    ngOnInit() {
        this._projectService.getProjects().subscribe(
            projects_list => this.projects_list = projects_list,
            error => console.log(error)
        );
    }
}
