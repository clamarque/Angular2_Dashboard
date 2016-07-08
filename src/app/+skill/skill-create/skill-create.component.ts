//Angular
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from "../../shared";
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'skill-create',
    templateUrl: './app/+skill/skill-create/skill-create.component.html',
    providers: [DataService, ToastsManager]
})

export class SkillCreateComponent {

    constructor(private _dataService: DataService, private _router: Router, private _toastr: ToastsManager) { }

    createSkill(name) {
        this._dataService.postData('skill',name);
        this._router.navigate(['/Home/Skill'])
        this._toastr.success('Skill created')
    }
}