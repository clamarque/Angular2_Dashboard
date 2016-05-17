//Angular
import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from '@angular/router-deprecated';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from '@angular/common';

import {TranslateService, TranslatePipe} from 'ng2-translate/ng2-translate';

//Project
import {ProjectService} from "./project.service";
import {Project} from './project';

@Component({
    selector: 'project-index',
    templateUrl: '/dev/project/project-index.component.html',
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES, CORE_DIRECTIVES],
    providers: [ProjectService],
    pipes: [TranslatePipe]
})

export class ProjectIndexComponent implements OnInit {
    projects_list: Project[];

    constructor(private _projectService: ProjectService, private _router: Router) { }

    viewProject(project: Project) {
        this._router.navigate(["ProjectView", { id: project.id }])
    }

    deleteProject(project: Project) {
        this._projectService.deleteProject(project.id);
        location.reload();
    }

    ngOnInit() {
        this._projectService.getProjects()
            .subscribe(
            projects_list => this.projects_list = projects_list,
            error => console.log(error)
            );
    }
}
