//Angular
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouteSegment, OnActivate } from '@angular/router';

//User
import { DataService } from "../shared/data.service";
import { User } from './user';

//Firebase
declare var firebase: any;

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: "user-view",
    templateUrl: "/dev/member/user-view.component.html",
    directives: [CORE_DIRECTIVES],
    providers: [DataService, ToastsManager]
})

export class UserViewComponent implements OnActivate {
    user: any[];
    temp: any;

    constructor(private _dataService: DataService, private _router: Router, private _routeSegment: RouteSegment, private _toastr: ToastsManager) { }

    routerOnActivate(current: RouteSegment) {
        let id = current.parameters['id'];
        this._dataService.getData('user', id).then((snapshot) => {
            let data = snapshot.val();
            this.temp = data;
            this.user = this.temp;
        })
    }

    deleteUser() {
        let id = this._routeSegment.getParam('id');
        this._dataService.deleteData('user', id);
        this._router.navigate(['/Home/Member']);
        this._toastr.success('User deleted')
    }

    setUser(username, role) {
        let id = this._routeSegment.getParam('id');
        this._dataService.setData('user', id, username, role);
        this._router.navigate(['/Home/Member']);
        this._toastr.success('modifications saved');
    }
}