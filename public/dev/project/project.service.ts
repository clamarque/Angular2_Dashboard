//Angular
import {Injectable, Inject} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

//Project
import {Project} from './project';

//Firebase
declare var firebase: any;

@Injectable()

export class ProjectService {

    constructor(private _http: Http) { }

    postProject(name: string, description: string, date: string, member: string) {
       firebase.database().ref('project/').push({ name: name, description: description, date: date, member: member })
    }

    deleteProject(id: string) {
       firebase.database().ref('project/' + id).remove();
    }

    setProject(id: string, name: string, description: string, date: string, member: string) {
        firebase.database().ref('project/' + id).set({ name: name, description: description, date: date, member: member });
    }
    
    getProject(id: string): Observable<Project> {
        let url: string;
        url = "https://blazing-inferno-9370.firebaseio.com/" + "project/" + id + ".json"
        return this._http.get(url)
            .map(response => response.json());
    }

}