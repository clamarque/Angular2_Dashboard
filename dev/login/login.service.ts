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
        
        /////// identifiants mockés
        let   userRef:any;
        let passwordRef:any;  
 
        userRef="test";
        passwordRef="test";
        
        ///////verif identifiants mockés
       if ((username===userRef)&& (password===passwordRef))
        {
           localStorage.setItem('username',username);
           localStorage.setItem('password', password);
           
           this.router.parent.navigateByUrl('/home');
       }
        else{
            localStorage.removeItem('username');
            localStorage.removeItem('password');
        }
       
        
      
        //call webservice
        /*
        let json = JSON.stringify({username, password});
        let headers = new Headers();
        console.log(headers);
        
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
       
    
       this._http.post('http://10.226.166.13/PIC_BO/auth',json,{ headers })
            .subscribe(
                response => {
                    console.log('methode post');
                    //localStorage.setItem('username',response.json().data['username']);
                    
                    this.router.parent.navigateByUrl('/home');
                    
                },
                error => {
                    console.log(error);
                },
                () => console.log('completed')
            )
            */
    }
}
