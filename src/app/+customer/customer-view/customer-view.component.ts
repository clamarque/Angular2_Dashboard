//Angular
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable }                   from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

import { Customer } from '../customer';
import { DataService, ObjectToArrayPipe } from '../../shared';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: "customer-view",
    templateUrl: './app/+customer/customer-view/customer-view.component.html',
    directives: [CORE_DIRECTIVES],
    providers: [DataService, ObjectToArrayPipe, ToastsManager]
})

export class CustomerViewComponent implements OnInit {
    customer: Customer[];
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
    /*
   deleteCustomer() {
       let id = this._routeSegment.getParam('id');
       this._dataService.deleteData('customer', id);
       this._router.navigate(['/Home/Customer']);
       this._toastr.success('Customer deleted')
   }
   */
    onSubmit(form: NgForm) {
        console.log(form.value);

        this.sub = this._route.params.subscribe(params => {
            let id = params['id'];
            this._dataService.setDataCustomer(id, form.value.customer.name, form.value.customer.mission);
            this._router.navigate(['/Home/Customer'])
            this._toastr.success('Modifications saved')
        })
    }
    /* setCustomer(name, project) {
         let id = this._routeSegment.getParam('id');
         this._dataService.setDataCustomer(id, name, project);
         this._router.navigate(['/Home/Customer'])
         this._toastr.success('Modifications saved')
     }
     */

    ngOnInit() {
        this.sub = this._route.params.subscribe(params => {
            let id = params['id'];
            console.log('id:' + id);
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
    /*
     canDeactivate(): Observable<boolean> | boolean {
         let p = this.dialogService.confirm('Discard changes?');
    let o = Observable.fromPromise(p);
    return o;
     }*/
}
