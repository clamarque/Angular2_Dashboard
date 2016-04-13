import {Injectable} from "angular2/core";
import {Http, Headers} from "angular2/http";
import { Router, RouterLink } from 'angular2/router';
import 'rxjs/add/operator/map';


@Injectable()

export class LoginService{
    
    constructor (private _http: Http, private router: Router) {}
    
    login(username:string,password:string){
        
        console.log(username);
        console.log(password);
        /*
        let json = JSON.stringify({username, password});
        let headers = new Headers();
        console.log(headers);
        
       headers.append('Content-Type', 'application/x-www-form-urlencoded');
    */
        localStorage.setItem('username',username);
        localStorage.setItem('password', password);
            
        
        
        this.router.parent.navigateByUrl('/home');
       
        /*
       this._http.post('http://10.226.166.18/PIC_BO/PIC/projet/',json,{ headers })
            .subscribe(
                response => {
                    console.log('methode post');
                    //localStorage.setItem('username',response.json().data['username']);
                    this.loggedIn = true;
                    this.router.parent.navigateByUrl('/home');
                    
                },
                error => {
                    console.log(error);
                },
                () => console.log('completed')
            );

    }*/
    }
}