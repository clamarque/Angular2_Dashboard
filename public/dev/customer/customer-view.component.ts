//Angular
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouteSegment, OnActivate } from '@angular/router';

//Customer
import { CustomerService } from "./customer.service";
import { Customer } from './customer';

//Firebase
declare var firebase: any;

import { ObjectToArrayPipe } from '../pipes/object-to-array.pipe'

@Component({
    selector: "customer-view",
    templateUrl: "/dev/customer/customer-view.component.html",
    directives: [CORE_DIRECTIVES],
    providers: [CustomerService, ObjectToArrayPipe]
})

export class CustomerViewComponent implements OnActivate {
    customer: Customer;
    projects: any[];
    temp: any;
   
    constructor(private _customerService: CustomerService, private _router: Router, private _routeSegment: RouteSegment, private _objectToArrayPipe : ObjectToArrayPipe) { }

    routerOnActivate(current: RouteSegment) {
        let id = current.parameters['id'];
        this._customerService.getCustomer(id).subscribe(data => this.customer = data, error => console.log(error))
        
        firebase.database().ref('project').once('value').then((snapshot) => {
            let data = snapshot.val();
            this.temp = data;         
            this.projects = this._objectToArrayPipe.transform(this.temp);
        });
    }

    deleteCustomer() {
        let id = this._routeSegment.getParam('id');
        this._customerService.deleteCustomer(id);
        this._router.navigate(['/Home/Customer'])
    }

    setCustomer(name, project) {
        let id = this._routeSegment.getParam('id');
        this._customerService.setCustomer(id, name, project);
        this._router.navigate(['/Home/Customer'])
    }
}
