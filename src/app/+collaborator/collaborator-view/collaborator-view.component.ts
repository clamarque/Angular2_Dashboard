//Angular
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { NgForm } from '@angular/forms';

import { Collaborator } from '../collaborator';
import { DataService, ObjectToArrayPipe } from '../../shared';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: "collaborator-view",
    templateUrl: './app/+collaborator/collaborator-view/collaborator-view.component.html',
    directives: [CORE_DIRECTIVES],
    providers: [DataService, ObjectToArrayPipe, ToastsManager]
})

export class CollaboratorViewComponent implements OnInit {
    //list_infosCollaborator : Collaborator;
    //collaborator: any[];
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

    /*
    deleteCollaborator() {
        let id = this._routeSegment.getParam('id');
        this._dataService.deleteData('collaborator', id);
        this._router.navigate(['/Home/Collaborator']);
        this._toastr.success('Collaborator deleted')
    }
    */
    onSubmit(form: NgForm) {
        console.log(form.value);
        console.log(this.collaborator);
        
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