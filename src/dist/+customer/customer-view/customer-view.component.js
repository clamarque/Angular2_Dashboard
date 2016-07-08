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
//Angular
var common_1 = require('@angular/common');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var shared_1 = require('../../shared');
var ng2_toastr_1 = require('ng2-toastr/ng2-toastr');
var CustomerViewComponent = (function () {
    function CustomerViewComponent(_dataService, _router, _routeSegment, _objecToArrayPipe, _toastr) {
        this._dataService = _dataService;
        this._router = _router;
        this._routeSegment = _routeSegment;
        this._objecToArrayPipe = _objecToArrayPipe;
        this._toastr = _toastr;
    }
    CustomerViewComponent.prototype.routerOnActivate = function (current) {
        var _this = this;
        var id = current.parameters['id'];
        this._dataService.getData('customer', id).then(function (snapshot) {
            _this.data = snapshot.val();
            _this.customer = _this.data;
        });
        this._dataService.getAllData('mission').then(function (snapshot) {
            _this.data = snapshot.val();
            _this.list_missions = _this._objecToArrayPipe.transform(_this.data);
        });
    };
    CustomerViewComponent.prototype.deleteCustomer = function () {
        var id = this._routeSegment.getParam('id');
        this._dataService.deleteData('customer', id);
        this._router.navigate(['/Home/Customer']);
        this._toastr.success('Customer deleted');
    };
    CustomerViewComponent.prototype.setCustomer = function (name, project) {
        var id = this._routeSegment.getParam('id');
        this._dataService.setDataCustomer(id, name, project);
        this._router.navigate(['/Home/Customer']);
        this._toastr.success('Modifications saved');
    };
    CustomerViewComponent = __decorate([
        core_1.Component({
            selector: "customer-view",
            templateUrl: './app/+customer/customer-view/customer-view.component.html',
            directives: [common_1.CORE_DIRECTIVES],
            providers: [shared_1.DataService, shared_1.ObjectToArrayPipe, ng2_toastr_1.ToastsManager]
        }), 
        __metadata('design:paramtypes', [shared_1.DataService, router_1.Router, router_1.RouteSegment, shared_1.ObjectToArrayPipe, ng2_toastr_1.ToastsManager])
    ], CustomerViewComponent);
    return CustomerViewComponent;
}());
exports.CustomerViewComponent = CustomerViewComponent;
//# sourceMappingURL=customer-view.component.js.map