import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { NgForm } from '@angular/forms';

import { Collaborator } from '../collaborator.interface';
import { DataService, ObjectToArrayPipe } from '../../shared';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: "collaborator-detail",
    templateUrl: './app/+collaborator/collaborator-detail/collaborator-detail.component.html',
    providers: [DataService, ObjectToArrayPipe, ToastsManager]
})

export class CollaboratorDetailComponent implements OnInit {
    //list_infosCollaborator : Collaborator;
    collaborator: Collaborator;
    list_roles: any[];
    data: any;
    private sub; any;

    constructor(
        private _dataService: DataService,
        private _router: Router,
        private _route: ActivatedRoute,
        private _objecToArrayPipe: ObjectToArrayPipe,
        private _toastr: ToastsManager) { }

    cancel() {
        this._router.navigate(['/Home/Collaborator']);

    }
    onSubmit(form: NgForm) {
       // console.log(form.value);
        //console.log(this.collaborator);

        this.sub = this._route.params.subscribe(params => {
            let id = params['id'];
            this._dataService.setDataCollaborator(id, this.collaborator);
            this._router.navigate(['/Home/Collaborator']);
            this._toastr.success('modifications saved');
        })
    }

    ngOnInit() {
        this.sub = this._route.params.subscribe(params => {
            let id = params['id'];
            this._dataService.getData('collaborator', id).then((snapshot) => {
                this.data = snapshot.val();
                this.collaborator = this.data;
            })
        })

        this._dataService.getAllData('role').then((snapshot) => {
            this.data = snapshot.val();
            this.list_roles = this._objecToArrayPipe.transform(this.data);
        })
    }
}