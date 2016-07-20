import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService, ObjectToArrayPipe } from '../../shared';
import { Customer } from '../customer.interface';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'customer-create',
    templateUrl: './app/+customer/customer-create/customer-create.component.html',
    providers: [DataService, ObjectToArrayPipe, ToastsManager]
})

export class CustomerCreateComponent implements OnInit {
    data: any;
    list_missions: any[];
    customer: Customer;

    constructor(private _dataService: DataService, private _router: Router, private _objectToArrayPipe: ObjectToArrayPipe, private _toastr: ToastsManager) { }

    cancel() {
        this._router.navigate(['/Home/Customer']);
    }
    onSubmit() {
        if (this.customer.mission != '' && this.customer.name != '') {
            this._dataService.postDataCustomer(this.customer);
            this._router.navigate(['/Home/Customer']);
            this._toastr.success('Customer created')
        }
        else{
           this._toastr.error('Thank you to fill the fields', 'Oops!') 
        }
    }

    ngOnInit() {
        this.customer = {
            active: false,
            mission: '',
            name: ''
        }

        this._dataService.getAllData('mission').then((snapshot) => {
            this.data = snapshot.val();
            this.list_missions = this._objectToArrayPipe.transform(this.data);
        })
    }
}
