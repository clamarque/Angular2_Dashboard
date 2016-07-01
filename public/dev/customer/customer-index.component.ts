//Angular
import { CORE_DIRECTIVES } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

//Firebase
declare var firebase: any;

//CustomerIndexComponent
import { DataService } from '../shared/data.service';
import { Customer } from './customer';

import { ObjectToArrayPipe } from '../pipes/object-to-array.pipe';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'customer-index',
    templateUrl: '/dev/customer/customer-index.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [DataService, ObjectToArrayPipe, ToastsManager]
})

export class CustomerIndexComponent implements OnInit {
    customers_list: any[];
    temp: any;

    constructor(private _dataService: DataService, private _objectToArrayPipe: ObjectToArrayPipe, private _toastr: ToastsManager) { }

    deleteCustomer(customer: Customer) {
        this._dataService.deleteData('customer',customer.id);
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
