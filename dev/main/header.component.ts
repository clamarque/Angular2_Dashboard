import {Component} from 'angular2/core';
import { Router, RouterLink } from 'angular2/router';

@Component({
	selector: 'app-header',
    templateUrl: './dev/main/header.html',
    directives: [RouterLink]
    
})

export class HeaderComponent {
    
public username: String;
public password: String;
	constructor(private router: Router, private http: Http ) {
	  this.username = localStorage.getItem('username');
	  this.password = localStorage.getItem('password');
	  
	}

	logout() {
        event.preventDefault();
        
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        
        this.router.parent.navigateByUrl('/login');
	}
}
