//Angular
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DataService, ObjectToArrayPipe } from "../../shared";
import { Mission } from '../mission.interface';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: "mission-view",
    templateUrl: '/app/+mission/mission-view/mission-view.component.html',
    directives: [CORE_DIRECTIVES],
    providers: [DataService, ObjectToArrayPipe, ToastsManager]
})

export class MissionViewComponent implements OnInit {

    data: any;
    list_collaborators: any[];
    mission: Mission;
    private sub; any;

    constructor(private _dataService: DataService, private _router: Router, private _route: ActivatedRoute, private _objecToArray: ObjectToArrayPipe, private _toastr: ToastsManager) { }

    cancel(){
        
    }
    
    onSubmit(model: Mission, isValid: boolean) {
        console.log(model, isValid);
        this.sub = this._route.params.subscribe(params => {
            let id = params['id'];
            this._dataService.setDataMission(id, model);
            this._router.navigate(['/Home/Mission']);
            this._toastr.success('modifications saved');
        }) 

    }

    ngOnInit() {
        this.sub = this._route.params.subscribe(params => {
            let id = params['id'];
            this._dataService.getData('mission', id).then((snapshot) => {
                this.data = snapshot.val();
                this.mission = this.data;
            })
        })

        this._dataService.getAllData('collaborator').then((snapshot) => {
            this.data = snapshot.val();
            this.list_collaborators = this._objecToArray.transform(this.data);
        })
    }
}
