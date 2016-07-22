import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

import { AuthService } from '../../shared';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';


@Component({
    selector: 'user-reset-password',
    templateUrl: './app/+collaborator/collaborator-reset/collaborator-reset.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [AuthService, ToastsManager]
})
export class CollaboratorResetComponent implements OnInit { 
    email: string;

    constructor(
        private _router: Router, 
        private _authService: AuthService,
        private _toastr: ToastsManager
    ) { }

    ngOnInit() {
        this.email = '';
    }

    onClickResetPassword() {
        if (this.email != '') {
            this._authService.sendPasswordResetEmail(this.email, (error: any) => {
                if(error) {
                    this._toastr.error(error, 'Oops !')
                }
                else {
                    this._toastr.success(this.email, 'Thank you! an email is sent to you')
                    this._router.navigate(['']);
                }
            });
        } 
    }

    cancel() {
        this._router.navigate(['']);
    }
}