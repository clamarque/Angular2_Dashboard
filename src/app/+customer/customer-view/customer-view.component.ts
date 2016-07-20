//Angular
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Customer } from '../customer.interface';
import { DataService, ObjectToArrayPipe } from '../../shared';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: "customer-view",
    templateUrl: './app/+customer/customer-view/customer-view.component.html',
    directives: [CORE_DIRECTIVES],
    providers: [DataService, ObjectToArrayPipe, ToastsManager]
})

export class CustomerViewComponent implements OnInit {
    customer: Customer;
    list_missions: any[];
    data: any;
    private sub: any;

    constructor(
        private _dataService: DataService,
        private _route: ActivatedRoute,
        private _router: Router,
        private _objecToArrayPipe: ObjectToArrayPipe,
        private _toastr: ToastsManager) { }

    cancel() {
        this._router.navigate(['/Home/Customer']);
    }

    onSubmit() {
 
        console.log(this.customer);
      
        this.sub = this._route.params.subscribe(params => {
            let id = params['id'];
            this._dataService.setDataCustomer(id, this.customer);
            this._router.navigate(['/Home/Customer'])
            this._toastr.success('Modifications saved')
        })
    }
   
    ngOnInit() {
        this.sub = this._route.params.subscribe(params => {
            let id = params['id'];
            this._dataService.getData('customer', id).then((snapshot) => {
                this.data = snapshot.val();
                this.customer = this.data;
            })
        })

        this._dataService.getAllData('mission').then((snapshot) => {
            this.data = snapshot.val();
            this.list_missions = this._objecToArrayPipe.transform(this.data);
        })
    }
    
}
