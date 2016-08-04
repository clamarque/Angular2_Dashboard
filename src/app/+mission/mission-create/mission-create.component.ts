import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService, ObjectToArrayPipe, TitlePageService } from '../../shared';
import { Mission } from '../mission.interface';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_CHECKBOX_DIRECTIVES } from '@angular2-material/checkbox';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';

@Component({
    selector: 'mission-create',
    templateUrl: './app/+mission/mission-create/mission-create.component.html',
    directives: [MD_BUTTON_DIRECTIVES, MD_CHECKBOX_DIRECTIVES, MD_INPUT_DIRECTIVES],
    providers: [DataService, ObjectToArrayPipe, ToastsManager, TitlePageService]
})

export class MissionCreateComponent implements OnInit {

    data: any;
    list_collaborators: any[];
    mission: Mission;

    constructor(
        private _dataService: DataService,
        private _router: Router,
        private _objectToArrayPipe: ObjectToArrayPipe,
        private _toastr: ToastsManager,
        private _titlePageService: TitlePageService) { }

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
        this._titlePageService.setTitle('Create a mission');
        
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