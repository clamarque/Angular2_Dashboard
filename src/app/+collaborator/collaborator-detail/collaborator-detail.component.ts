import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

import { Collaborator } from '../collaborator.interface';
import { DataService, ObjectToArrayPipe, TitlePageService } from '../../shared';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_CHECKBOX_DIRECTIVES } from '@angular2-material/checkbox';
import { MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import { MD_LIST_DIRECTIVES} from '@angular2-material/list';

@Component({
    selector: "collaborator-detail",
    templateUrl: './app/+collaborator/collaborator-detail/collaborator-detail.component.html',
    directives: [ MD_INPUT_DIRECTIVES, MD_CHECKBOX_DIRECTIVES, MD_BUTTON_DIRECTIVES, MD_BUTTON_DIRECTIVES],
    providers: [DataService, ObjectToArrayPipe, ToastsManager, TitlePageService ]
})

export class CollaboratorDetailComponent implements OnInit {

    collaborator: Collaborator;
    list_roles: any[];
    data: any;
    private sub; any;

    constructor(
        private _dataService: DataService,
        private _router: Router,
        private _route: ActivatedRoute,
        private _objecToArrayPipe: ObjectToArrayPipe,
        private _toastr: ToastsManager,
        private _titlePageService: TitlePageService) { }

    cancel() {
        this._router.navigate(['/Home/Collaborator']);

    }
    onSubmit() {
        this.sub = this._route.params.subscribe(params => {
            let id = params['id'];
            this._dataService.setDataCollaborator(id, this.collaborator);
            this._router.navigate(['/Home/Collaborator']);
            this._toastr.success('modifications saved');
        })
    }

    ngOnInit() {
        this._titlePageService.setTitle('Collaborator details');

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