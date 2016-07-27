import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES} from '@angular/router';

import { DataService, ObjectToArrayPipe } from '../../shared';
import { Skill } from '../skill.interface';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'skill-list',
    templateUrl: './app/+skill/skill-list/skill-list.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [DataService, ObjectToArrayPipe, ToastsManager]
})

export class SkillListComponent implements OnInit {
    list_skills: any[];
    data: any;
  
    constructor(private _dataService: DataService, private _objectToArrayPipe: ObjectToArrayPipe, private _toastr: ToastsManager) { }

    deleteData(skill: Skill) {
        this._dataService.deleteData('skill',skill.id);
        this.ngOnInit();
        this._toastr.success('Skill deleted');
    }
    ngOnInit() {
        this._dataService.getAllData('skill').then((snapshot) => {
            this.data = snapshot.val();
            this.list_skills = this._objectToArrayPipe.transform(this.data);
        })
    }
}
