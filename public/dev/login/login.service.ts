import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
//import {Router, ROUTER_DIRECTIVES} from '@angular/router';

@Injectable()
export class LoginService {
    appUrl: string = "https://blazing-inferno-9370.firebaseio.com/";

   // firebase = new Firebase("https://blazing-inferno-9370.firebaseio.com/");


    /* setUser(username: string, password: string){
         const body = JSON.stringify({username: username, password: password});
         
        return this._http.post('https://blazing-inferno-9370.firebaseio.com/user.json', body)
         .map(response => response.json());
       */

    login(email: string, password: string, callback) {
        firebase.auth().signInWithEmailAndPassword({
            email: email,
            password: password
        }, function (error, data) {
            if (error) {
                callback(false)
            } else {
                return callback(data.token);
            }

        })
    }
}