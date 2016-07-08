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
var shared_1 = require('../../shared');
var UserRegisterComponent = (function () {
    function UserRegisterComponent(_dataService, _router, _authenticationService, _objectToArrayPipe) {
        this._dataService = _dataService;
        this._router = _router;
        this._authenticationService = _authenticationService;
        this._objectToArrayPipe = _objectToArrayPipe;
    }
    UserRegisterComponent.prototype.onClickCreate = function () {
        this._authenticationService.createUser(this.list_infosUser);
        //this._router.navigate(['/login']);
    };
    UserRegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.list_infosUser = {
            first: '',
            last: '',
            username: '',
            role: '',
            email: '',
            password: ''
        };
        this._dataService.getAllData('role').then(function (snapshot) {
            var data = snapshot.val();
            _this.temp = data;
            _this.list_roles = _this._objectToArrayPipe.transform(_this.temp);
        });
    };
    UserRegisterComponent = __decorate([
        core_1.Component({
            selector: 'user-register',
            templateUrl: './app/+user/user-register/user-register.component.html',
            providers: [authentication_service_1.AuthenticationService, shared_1.DataService, shared_1.ObjectToArrayPipe]
        }), 
        __metadata('design:paramtypes', [shared_1.DataService, router_1.Router, authentication_service_1.AuthenticationService, shared_1.ObjectToArrayPipe])
    ], UserRegisterComponent);
    return UserRegisterComponent;
}());
exports.UserRegisterComponent = UserRegisterComponent;
//# sourceMappingURL=user-register.component.js.map