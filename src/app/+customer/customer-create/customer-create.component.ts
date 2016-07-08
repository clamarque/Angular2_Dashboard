//Angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Customer } from '../customer'
import { DataService, ObjectToArrayPipe } from '../../shared';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'customer-create',
    templateUrl: './app/+customer/customer-create/customer-create.component.html',
    providers: [DataService, ObjectToArrayPipe, ToastsManager]
})

export class CustomerCreateComponent implements OnInit {
    list_missions: any[];
    data: any;

    constructor(private _dataService: DataService, private _router: Router, private _objectToArrayPipe: ObjectToArrayPipe, private _toastr: ToastsManager) { }

    createCustomer(name, project) {
        this._dataService.postDataCustomer(name, project);
        this._router.navigate(['/Home/Customer']);
        this._toastr.success('Customer created');
    }
    ngOnInit() {
        this._dataService.getAllData('mission').then((snapshot) => {
            this.data = snapshot.val();
            this.list_missions = this._objectToArrayPipe.transform(this.data);
        })
    }
}
