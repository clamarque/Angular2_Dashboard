//Angular
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouteSegment, OnActivate } from '@angular/router';

//Project
import { DataService } from '../shared/data.service';
import { Project } from './project';

import { ObjectToArrayPipe } from '../pipes/object-to-array.pipe'

//Firebase
declare var firebase: any;

import { ToastsManager } from 'ng2-toastr/ng2-toastr';


@Component({
    selector: "project-view",
    templateUrl: "/dev/project/project-view.component.html",
    directives: [CORE_DIRECTIVES],
    providers: [DataService, ObjectToArrayPipe, ToastsManager]
})

export class ProjectViewComponent implements OnActivate {
    project: any[];
    temp: any;
    users: any[];

    constructor(private _dataService: DataService, private _router: Router, private _routeSegment: RouteSegment, private _objecToArray: ObjectToArrayPipe, private _toastr: ToastsManager) { }

    routerOnActivate(current: RouteSegment) {
        let id = current.parameters['id'];
        this._dataService.getData('mission', id).then((snapshot) => {
            let data = snapshot.val();
            this.temp = data;
            this.project = this.temp;
        })


        firebase.database().ref('user').once('value').then((snapshot) => {
            let data = snapshot.val();
            this.temp = data;
            this.users = this._objecToArray.transform(this.temp);
        })
    }

    deleteProject() {
        let id = this._routeSegment.getParam('id');
        this._dataService.deleteData('mission', id);
        this._router.navigate(['/Home/Project']);
        this._toastr.success('Mission deleted')
    }

    setProject(name, description, date, member) {
        let id = this._routeSegment.getParam('id');
        this._dataService.setDataMission(id, name, description, date, member);
        this._router.navigate(['/Home/Project'])
    }
}
