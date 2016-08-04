import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { DataService, ObjectToArrayPipe, TitlePageService } from '../../shared';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

@Component({
    selector: 'customer-list',
    templateUrl: './app/+customer/customer-list/customer-list.component.html',
    directives: [ROUTER_DIRECTIVES, MD_BUTTON_DIRECTIVES],
    providers: [DataService, ObjectToArrayPipe, ToastsManager, TitlePageService]
})

export class CustomerListComponent implements OnInit {
    list_customers: any[];
    data: any;

    constructor(
        private _dataService: DataService,
        private _objectToArrayPipe: ObjectToArrayPipe,
        private _toastr: ToastsManager,
        private _titlePageService: TitlePageService) { }

    deleteCustomer(customer: any) {
        this._dataService.deleteData('customer', customer.id);
        this.ngOnInit();
        this._toastr.success('Customer deleted');
    }

    ngOnInit() {
        this._titlePageService.setTitle('Customers');
        this._dataService.getAllData('customer').then((snapshot) => {
            this.data = snapshot.val();
            this.list_customers = this._objectToArrayPipe.transform(this.data);
        })
    }
}
