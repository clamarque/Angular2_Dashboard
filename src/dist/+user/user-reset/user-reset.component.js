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
var authentication_service_1 = require('../shared/authentication.service');
var UserResetComponent = (function () {
    function UserResetComponent(_router, _authenticationService) {
        this._router = _router;
        this._authenticationService = _authenticationService;
    }
    UserResetComponent.prototype.ngOnInit = function () {
        if (firebase.auth().currentUser) {
        }
        this.email = '';
    };
    UserResetComponent.prototype.onClickResetPassword = function () {
        if (this.email != '') {
        }
    };
    UserResetComponent = __decorate([
        core_1.Component({
            selector: 'user-reset-password',
            templateUrl: './app/+users/user-reset.component.html',
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [authentication_service_1.AuthenticationService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, authentication_service_1.AuthenticationService])
    ], UserResetComponent);
    return UserResetComponent;
}());
exports.UserResetComponent = UserResetComponent;
//# sourceMappingURL=user-reset.component.js.map