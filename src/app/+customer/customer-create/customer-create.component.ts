import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService, ObjectToArrayPipe, TitlePageService } from '../../shared';
import { Customer } from '../customer.interface';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_CHECKBOX_DIRECTIVES } from '@angular2-material/checkbox';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';

@Component({
    selector: 'customer-create',
    templateUrl: './app/+customer/customer-create/customer-create.component.html',
    directives: [MD_BUTTON_DIRECTIVES, MD_CHECKBOX_DIRECTIVES, MD_INPUT_DIRECTIVES],
    providers: [DataService, ObjectToArrayPipe, ToastsManager, TitlePageService]
})

export class CustomerCreateComponent implements OnInit {
    data: any;
    list_missions: any[];
    customer: Customer;

    constructor(
        private _dataService: DataService,
        private _router: Router,
        private _objectToArrayPipe: ObjectToArrayPipe,
        private _toastr: ToastsManager,
        private _titlePageService: TitlePageService) { }

    cancel() {
        this._router.navigate(['/Home/Customer']);
    }
    onSubmit() {
        if (this.customer.mission != '' && this.customer.name != '') {
            this._dataService.postDataCustomer(this.customer);
            this._router.navigate(['/Home/Customer']);
            this._toastr.success('Customer created')
        }
        else {
            this._toastr.error('Thank you to fill the fields', 'Oops!')
        }
    }

    ngOnInit() {
        this._titlePageService.setTitle('Create a customer');

        this.customer = {
            active: false,
            mission: '',
            name: ''
        }

        this._dataService.getAllData('mission').then((snapshot) => {
            this.data = snapshot.val();
            if (this.data != null) {
                Object.keys(this.data).forEach((key) => {
                    if (!this.data[key].active) {
                        delete this.data[key];
                    }
                })
            }
            this.list_missions = this._objectToArrayPipe.transform(this.data);
        })
    }
}
