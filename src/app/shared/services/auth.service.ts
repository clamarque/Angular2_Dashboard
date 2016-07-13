import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Collaborator } from '../../+collaborator/collaborator'

declare var firebase: any;

@Injectable()

export class AuthService {
    constructor(private _router: Router) { }


    signIn(user: Collaborator, callback: any) {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password).then(
            (user: any) => callback(),
            (error: any) => callback(error)
        )
    }

    signOut() {
        firebase.auth().signOut();
        this._router.navigate(['/SignIn']);
    }

    signUp(user: any) {
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password).then(
            (user: any) => this.createUserResume(user.uid, user)

        )
    }

    private createUserResume(uid: string, user: any) {
        console.log('function create');
        this.signIn(user, (error: any) => {
            firebase.database().ref('collaborator').child(uid).set({
                active: true, admin: false, first: user.first, last: user.last, username: user.username, role: user.role, email: user.email
            });

        });
    }

    isAuthenticated() {
        let user = firebase.auth().currentUser;
        if (user) {
            return true;
        } else {
            return false;
        }
    }
}