//Angular
import { Component } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { Http, Headers } from 'angular2/http';
import { Router, RouterLink} from 'angular2/router';

@Component({
    selector: 'home',
    templateUrl: './dev/home/home.html',
    directives: [CORE_DIRECTIVES, RouterLink]
})


export class HomeComponent{
    
    public username: string;
    public password: string;
    
     constructor(private router: Router, private http: Http ) {
	  this.username = localStorage.getItem('username');
	  this.password = localStorage.getItem('password');
	  
	}
    
    logout(event) {
        event.preventDfault();
        
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        
	    this.router.parent.navigateByUrl('/login');
	}
}
