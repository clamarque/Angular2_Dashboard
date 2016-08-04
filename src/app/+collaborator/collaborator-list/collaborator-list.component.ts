import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

import { DataService, ObjectToArrayPipe, TitlePageService } from '../../shared';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

@Component({
    selector: 'collaborator-list',
    templateUrl: './app/+collaborator/collaborator-list/collaborator-list.component.html',
    directives: [ROUTER_DIRECTIVES, MD_BUTTON_DIRECTIVES],
    providers: [DataService, ObjectToArrayPipe, ToastsManager, TitlePageService]
})

export class CollaboratorListComponent implements OnInit {
    list_collaborators: any[];
    data: any;

    constructor(
        private _titlePageService: TitlePageService,
        private _dataService: DataService,
        private _router: Router,
        private _objectToArrayPipe: ObjectToArrayPipe,
        private _toastr: ToastsManager) {
    }

    deleteCollaborator(collaborator: any) {
        this._dataService.deleteData('collaborator', collaborator.id);
        this.ngOnInit();
        this._toastr.success('Collaborator deleted');
    }
    orderby() {
        let self = this;
        /*firebase.database().ref('collaborator').orderByChild('username').on('child_added', function (snapshot) {
           // console.log(snapshot.val());
            self.data = snapshot.val();
            //self.list_collaborators = self._objectToArrayPipe.transform(self.data);
            self.list_collaborators = self.data;
            console.log(self.list_collaborators);

        })*/
    }

    ngOnInit() {
        this._titlePageService.setTitle('Collaborators');

        this._dataService.getAllData('collaborator').then((snapshot, prevChildKey) => {
            this.data = snapshot.val();
            this.list_collaborators = this._objectToArrayPipe.transform(this.data);
        })

    }
}

