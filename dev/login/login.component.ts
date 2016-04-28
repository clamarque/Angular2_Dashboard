//Angular
import {Component} from "angular2/core";
import {Router, ROUTER_DIRECTIVES} from "angular2/router";
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';
import {TranslateService, TranslatePipe} from 'ng2-translate/ng2-translate';


//Service
import {FirebaseService} from "./firebase.service";

@Component({
    selector:'login',
    providers:[FirebaseService],
    templateUrl: './dev/login/login.html',
    directives: [CORE_DIRECTIVES,FORM_DIRECTIVES, ROUTER_DIRECTIVES],
    pipes: [TranslatePipe]
    
})

export class LoginComponent {
    
    msg: string;
    logged: boolean;
    
    constructor (public translate: TranslateService, private _firebaseService : FirebaseService,private _router: Router ){}
    
    login(email, password) {
        let self = this;
        this._firebaseService.login(email, password, function(data){
            if(data){
                localStorage.setItem('username',email);
                self.msg = "Login Successful";
                self.logged = true;
                self._router.parent.navigateByUrl('/Home');
                console.log('Login success');
            }
            else{
                console.log('error login');
                self.msg ="Login Failed!";
                self.logged =false;
            }
        })
    }  
}
