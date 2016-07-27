import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { DataService, ObjectToArrayPipe } from "../../shared";

@Component({
    selector: 'mission-list',
    templateUrl: './app/+mission/mission-list/mission-list.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [DataService, ObjectToArrayPipe]
})

export class MissionListComponent implements OnInit {
    list_missions: any[];
    data: any;
    
    constructor(private _dataService: DataService, private _objectToArrayPipe: ObjectToArrayPipe) { }

    deleteMission(mission: any) {
        console.log(mission.id);
        this._dataService.deleteData('mission',mission.id);
        this.ngOnInit();
    }

    ngOnInit() {
          this._dataService.getAllData('mission').then((snapshot) => {
            this.data = snapshot.val();
            this.list_missions = this._objectToArrayPipe.transform(this.data);
        })
    }
}
