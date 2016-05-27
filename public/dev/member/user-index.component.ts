//Angular
import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router, RouteSegment } from '@angular/router';
import { CORE_DIRECTIVES } from '@angular/common';

//Firebase
declare var firebase: any;

//User
import { UserService } from "./user.service";
import { User } from './user';

import { ObjectToArrayPipe } from '../pipes/object-to-array.pipe'

@Component({
    selector: 'user-index',
    templateUrl: '/dev/member/user-index.component.html',
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES],
    providers: [UserService, ObjectToArrayPipe]
})

export class UserIndexComponent implements OnInit {
    //users_list: User[];
    users_list: any[];
    temp: any;
  
    constructor(private _userService: UserService, private _router: Router, private _objectToArrayPipe: ObjectToArrayPipe) { }

    deleteUser(user: User) {
        this._userService.deleteUser(user.id);
        this.ngOnInit();
    }

    ngOnInit() {
          firebase.database().ref('user').once('value').then((snapshot) => {
            let data = snapshot.val();
            this.temp = data;         
            this.users_list = this._objectToArrayPipe.transform(this.temp);
        });
    }
}
