//Angular
import {Component} from "angular2/core";
import {Router, ROUTER_DIRECTIVES} from "angular2/router";
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';
import {TranslateService, TranslatePipe} from 'ng2-translate/ng2-translate';


//Service
import {LoginService} from "./login.service";

@Component({
    selector:'login',
    templateUrl: './dev/login/login.html',
    pipes: [TranslatePipe],
    providers:[LoginService],
    directives: [CORE_DIRECTIVES,FORM_DIRECTIVES, ROUTER_DIRECTIVES]
    
})

export class LoginComponent {
     
      public error = false;
       errorMsg : string;
    constructor (public _loginService : LoginService){}
    login(event,username, password) {
        
        if (!this._loginService.login(username, password))
        {
           this.error=true;
           this.errorMsg = 'Failed to login';
                                        
        }
    }  
}
