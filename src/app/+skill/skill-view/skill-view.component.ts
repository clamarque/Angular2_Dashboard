//Angular
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouteSegment, OnActivate } from '@angular/router';

import { DataService } from '../../shared';
import { Skill } from '../skill';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: "skill-view",
    templateUrl: './app/+skill/skill-view/skill-view.component.html',
    directives: [CORE_DIRECTIVES],
    providers: [DataService, ToastsManager]
})

export class SkillViewComponent implements OnActivate {
    list_skills: any[];
    data: any;
   
    constructor(private _dataService: DataService, private _router: Router, private _routeSegment: RouteSegment, private _toastr: ToastsManager) { }

    routerOnActivate(current: RouteSegment) {
        let id = current.parameters['id'];
        this._dataService.getData('skill',id).then((snapshot) =>{
            this.data = snapshot.val();         
            this.list_skills = this.data;
        })
    }

    deleteSkill() {
        let id = this._routeSegment.getParam('id');
        this._dataService.deleteData('skill',id);
        this._router.navigate(['/Home/Skill']);
        this._toastr.success('Skill deleted')
    }

    setSkill(username, role) {
        let id = this._routeSegment.getParam('id');
        this._dataService.setData('skill',id, username, role);
        this._router.navigate(['/Home/Skill']);
        this._toastr.success('modifications saved');
    }
}