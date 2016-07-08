//Angular
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouteSegment, OnActivate } from '@angular/router';

import { Customer } from '../customer';
import { DataService, ObjectToArrayPipe } from '../../shared';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: "customer-view",
    templateUrl: './app/+customer/customer-view/customer-view.component.html',
    directives: [CORE_DIRECTIVES],
    providers: [DataService, ObjectToArrayPipe, ToastsManager]
})

export class CustomerViewComponent implements OnActivate {
    customer: Customer[];
    list_missions: any[];
    data: any;

    constructor(private _dataService: DataService, private _router: Router, private _routeSegment: RouteSegment,private _objecToArrayPipe: ObjectToArrayPipe, private _toastr: ToastsManager) { }

    routerOnActivate(current: RouteSegment) {
        let id = current.parameters['id'];
        this._dataService.getData('customer', id).then((snapshot) => {
            this.data = snapshot.val();
            this.customer = this.data;
        })

        this._dataService.getAllData('mission').then((snapshot) => {
            this.data = snapshot.val();
            this.list_missions = this._objecToArrayPipe.transform(this.data);
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
