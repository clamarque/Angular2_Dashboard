import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from "../../shared";
import { Role } from '../role.interface';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'role-create',
    templateUrl: './app/+role/role-create/role-create.component.html',
    providers: [DataService, ToastsManager]
})

export class RoleCreateComponent implements OnInit {

    role: Role;

    constructor(private _dataService: DataService, private _router: Router, private _toastr: ToastsManager) { }

    cancel(){
        //this._router.navigateByUrl('/Home/Role');
        //this._router.navigate(['/Home/Role'], {queryParams: {}});
        //window.history.back();
        this._router.navigate(['/Home/Role'])

    }
    onSubmit() {
        if (this.role.name != '') {
            this._dataService.postDataRole(this.role);
            this._router.navigate(['/Home/Role'])
            this._toastr.success('Role created')
        }
        else {
            this._toastr.error('Thank you to fill the field', 'Oops!')
        }
    }

    ngOnInit() {
        this.role = {
            name: ''
        }
    }
}