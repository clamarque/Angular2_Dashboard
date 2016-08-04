import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Customer } from '../customer.interface';
import { DataService, ObjectToArrayPipe, TitlePageService } from '../../shared';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_CHECKBOX_DIRECTIVES } from '@angular2-material/checkbox';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';

@Component({
    selector: "customer-detail",
    templateUrl: './app/+customer/customer-detail/customer-detail.component.html',
    directives: [MD_BUTTON_DIRECTIVES, MD_CHECKBOX_DIRECTIVES, MD_INPUT_DIRECTIVES],
    providers: [DataService, ObjectToArrayPipe, ToastsManager, TitlePageService]
})

export class CustomerDetailComponent implements OnInit {
    customer: Customer;
    list_missions: any[];
    data: any;
    private sub: any;

    constructor(
        private _dataService: DataService,
        private _route: ActivatedRoute,
        private _router: Router,
        private _objecToArrayPipe: ObjectToArrayPipe,
        private _toastr: ToastsManager,
        private _titlePageService: TitlePageService) { }

    cancel() {
        this._router.navigate(['/Home/Customer']);
    }

    onSubmit() {
        this.sub = this._route.params.subscribe(params => {
            let id = params['id'];
            this._dataService.setDataCustomer(id, this.customer);
            this._router.navigate(['/Home/Customer'])
            this._toastr.success('Modifications saved')
        })
    }

    ngOnInit() {
        this._titlePageService.setTitle('Customer details');

        this.sub = this._route.params.subscribe(params => {
            let id = params['id'];
            this._dataService.getData('customer', id).then((snapshot) => {
                this.data = snapshot.val();
                this.customer = this.data;
            })
        })

        this._dataService.getAllData('mission').then((snapshot) => {
            this.data = snapshot.val();
            if (this.data != null) {
                Object.keys(this.data).forEach((key) => {
                    if (this.data[key].name != this.customer.mission) {
                        delete this.data[key];
                    }
                })
            }
            else{
                 this._toastr.info('no mission there . Please create a mission for this customer');
            }
            this.list_missions = this._objecToArrayPipe.transform(this.data);
        })
    }

}
