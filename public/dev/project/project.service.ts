import {Injectable, Inject} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import {LoginService} from "../login/login.service";

import {Project} from './project';

@Injectable()

export class ProjectService {
    private _postUrl;
    firebase = new Firebase("https://blazing-inferno-9370.firebaseio.com/");

    constructor(private _loginService: LoginService, private _http: Http) {
        //this._postUrl = this._firebaseService.appUrl + "project.json"
    }

    postProject(name: string, description: string, date: string, member: string) {
        this.firebase.child('project').push({ name: name, description: description, date: date, member: member })
    }

    getProjects(): Observable<Project[]> {
        return this._http.get('https://blazing-inferno-9370.firebaseio.com/project.json')
            .map(res => {
                let data = res.json();
                let result: Array<Project> = [];
                Object.keys(data).forEach(function (key) {
                    let postObject: Project;
                    postObject = { id: key, name: data[key].name, description: data[key].description, date: data[key].date, member: data[key].member };
                    result.push(postObject);
                })
                return result
            })
    }

    getProject(id: string): Observable<Project> {
        let url: string;
        url = "https://blazing-inferno-9370.firebaseio.com/" + "project/" + id + ".json"
        return this._http.get(url)
            .map(response => response.json());
    }

    deleteProject(id: string) {
        this.firebase.child('project').child(id).remove();
    }

    setProject(id: string, name: string, description: string, date: string, member: string) {
        this.firebase.child('project').child(id).set({ name: name, description: description, date: date, member: member });
    }

}