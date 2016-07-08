//Angular
import { FORM_DIRECTIVES } from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';

import { AuthenticationService } from "../shared/authentication.service";
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'user-login',
    providers: [AuthenticationService, ROUTER_DIRECTIVES, ToastsManager],
    templateUrl: './app/+user/user-login/user-login.component.html',
    directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES]
})

export class UserLoginComponent implements OnInit {
    email: string;
    password: string;
    
    constructor(private _authenticationService: AuthenticationService, private _router: Router, private _toastr: ToastsManager) { }

    login() {
        if(this.email != '' && this.password != ''){
            this._authenticationService.login(this.email, this.password, (error: any) => {
                if (error) {
                    this._toastr.error('Incorrect username or password', 'Oops !')
                }
                else {
                    localStorage.setItem('username', this.email);
                    this._router.navigate(['/Home']);
                    this._toastr.success( this.email, 'Welcome back');
                }
            })
        } else {
            this._toastr.error('Thank you to complete follow areas','Oops!')
        }
    }
    
    ngOnInit(){
        this.email= '';
        this.password= '';
    }
}
