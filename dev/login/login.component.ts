//Angular
import {Component} from "angular2/core";
import {Router, RouterLink} from "angular2/router";
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';

//Service
import {LoginService} from "./login.service";

@Component({
    selector:'login',
    templateUrl: './dev/login/login.html',
    providers:[LoginService],
    directives: [CORE_DIRECTIVES,FORM_DIRECTIVES, RouterLink]
    
})

export class LoginComponent {
     
    constructor (public _loginService : LoginService){}
    
    
    login(event,username, password) {
        
        event.preventDefault();
        
        this._loginService.login(username, password)
    }  
}
