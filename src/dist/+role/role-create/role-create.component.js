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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var shared_1 = require("../../shared");
var ng2_toastr_1 = require('ng2-toastr/ng2-toastr');
var RoleCreateComponent = (function () {
    function RoleCreateComponent(_dataService, _router, _toastr) {
        this._dataService = _dataService;
        this._router = _router;
        this._toastr = _toastr;
    }
    RoleCreateComponent.prototype.createRole = function (name) {
        this._dataService.postDataRole(name);
        this._router.navigate(['/Home/Role']);
        this._toastr.success('Role created');
    };
    RoleCreateComponent = __decorate([
        core_1.Component({
            selector: 'role-create',
            templateUrl: './app/+role/role-create/role-create.component.html',
            providers: [shared_1.DataService, ng2_toastr_1.ToastsManager]
        }), 
        __metadata('design:paramtypes', [shared_1.DataService, router_1.Router, ng2_toastr_1.ToastsManager])
    ], RoleCreateComponent);
    return RoleCreateComponent;
}());
exports.RoleCreateComponent = RoleCreateComponent;
//# sourceMappingURL=role-create.component.js.map