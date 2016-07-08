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
var authentication_service_1 = require("../shared/authentication.service");
var ng2_toastr_1 = require('ng2-toastr/ng2-toastr');
var UserLoginComponent = (function () {
    function UserLoginComponent(_authenticationService, _router, _toastr) {
        this._authenticationService = _authenticationService;
        this._router = _router;
        this._toastr = _toastr;
    }
    UserLoginComponent.prototype.login = function () {
        var _this = this;
        if (this.email != '' && this.password != '') {
            this._authenticationService.login(this.email, this.password, function (error) {
                if (error) {
                    _this._toastr.error('Incorrect username or password', 'Oops !');
                }
                else {
                    localStorage.setItem('username', _this.email);
                    _this._router.navigate(['/Home']);
                    _this._toastr.success(_this.email, 'Welcome back');
                }
            });
        }
        else {
            this._toastr.error('Thank you to complete follow areas', 'Oops!');
        }
    };
    UserLoginComponent.prototype.ngOnInit = function () {
        this.email = '';
        this.password = '';
    };
    UserLoginComponent = __decorate([
        core_1.Component({
            selector: 'user-login',
            providers: [authentication_service_1.AuthenticationService, router_1.ROUTER_DIRECTIVES, ng2_toastr_1.ToastsManager],
            templateUrl: './app/+user/user-login/user-login.component.html',
            directives: [common_1.FORM_DIRECTIVES, router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [authentication_service_1.AuthenticationService, router_1.Router, ng2_toastr_1.ToastsManager])
    ], UserLoginComponent);
    return UserLoginComponent;
}());
exports.UserLoginComponent = UserLoginComponent;
//# sourceMappingURL=user-login.component.js.map