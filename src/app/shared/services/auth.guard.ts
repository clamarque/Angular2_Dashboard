import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { DataService } from './';
import { ObjectToArrayPipe } from '../';

@Injectable()

export class AuthGuard implements CanActivate {

public infos = {};
    constructor( private _router: Router) { }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable <boolean> | boolean {
        //if(!this.isAuthenticated()) return false;
        return this.isAuthenticated();

        /*if(route.data['admin']){

        }*/
    }

    isAuthenticated() {
        let user = firebase.auth().currentUser;
        //console.log(user);
        if (user) {
            console.log('connected');
            return true;
        } else {
            console.log('not connected');
            this._router.navigate(['']);
            return false;
        }
    }
    isAdmin(info: any) {
                /*let self = this;
          firebase.database().ref('collaborator/' + info.uid).once('value').then(function (snapshot) {
                self.infos = snapshot.val();
                console.log(self.infos);
                if (self.infos.admin == true) {
                    return true
                }
                else {
                    //this._router.navigate(['Home']);
                    return false
                }
            })*/
    }
}