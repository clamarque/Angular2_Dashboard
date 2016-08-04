import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

import { AuthService } from '../../shared';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'signin',
    templateUrl: './app/+collaborator/collaborator-signin/collaborator-signin.component.html',
    directives: [ROUTER_DIRECTIVES,MD_BUTTON_DIRECTIVES, MD_INPUT_DIRECTIVES, MD_CARD_DIRECTIVES],
    providers: [AuthService, ToastsManager]
})

export class CollaboratorSignInComponent implements OnInit {
    email: string;
    password: string;


    constructor(private _authService: AuthService, private _router: Router, private _toastr: ToastsManager) { }

    onSubmit() {
        if (this.email != '' && this.password != '') {
            this._authService.signIn(this.email, this.password, (error: any) => {
                if (error) {
                    this._toastr.error(error, 'Oops !')
                }
                else {
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