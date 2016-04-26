import {Injectable, Inject} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

import {FirebaseService} from "../login/firebase.service";

import {Project} from './project';

@Injectable()

export class ProjectService{
    private _postUrl;
    private _http: Http;
    
constructor(@Inject(Http) http: Http,private _firebaseService: FirebaseService,){
     //this._postUrl = this._firebaseService.appUrl + "project.json"
     this._http = http;
}
    
    Create(name: string, description: string){
        //console.log('function create');
        const body = JSON.stringify({name: name, description: description});

        return this._http.post('https://blazing-inferno-9370.firebaseio.com/project.json', body)
        .map(response => response.json());
    }
    
    getProjects(){
         return this._http.get('https://blazing-inferno-9370.firebaseio.com/project.json')
        .map(response => response.json());
        //.map((res) => { return <Project[]>res.json(); });
    } 
}