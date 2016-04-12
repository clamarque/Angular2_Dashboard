import { Component } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { Http, Headers } from 'angular2/http';
import { Router, RouterLink } from 'angular2/router';

@Component({
	selector: "app-header",
	template: `
		<div id="head-nav" class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-collapse">
        <ul class="nav navbar-nav navbar-right user-nav">
          <li class="dropdown profile_menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-user fa-2x" aria-hidden="true"></i><span> {{username}}</span> <b class="caret"></b></a>
            <ul class="dropdown-menu">
              <li><a href="#">My Account</a></li>
              <li><a href="#">Profile</a></li>
              <li><a href="#">Messages</a></li>
              <li class="divider"></li>
              <li><a href="/" (click)="logout()">Sign Out</a></li>
            </ul>
          </li>
        </ul>			
      </div>
    </div>
  </div>
	`
})

export class AppHeader {
    
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