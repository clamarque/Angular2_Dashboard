"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var shared_1 = require('../../shared');
var ng2_toastr_1 = require('ng2-toastr/ng2-toastr');
var CustomerIndexComponent = (function () {
    function CustomerIndexComponent(_dataService, _objectToArrayPipe, _toastr) {
        this._dataService = _dataService;
        this._objectToArrayPipe = _objectToArrayPipe;
        this._toastr = _toastr;
    }
    CustomerIndexComponent.prototype.deleteCustomer = function (customer) {
        this._dataService.deleteData('customer', customer.id);
        this.ngOnInit();
        this._toastr.success('Customer deleted');
    };
    CustomerIndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._dataService.getAllData('customer').then(function (snapshot) {
            _this.data = snapshot.val();
            _this.list_customers = _this._objectToArrayPipe.transform(_this.data);
        });
    };
    CustomerIndexComponent = __decorate([
        core_1.Component({
            selector: 'customer-index',
            templateUrl: './app/+customer/customer-index/customer-index.component.html',
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [shared_1.DataService, shared_1.ObjectToArrayPipe, ng2_toastr_1.ToastsManager]
        }), 
        __metadata('design:paramtypes', [shared_1.DataService, shared_1.ObjectToArrayPipe, ng2_toastr_1.ToastsManager])
    ], CustomerIndexComponent);
    return CustomerIndexComponent;
}());
exports.CustomerIndexComponent = CustomerIndexComponent;
//# sourceMappingURL=customer-index.component.js.map