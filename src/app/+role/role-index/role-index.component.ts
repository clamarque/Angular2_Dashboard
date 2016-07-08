//Angular
import { CORE_DIRECTIVES } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router, RouteSegment } from '@angular/router';

import { DataService, ObjectToArrayPipe } from "../../shared";
import { Role } from '../role';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'role-index',
    templateUrl: './app/+role/role-index/role-index.component.html',
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES],
    providers: [DataService, ObjectToArrayPipe, ToastsManager]
})

export class RoleIndexComponent implements OnInit {
    list_roles: any[];
    data: any;
  
    constructor(private _dataService: DataService, private _router: Router, private _objectToArrayPipe: ObjectToArrayPipe, private _toastr: ToastsManager) { }

    deleteRole(role: Role) {
        this._dataService.deleteData('role',role.id);
        this.ngOnInit();
        this._toastr.success('role deleted');
    }

    ngOnInit() {
        this._dataService.getAllData('role').then((snapshot) => {
            this.data = snapshot.val();
            this.list_roles = this._objectToArrayPipe.transform(this.data);
        })
    }
}
