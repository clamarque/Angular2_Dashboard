import { Component } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { Http, Headers } from 'angular2/http';
import { Router, RouterLink } from 'angular2/router';

import {AppHeader} from '../main/app-header';


@Component({
    selector: 'home',
    templateUrl: './dev/home/home.html',
    directives: [CORE_DIRECTIVES, RouterLink, AppHeader]
})


export class HomeComponent{
    
     constructor(private router: Router, private http: Http ) {
	  this.username = localStorage.getItem('username');
	  this.password = localStorage.getItem('password');
	  
	}

}