//Angular
import { CORE_DIRECTIVES } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

//Firebase
declare var firebase: any;

//Project
import { DataService } from "../shared/data.service";
import { Project } from './project';

import { ObjectToArrayPipe } from '../pipes/object-to-array.pipe'

@Component({
    selector: 'project-index',
    templateUrl: '/dev/project/project-index.component.html',
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES],
    providers: [DataService, ObjectToArrayPipe]
})

export class ProjectIndexComponent implements OnInit {
    projects_list: any[];
    temp: any;
    
    constructor(private _dataService: DataService, private _objectToArrayPipe: ObjectToArrayPipe) { }

    deleteProject(project: Project) {
        this._dataService.deleteData('mission',project.id);
        this.ngOnInit();
    }

    ngOnInit() {
           firebase.database().ref('mission').once('value').then((snapshot) => {
            let data = snapshot.val();
            this.temp = data;         
            this.projects_list = this._objectToArrayPipe.transform(this.temp);
        });
    }
}
