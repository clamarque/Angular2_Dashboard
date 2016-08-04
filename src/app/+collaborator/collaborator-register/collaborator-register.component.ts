import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService, DataService, ObjectToArrayPipe, TitlePageService } from '../../shared';
import { Collaborator } from '../collaborator.interface';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';


@Component({
    selector: 'collaborator-register',
    templateUrl: './app/+collaborator/collaborator-register/collaborator-register.component.html',
    directives: [MD_BUTTON_DIRECTIVES, MD_INPUT_DIRECTIVES],
    providers: [AuthService, DataService, ObjectToArrayPipe, TitlePageService]
})
export class CollaboratorRegisterComponent implements OnInit {
    list_infosUser: Collaborator;
    list_roles: any[];
    temp: any;

    constructor(
        private _dataService: DataService,
        private _router: Router,
        private _authenticationService: AuthService,
        private _objectToArrayPipe: ObjectToArrayPipe,
        private _titlePageService: TitlePageService) { }

    cancel() {
        this._router.navigate(['/Home/Collaborator']);
    }

    onSubmit() {
        this._authenticationService.signUp(this.list_infosUser);
        this._router.navigate(['/Collaborator']);
    }

    ngOnInit() {
        this._titlePageService.setTitle('Create a collaborator')

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