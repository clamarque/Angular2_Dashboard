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

    cancel(){
        this._router.navigate(['/Home/Mission']);
    }

    onSubmit(model: Mission, isValid: boolean) {
        console.log(model, isValid);
        if (isValid = true) {
            this._dataService.postDataMission(model);
            this._router.navigate(['/Home/Mission']);
        }
        else {
            console.log('error')
        }

    }

    ngOnInit() {
        this.mission = {
            name: '',
            description: '',
            dateStart: '',
            dateEnd: '',
            collaborator: '',
        }

        this._dataService.getAllData('collaborator').then((snapshot) => {
            this.data = snapshot.val();
            this.list_collaborators = this._objectToArrayPipe.transform(this.data);
        })
    }

}