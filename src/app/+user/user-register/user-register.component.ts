import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../shared/authentication.service';
import { DataService, ObjectToArrayPipe } from '../../shared';

@Component({
    selector: 'user-register',
    templateUrl: './app/+user/user-register/user-register.component.html',
    providers: [AuthenticationService, DataService, ObjectToArrayPipe]
})
export class UserRegisterComponent implements OnInit {
    list_infosUser: any;
    list_roles: any[];
    temp: any;

    constructor(private _dataService: DataService, private _router: Router, private _authenticationService: AuthenticationService, private _objectToArrayPipe: ObjectToArrayPipe) { }

    onClickCreate() {
        this._authenticationService.createUser(this.list_infosUser);
        //this._router.navigate(['/login']);
    }

    ngOnInit() {
        this.list_infosUser = {
            first: '',
            last: '',
            username: '',
            role: '',
            email: '',
            password: ''
        }

        this._dataService.getAllData('role').then((snapshot) => {
            let data = snapshot.val();
            this.temp = data;
            this.list_roles = this._objectToArrayPipe.transform(this.temp);
        })
    }
}