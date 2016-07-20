//Angular
import { CORE_DIRECTIVES } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { DataService, ObjectToArrayPipe } from '../../shared';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'customer-index',
    templateUrl: './app/+customer/customer-index/customer-index.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [DataService, ObjectToArrayPipe, ToastsManager]
})

export class CustomerIndexComponent implements OnInit {
    list_customers: any[];
    data: any;

    constructor(private _dataService: DataService, private _objectToArrayPipe: ObjectToArrayPipe, private _toastr: ToastsManager) { }

    deleteCustomer(customer: any) {
        this._dataService.deleteData('customer', customer.id);
        this.ngOnInit();
        this._toastr.success('Customer deleted');
    }

    ngOnInit() {
        this._dataService.getAllData('customer').then((snapshot) => {
            this.data = snapshot.val();
            this.list_customers = this._objectToArrayPipe.transform(this.data);
        })
    }
}
