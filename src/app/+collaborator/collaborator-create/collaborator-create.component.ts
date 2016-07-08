//Angular
import { Component, OnInit, PLATFORM_PIPES } from '@angular/core';
import { Router } from '@angular/router';

import { DataService, ObjectToArrayPipe } from '../../shared';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

//Firebase
declare var firebase: any;

@Component({
    selector: 'collaborator-create',
    templateUrl: './app/collaborator/collaborator-create.component.html',
    providers: [DataService, ToastsManager]
})

export class CollaboratorCreateComponent implements OnInit {
    list_roles: any[];
    temp: any;

    constructor(private _dataService: DataService, private _router: Router,private _objectToArrayPipe: ObjectToArrayPipe, private _toastr: ToastsManager) { }

    createCollaborator(name, role) {
        //this._dataService.postData('collaborator', name, role);
        this._router.navigate(['/Home/Collaborator'])
        this._toastr.success('collaborator created')
    }
    ngOnInit() {
        firebase.database().ref('role').once('value').then((snapshot) => {
            let data = snapshot.val();
            this.temp = data;
            this.list_roles = this._objectToArrayPipe.transform(this.temp);
        });
    }
}
