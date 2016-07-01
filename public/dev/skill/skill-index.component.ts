//Angular
import { CORE_DIRECTIVES } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router, RouteSegment } from '@angular/router';

//Firebase
declare var firebase: any;

//Service
import { DataService } from '../shared/data.service';
import { Skill } from './skill';

import { ObjectToArrayPipe } from '../pipes/object-to-array.pipe';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'skill-index',
    templateUrl: '/dev/skill/skill-index.component.html',
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES],
    providers: [DataService, ObjectToArrayPipe, ToastsManager]
})

export class SkillIndexComponent implements OnInit {
    skills_list: any[];
    temp: any;
  
    constructor(private _dataService: DataService, private _router: Router, private _objectToArrayPipe: ObjectToArrayPipe, private _toastr: ToastsManager) { }

    deleteData(skill: Skill) {
        this._dataService.deleteData('skill',skill.id);
        this.ngOnInit();
        this._toastr.success('User deleted');
    }
    ngOnInit() {
          firebase.database().ref('skill').once('value').then((snapshot) => {
            let data = snapshot.val();
            this.temp = data;         
            this.skills_list = this._objectToArrayPipe.transform(this.temp);
        });
    }
}
