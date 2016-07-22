import { FORM_DIRECTIVES } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

import { AuthService } from '../../shared';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'signin',
    templateUrl: './app/+collaborator/collaborator-signin/collaborator-signin.component.html',
    directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES],
    providers: [AuthService, ToastsManager]
})

export class CollaboratorSignInComponent implements OnInit {
    email: string;
    password: string;

    constructor(private _authService: AuthService, private _router: Router, private _toastr: ToastsManager) { }

    onSignIn() {
        if (this.email != '' && this.password != '') {
            this._authService.signIn(this.email, this.password, (error: any) => {
                if (error) {
                    this._toastr.error(error, 'Oops !')
                }
                else {
                    localStorage.setItem('username', this.email);
                    this._router.navigate(['/Home']);
                    this._toastr.success(this.email, 'Welcome back');
                }
            })
        } else {
            this._toastr.error('Thank you to complete follow areas', 'Oops!')
        }
    }

    ngOnInit() {
        this.email = '';
        this.password = '';
    }
}