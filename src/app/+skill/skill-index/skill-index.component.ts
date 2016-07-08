//Angular
import { CORE_DIRECTIVES } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router, RouteSegment } from '@angular/router';

import { DataService, ObjectToArrayPipe } from '../../shared';
import { Skill } from '../skill';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'skill-index',
    templateUrl: './app/+skill/skill-index/skill-index.component.html',
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES],
    providers: [DataService, ObjectToArrayPipe, ToastsManager]
})

export class SkillIndexComponent implements OnInit {
    list_skills: any[];
    data: any;
  
    constructor(private _dataService: DataService, private _router: Router, private _objectToArrayPipe: ObjectToArrayPipe, private _toastr: ToastsManager) { }

    deleteData(skill: Skill) {
        this._dataService.deleteData('skill',skill.id);
        this.ngOnInit();
        this._toastr.success('User deleted');
    }
    ngOnInit() {
        this._dataService.getAllData('skill').then((snapshot) => {
            this.data = snapshot.val();
            this.list_skills = this._objectToArrayPipe.transform(this.data);
        })
    }
}
