import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Collaborator } from '../../+collaborator/collaborator.interface'

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
            self._router.navigate(['']);
        }), function (error) {
            console.log(error)
        }

    }

    signUp(collaborator: any) {
        firebase.auth().createUserWithEmailAndPassword(collaborator.email, collaborator.password).then(
            (collaborator: any) => this.createUserResume(collaborator.uid, collaborator)

        )
    }
    sendPasswordResetEmail(email: string, callback: any) {
        firebase.auth().sendPasswordResetEmail(email).then(
            () => callback(),
            (error: any) => callback(error)
        );
    }

    /*
      createUser(userDetails: any) {
        firebase.auth().createUserWithEmailAndPassword(userDetails.email, userDetails.password).then(
            (user: any) => this.createUserResume(user.uid, userDetails)

        )
    }
    */
    
    private createUserResume(uid: string, userDetails: any) {
        //console.log(userDetails.password);
        this.signIn(userDetails.email, userDetails.password, (error: any) => {
            firebase.database().ref('collaborator').child(uid).set({
                active: true, admin: false, first: userDetails.first,last: userDetails.last,username: userDetails.username,role: userDetails.role,email: userDetails.email
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