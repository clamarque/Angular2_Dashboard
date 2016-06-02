//Angular
import { CORE_DIRECTIVES } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

//Firebase
declare var firebase: any;

//CustomerIndexComponent
import { CustomerService } from './customer.service';
import { Customer } from './customer';

import { ObjectToArrayPipe } from '../pipes/object-to-array.pipe';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'customer-index',
    templateUrl: '/dev/customer/customer-index.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [CustomerService, ObjectToArrayPipe, ToastsManager]
})

export class CustomerIndexComponent implements OnInit {
    customers_list: any[];
    temp: any;

    constructor(private _customerService: CustomerService, private _objectToArrayPipe: ObjectToArrayPipe, private _toastr: ToastsManager) { }

    deleteCustomer(customer: Customer) {
        this._customerService.deleteCustomer(customer.id);
        this.ngOnInit();
        this._toastr.success('Customer deleted');
    }
    
    ngOnInit(){
        firebase.database().ref('customer').once('value').then((snapshot) => {
            let data = snapshot.val();
            this.temp = data;         
            this.customers_list = this._objectToArrayPipe.transform(this.temp);
        });
    }
}
