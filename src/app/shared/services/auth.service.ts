import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Collaborator } from '../../+collaborator/collaborator'

declare var firebase: any;

@Injectable()

export class AuthService {
    constructor(private _router: Router) { }


    signIn(email: string, password: string, callback: any) {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
            (user: any) => callback(),
            (error: any) => callback(error)
        );
    }

    signOut() {
        let self = this;
        firebase.auth().signOut().then(function () {
            self._router.navigate(['/SignIn']);
        }), function (error) {
            console.log(error)
        }

    }

    signUp(user: any) {
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password).then(
            (user: any) => this.createUserResume(user.uid, user)

        )
    }

    /*
      createUser(userDetails: any) {
        firebase.auth().createUserWithEmailAndPassword(userDetails.email, userDetails.password).then(
            (user: any) => this.createUserResume(user.uid, userDetails)

        )
    }
    
    private createUserResume(uid: string, userDetails: any) {
        console.log('function create');
        this.login(userDetails.email, userDetails.password, (error: any) => {
            firebase.database().ref('collaborator').child(uid).set({
                active: true, admin: false, first: userDetails.first,last: userDetails.last,username: userDetails.username,role: userDetails.role,email: userDetails.email
            });

        });
    }  
*/
    isAuthenticated() {
        let user = firebase.auth().currentUser;
        if (user) {
            return true;
        } else {
            return false;
        }
    }
}