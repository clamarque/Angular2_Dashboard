//Angular
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouteSegment, OnActivate } from '@angular/router';

import { DataService, ObjectToArrayPipe } from "../../shared";
import { Mission } from '../mission';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: "mission-view",
    templateUrl: '/app/+mission/mission-view/mission-view.component.html',
    directives: [CORE_DIRECTIVES],
    providers: [DataService, ObjectToArrayPipe, ToastsManager]
})

export class MissionViewComponent implements OnActivate {
    mission: any[];
    data: any;
    list_collaborators: any[];

    constructor(private _dataService: DataService, private _router: Router, private _routeSegment: RouteSegment, private _objecToArray: ObjectToArrayPipe, private _toastr: ToastsManager) { }

    routerOnActivate(current: RouteSegment) {
        let id = current.parameters['id'];
        this._dataService.getData('mission', id).then((snapshot) => {
            this.data = snapshot.val();
            this.mission = this.data;
        })

        this._dataService.getAllData('collaborator').then((snapshot) => {
            this.data = snapshot.val();
            this.list_collaborators = this._objecToArray.transform(this.data);
        })
    }

    deleteMission() {
        let id = this._routeSegment.getParam('id');
        this._dataService.deleteData('mission', id);
        this._router.navigate(['/Home/Mission']);
        this._toastr.success('Mission deleted')
    }

    setMission(name, description, date, collaborator) {
        let id = this._routeSegment.getParam('id');
        this._dataService.setDataMission(id, name, description, date, collaborator);
        this._router.navigate(['/Home/Mission'])
    }
}
