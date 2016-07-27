import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService, DataService, ObjectToArrayPipe } from '../../shared';
import { Collaborator } from '../collaborator.interface';

@Component({
    selector: 'collaborator-register',
    templateUrl: './app/+collaborator/collaborator-register/collaborator-register.component.html',
    providers: [AuthService, DataService, ObjectToArrayPipe]
})
export class CollaboratorRegisterComponent implements OnInit {
    list_infosUser: Collaborator;
    list_roles: any[];
    temp: any;

    constructor(private _dataService: DataService, private _router: Router, private _authenticationService: AuthService, private _objectToArrayPipe: ObjectToArrayPipe) { }

    onSubmit() {
        this._authenticationService.signUp(this.list_infosUser);
        this._router.navigate(['/Collaborator']);
    }

    ngOnInit() {
        this.list_infosUser = {
            active: false,
            admin: false,
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