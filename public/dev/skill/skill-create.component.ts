//Angular
import { Component } from '@angular/core';
import { Router } from '@angular/router';

//Service
import { DataService } from "../shared/data.service";

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'skill-create',
    templateUrl: './dev/skill/skill-create.component.html',
    providers: [DataService, ToastsManager]
})

export class SkillCreateComponent {

    constructor(private _dataService: DataService, private _router: Router, private _toastr: ToastsManager) { }

    createUser(name, role) {
        this._dataService.postData('skill',name, role);
        this._router.navigate(['/Home/Skill'])
        this._toastr.success('Skill created')
    }
}