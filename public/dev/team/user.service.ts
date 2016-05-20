//Angular
import {Injectable, Inject} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import {LoginService} from "../login/login.service";

import {User} from './user';

@Injectable()

export class UserService {
    
    firebase = new Firebase("https://blazing-inferno-9370.firebaseio.com/");

  constructor(private _loginService: LoginService, private _http: Http) {}
    
    
    postUser(username: string, role: string) {
        this.firebase.child('user').push({username:username,role: role})
    }
    
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
    }
    
    getUser(id: string): Observable<User>{
        let url: string;
        url = "https://blazing-inferno-9370.firebaseio.com/" + "user/" + id + ".json"
        return this._http.get(url)
            .map(response => response.json());
        
    }
    deleteUser(id: string) {
        this.firebase.child('user').child(id).remove();
    }
    
     setUser(id: string, username: string, role: string) {
        this.firebase.child('user').child(id).set({ username: username, role: role });
    }
     
}
