import { Component, OnInit, Input } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

import { AuthService, DataService, ObjectToArrayPipe, TitlePageService } from '../../shared';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav'
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar/toolbar';

@Component({
    selector: 'home-index',
    templateUrl: './app/+home/home-index/home-index.component.html',
    directives: [ROUTER_DIRECTIVES, MD_SIDENAV_DIRECTIVES, MD_TOOLBAR_DIRECTIVES],
    providers: [AuthService, DataService, ObjectToArrayPipe, TitlePageService]
})

export class HomeIndexComponent implements OnInit {

    data: any;

    public first: string;
    public last: string;
    public email: string;
    public infos: any = {};
    title: any;

    constructor(private _titlePageService: TitlePageService, private _authService: AuthService, private _dataService: DataService, private _router: Router, private _objectToArrayPipe: ObjectToArrayPipe) { }

    onSignOut() {
        this._authService.signOut();
    }

    ngOnInit() {
        setInterval(() => {
            this.title = this._titlePageService.getTitle();
        }, 1000)

        let user = firebase.auth().currentUser;
        if (user) {
            this._dataService.getData('collaborator', user.uid).then((snapshot) => {
                this.infos = snapshot.val();
                this.first = this.infos.first
                this.last = this.infos.last
                this.email = this.infos.email
            })
        }
    }
}
