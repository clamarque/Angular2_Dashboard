import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService, TitlePageService } from "../../shared";
import { Role } from '../role.interface';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';

@Component({
    selector: 'role-create',
    templateUrl: './app/+role/role-create/role-create.component.html',
    directives: [MD_BUTTON_DIRECTIVES, MD_INPUT_DIRECTIVES],
    providers: [DataService, ToastsManager, TitlePageService]
})

export class RoleCreateComponent implements OnInit {

    role: Role;

    constructor(private _dataService: DataService, private _router: Router, private _toastr: ToastsManager, private _titlePageService: TitlePageService) { }

    cancel(){
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
        this._titlePageService.setTitle('Create a role');
        this.role = {
            name: ''
        }
    }
}