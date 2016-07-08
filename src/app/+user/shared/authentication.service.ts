import {Injectable} from '@angular/core';

declare var firebase: any;

@Injectable()

export class AuthenticationService {

    login(email: string, password: string, callback: any) {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
            (user: any) => callback(),
            (error: any) => callback(error)
        );
    }
    
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
}