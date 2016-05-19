//Angular
import {Component} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';

//Service
import {LoginService} from "./login.service";

@Component({
    selector: 'login',
    providers: [LoginService],
    templateUrl: './dev/login/login.component.html',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, ROUTER_DIRECTIVES],
})

export class LoginComponent {

    msg: string;
    logged: boolean;

    constructor(private _loginService: LoginService, private _router: Router) { }

    login(email, password) {
        let self = this;
        this._loginService.login(email, password, function (data) {
            if (data) {
                localStorage.setItem('username', email);
                self.msg = "Login Successful";
                self.logged = true;
                self._router.navigate(['/Home']);
                console.log('Login success');
            }
            else {
                console.log('error login');
                self.msg = "Login Failed!";
                self.logged = false;
            }
        })
    }
}
