import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { DataService, ObjectToArrayPipe, TitlePageService } from "../../shared";
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

@Component({
    selector: 'mission-list',
    templateUrl: './app/+mission/mission-list/mission-list.component.html',
    directives: [ROUTER_DIRECTIVES, MD_BUTTON_DIRECTIVES],
    providers: [DataService, ObjectToArrayPipe, TitlePageService]
})

export class MissionListComponent implements OnInit {
    list_missions: any[];
    data: any;
    
    constructor(
        private _dataService: DataService,
        private _objectToArrayPipe: ObjectToArrayPipe,
        private _titlePageService: TitlePageService) { }

    deleteMission(mission: any) {
        console.log(mission.id);
        this._dataService.deleteData('mission',mission.id);
        this.ngOnInit();
    }

    ngOnInit() {
        this._titlePageService.setTitle('Missions');
          this._dataService.getAllData('mission').then((snapshot) => {
            this.data = snapshot.val();
            this.list_missions = this._objectToArrayPipe.transform(this.data);
        })
    }
}
