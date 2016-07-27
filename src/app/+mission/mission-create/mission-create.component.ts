import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService, ObjectToArrayPipe } from '../../shared';
import { Mission } from '../mission.interface';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'mission-create',
    templateUrl: './app/+mission/mission-create/mission-create.component.html',
    providers: [DataService, ObjectToArrayPipe, ToastsManager]
})

export class MissionCreateComponent implements OnInit {

    data: any;
    list_collaborators: any[];
    mission: Mission;

    constructor(private _dataService: DataService, private _router: Router, private _objectToArrayPipe: ObjectToArrayPipe, private _toastr: ToastsManager) { }

    cancel() {
        this._router.navigate(['/Home/Mission']);
    }

    onSubmit() {
        if (this.mission.name != '') {
            this._dataService.postDataMission(this.mission);
            this._router.navigate(['/Home/Mission']);
        }
        else {
            this._toastr.error('Thank you to fill the fields', 'Oops!')
        }
    }

    ngOnInit() {
        this.mission = {
            active: false,
            name: '',
            description: '',
            dateStart: '',
            dateEnd: '',
            collaborator: '',
        }

        this._dataService.getAllData('collaborator').then((snapshot) => {
            this.data = snapshot.val();

            if (this.data != null) {
                Object.keys(this.data).forEach((key) => {
                    if (!this.data[key].active) {
                        delete this.data[key];
                    }
                })
            }

            this.list_collaborators = this._objectToArrayPipe.transform(this.data);
        })
    }

}