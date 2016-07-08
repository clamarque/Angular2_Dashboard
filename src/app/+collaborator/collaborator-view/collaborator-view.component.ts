//Angular
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouteSegment, OnActivate } from '@angular/router';

import { Collaborator } from '../collaborator';
import { DataService, ObjectToArrayPipe } from '../../shared';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: "collaborator-view",
    templateUrl: './app/+collaborator/collaborator-view/collaborator-view.component.html',
    directives: [CORE_DIRECTIVES],
    providers: [DataService, ObjectToArrayPipe, ToastsManager]
})

export class CollaboratorViewComponent implements OnActivate {
    collaborator: any[];
    list_roles: any[];
    data: any;

    constructor(private _dataService: DataService, private _router: Router, private _routeSegment: RouteSegment, private _objecToArrayPipe: ObjectToArrayPipe, private _toastr: ToastsManager) { }

    routerOnActivate(current: RouteSegment) {
        let id = current.parameters['id'];
        this._dataService.getData('collaborator', id).then((snapshot) => {
            this.data = snapshot.val();
            this.collaborator = this.data;
        })
        
        this._dataService.getAllData('role').then((snapshot) => {
            this.data = snapshot.val();
            this.list_roles = this._objecToArrayPipe.transform(this.data);
        })
    }

    deleteCollaborator() {
        let id = this._routeSegment.getParam('id');
        this._dataService.deleteData('collaborator', id);
        this._router.navigate(['/Home/Collaborator']);
        this._toastr.success('Collaborator deleted')
    }

    setCollaborator(active,admin,first,last,username,role) {
        let id = this._routeSegment.getParam('id');
        this._dataService.setDataCollaborator(id, active,admin,first,last,username,role);
        this._router.navigate(['/Home/Collaborator']);
        this._toastr.success('modifications saved');
    }
}