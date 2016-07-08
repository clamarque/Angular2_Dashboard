//Angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService, ObjectToArrayPipe } from "../../shared";
import { Mission } from '../mission';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'mission-create',
    templateUrl: './app/+mission/mission-create/mission-create.component.html',
    providers: [DataService, ObjectToArrayPipe, ToastsManager]
})

export class MissionCreateComponent implements OnInit {
    list_collaborators: any[];
    data: any;

    constructor(private _dataService: DataService, private _router: Router, private _objectToArrayPipe: ObjectToArrayPipe, private _toastr: ToastsManager) { }

    createMission(name, description, date, collaborator) {
        this._dataService.postDataMission(name, description, date, collaborator);
        this._router.navigate(['/Home/Mission']);
    }
    ngOnInit() {
          this._dataService.getAllData('collaborator').then((snapshot) => {
            this.data = snapshot.val();
            this.list_collaborators = this._objectToArrayPipe.transform(this.data);
        })
    }
}