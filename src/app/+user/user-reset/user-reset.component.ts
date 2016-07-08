import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

import { AuthenticationService } from '../shared/authentication.service';

@Component({
    selector: 'user-reset-password',
    templateUrl: './app/+users/user-reset.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [AuthenticationService]
})
export class UserResetComponent implements OnInit { 
    email: string;

    constructor(private _router: Router, private _authenticationService: AuthenticationService) { }

    ngOnInit() {
        if (firebase.auth().currentUser) {
            //this._router.navigate(['/resume', this.currentUser.info.username]);
        }

        this.email = '';
    }

    onClickResetPassword() {
        if (this.email != '') {
           /* this._authenticationService.sendPasswordResetEmail(this.email, (error: any) => {
                // TODO: implement call to confirm password reset
            });*/
        } 
    }
}