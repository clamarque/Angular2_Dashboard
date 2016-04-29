import {Injectable, Inject} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

import {FirebaseService} from "../login/firebase.service";

import {Project} from './project';

@Injectable()

export class ProjectService {
    private _postUrl;

    constructor(private _firebaseService: FirebaseService, private _http: Http) {
        //this._postUrl = this._firebaseService.appUrl + "project.json"

    }

    Create(name: string, description: string, date: string) {
        //console.log('function create');
        const body = JSON.stringify({ name: name, description: description, date: date});

        return this._http.post('https://blazing-inferno-9370.firebaseio.com/project.json', body)
            .map(response => response.json());
    }

    getProjects(): Observable<Project[]> {
        return this._http.get('https://blazing-inferno-9370.firebaseio.com/project.json')
            .map(res => {
                let data = res.json();
                let result: Array<Project> = [];
                Object.keys(data).forEach(function (key) {
                    let postObject: Project;
                    postObject = { id: key, name: data[key].name, description: data[key].description, date: data[key].date };
                    result.push(postObject);
                })
                return result
            })
    }

    getProject(id: string): Observable<Project> {
        var url: string;
        url = "https://blazing-inferno-9370.firebaseio.com/" + "project/" + id + ".json"
        return this._http.get(url)
            .map(response => response.json());
    }
    
    deleteProject(id: string): Observable<Project> {
        var url: string;
        url = "https://blazing-inferno-9370.firebaseio.com/" + "project/" + id + ".json"
        return this._http.delete(url)
            .map(response => response.json());
    }

}