//Angular
import { CORE_DIRECTIVES } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router, RouteSegment } from '@angular/router';

import { Collaborator } from '../collaborator';
import { DataService, ObjectToArrayPipe } from '../../shared';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'collaborator-index',
    templateUrl: './app/+collaborator/collaborator-index/collaborator-index.component.html',
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES],
    providers: [DataService,ObjectToArrayPipe, ToastsManager]
})

export class CollaboratorIndexComponent implements OnInit {
    list_collaborators: any[];
    data:any;
  
    constructor(private _dataService: DataService, private _router: Router, private _objectToArrayPipe: ObjectToArrayPipe, private _toastr: ToastsManager) { }

    deleteCollaborator(collaborator: Collaborator) {
        this._dataService.deleteData('collaborator',collaborator.id);
        this.ngOnInit();
        this._toastr.success('Collaborator deleted');
    }

    ngOnInit() {
          this._dataService.getAllData('collaborator').then((snapshot) => {
            this.data = snapshot.val();
            this.list_collaborators = this._objectToArrayPipe.transform(this.data);
        })
    }
}
