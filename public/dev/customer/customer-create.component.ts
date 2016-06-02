//Angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Firebase
declare var firebase: any;

//Project
import { CustomerService } from "./customer.service";
import { Customer } from './customer'

import {ObjectToArrayPipe} from '../pipes/object-to-array.pipe';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'customer-create',
    templateUrl: './dev/customer/customer-create.component.html',
    providers: [CustomerService, ObjectToArrayPipe, ToastsManager]
})

export class CustomerCreateComponent implements OnInit {
    project_list: any[];
    temp: any;

    constructor(private _customerService: CustomerService, private _router: Router, private _objectToArrayPipe: ObjectToArrayPipe, private _toastr: ToastsManager) { }

    createCustomer(name,project) {
        this._customerService.postCustomer(name, project);
        this._router.navigate(['/Home/Customer']);
        this._toastr.success('Customer created');
    }
    ngOnInit() {
        firebase.database().ref('project').once('value').then((snapshot) => {
            let data = snapshot.val();
            this.temp = data;         
            this.project_list = this._objectToArrayPipe.transform(this.temp);
        });
    }
}
