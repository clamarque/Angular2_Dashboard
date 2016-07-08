//Angular
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from "../../shared";
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'role-create',
    templateUrl: './app/+role/role-create/role-create.component.html',
    providers: [DataService, ToastsManager]
})

export class RoleCreateComponent {

    constructor(private _dataService: DataService, private _router: Router, private _toastr: ToastsManager) { }

    createRole(name) {
        this._dataService.postDataRole(name);
        this._router.navigate(['/Home/Role'])
        this._toastr.success('Role created')
    }
}