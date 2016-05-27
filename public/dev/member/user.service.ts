//Angular
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

//User
import { User } from './user';

//Firebase
declare var firebase: any;

@Injectable()

export class UserService {

    constructor(private _http: Http) { }

    postUser(username: string, role: string) {
        firebase.database().ref('user/').push({ username: username, role: role })
    }

    deleteUser(id: string) {
        firebase.database().ref('user/' + id).remove();
    }

    setUser(id: string, username: string, role: string) {
        firebase.database().ref('user/' + id).set({ username: username, role: role });
    }
    getUser(id: string): Observable<User> {
       let url: string;
        url = "https://blazing-inferno-9370.firebaseio.com/" + "user/" + id + ".json"
        return this._http.get(url)
            .map(response => response.json());
    }

}
