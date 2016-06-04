//Angular
import { FORM_DIRECTIVES } from '@angular/common';
import {Component} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

//Service
import {LoginService} from "./login.service";

@Component({
    selector: 'login',
    providers: [LoginService, ROUTER_DIRECTIVES, ToastsManager],
    templateUrl: './dev/login/login.component.html',
    directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES]
})

export class LoginComponent {
    email: string;
    password: string;
    
    constructor(private _loginService: LoginService, private _router: Router, private _toastr: ToastsManager) { }

    login() {
        if(this.email != '' && this.password != ''){
            this._loginService.login(this.email, this.password, (error: any) => {
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
}
