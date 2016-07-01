//Angular
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouteSegment, OnActivate } from '@angular/router';

//Customer
import { DataService } from "../shared/data.service";
import { Customer } from './customer';

//Firebase
declare var firebase: any;

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: "customer-view",
    templateUrl: "/dev/customer/customer-view.component.html",
    directives: [CORE_DIRECTIVES],
    providers: [DataService, ToastsManager]
})

export class CustomerViewComponent implements OnActivate {
    customer: Customer[];
    projects: any[];
    temp: any;

    constructor(private _dataService: DataService, private _router: Router, private _routeSegment: RouteSegment, private _toastr: ToastsManager) { }

    routerOnActivate(current: RouteSegment) {
        let id = current.parameters['id'];
        this._dataService.getData('customer', id).then((snapshot) => {
            let data = snapshot.val();
            this.temp = data;
            this.customer = this.temp;
        })
    }

    deleteCustomer() {
        let id = this._routeSegment.getParam('id');
        this._dataService.deleteData('customer', id);
        this._router.navigate(['/Home/Customer']);
        this._toastr.success('Customer deleted')
    }

    setCustomer(name, project) {
        let id = this._routeSegment.getParam('id');
        this._dataService.setDataCustomer(id, name, project);
        this._router.navigate(['/Home/Customer'])
        this._toastr.success('Modifications saved')
    }
}
