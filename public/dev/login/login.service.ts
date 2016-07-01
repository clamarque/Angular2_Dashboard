import {Injectable} from '@angular/core';

declare var firebase: any;

@Injectable()

export class LoginService {

    login(email: string, password: string, callback: any) {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
            (user: any) => callback(),
            (error: any) => callback(error)
        );
    }
}