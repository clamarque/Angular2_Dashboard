//Angular
import {Component} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';

//Service
import {LoginService} from "./login.service";

@Component({
    selector: 'login',
    providers: [LoginService, ROUTER_DIRECTIVES],
    templateUrl: './dev/login/login.component.html',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, ROUTER_DIRECTIVES],
})

export class LoginComponent {
    email: string;
    password: string;
    
    msg: string;

    constructor(private _loginService: LoginService, private _router: Router) { }

    login() {
        if(this.email != '' && this.password != ''){
            this._loginService.login(this.email, this.password, (error: any) => {
                if (error) {
                    console.log('error login');
                    this.msg = "Failed Login!";
                }
                else {
                    localStorage.setItem('username', this.email);
                    this._router.navigate(['/Home']);
                }
            })
        } else {
            this.msg = "Remplir les champs nécessaires";
            console.log('error function');
        }
    }
}
