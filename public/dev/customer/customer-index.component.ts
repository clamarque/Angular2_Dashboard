//Angular
import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES} from '@angular/router';
import { CORE_DIRECTIVES } from '@angular/common';

//Firebase
declare var firebase: any;

//CustomerIndexComponent
import {CustomerService} from './customer.service';
import {Customer} from './customer';

import {ObjectToArrayPipe} from '../pipes/object-to-array.pipe'

@Component({
    selector: 'customer-index',
    templateUrl: '/dev/customer/customer-index.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [CustomerService, ObjectToArrayPipe]
})

export class CustomerIndexComponent implements OnInit {
    customers_list: any[];
    temp: any;

    constructor(private _customerService: CustomerService, private _objectToArrayPipe: ObjectToArrayPipe) { }

    deleteCustomer(customer: Customer) {
        this._customerService.deleteCustomer(customer.id);
        this.ngOnInit();
    }
    
    ngOnInit(){
        firebase.database().ref('customer').once('value').then((snapshot) => {
            let data = snapshot.val();
            console.log(data);
            this.temp = data;         
            this.customers_list = this._objectToArrayPipe.transform(this.temp);
        });
    }
}