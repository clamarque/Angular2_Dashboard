//Angular
import {Injectable, Inject} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import {User} from './user';

declare var firebase: any;

@Injectable()

export class UserService {

    constructor(private _http: Http) { }

    postUser(username: string, role: string) {
        firebase.database().ref('user/').push({ username: username, role: role })
    }
    /*
    getUsers(): Observable<User[]> {
        return this._http.get('https://blazing-inferno-9370.firebaseio.com/user.json')
            .map(res => {
                let data = res.json();
                let result: Array<User> = [];
                Object.keys(data).forEach(function (key) {
                    let postObject: User;
                    postObject = { id: key, username: data[key].username, role: data[key].role};
                    result.push(postObject);
                })
                return result
            })
    }*/
    getUsers() {
        return Observable.create((observer) => {
            firebase.database().ref('user/').once('value').then(function (snapshot) {
                console.log(snapshot.val());
                observer.next(snapshot.val());
            })
        })

    }

    getUser(id: string): Observable<User> {
        let url: string;
        url = "https://blazing-inferno-9370.firebaseio.com/" + "user/" + id + ".json"
        return this._http.get(url)
            .map(response => response.json());

    }

    deleteUser(id: string) {
        firebase.database().ref('user/' + id).remove();
    }

    setUser(id: string, username: string, role: string) {
        firebase.database().ref('user/' + id).set({ username: username, role: role });
    }

}
