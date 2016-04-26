import {Component, onInit} from "angular2/core";
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {TranslatePipe, TranslateService} from 'ng2-translate/ng2-translate';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';
import {Project} from './project';

import 'rxjs/add/operator/map';

//Service
import {ProjectService} from "./project.service";

@Component({
    selector:'projets-list',
    templateUrl: '/dev/projets/project.html',
    directives: [ROUTER_DIRECTIVES,FORM_DIRECTIVES,CORE_DIRECTIVES],
    pipes: [TranslatePipe],
     providers: [ProjectService]
   
})

export class ProjetsListComponent implements onInit {
 projects_list: Array<Project> = [];
   private _projectService : ProjectService;
    response: string;
    
    constructor(private translate: TranslateService,  projectService: ProjectService){
        this._projectService = projectService;
        //this.projects = this.ngOnInit();
    }
   
    ngOnInit(){
        this._projectService.getProjects()
        //.subscribe((projects) => {this.projects = projects;
            //.subscribe( response => {console.log(response.name)})
          //  });
          .subscribe(
              projects_list => this.projects_list = projects_list,
              error => console.log(error)
          );
    }
}