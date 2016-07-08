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
var HomeIndexComponent = (function () {
    function HomeIndexComponent(_router) {
        this._router = _router;
        this.date = new Date();
        this.collaboratorsCount = 0;
        this.missionsCount = 0;
        this.customersCount = 0;
        var self = this;
        firebase.database().ref('collaborator/').on('value', function (data) {
            self.collaboratorsCount = data.numChildren();
        });
        firebase.database().ref('mission/').on('value', function (data) {
            self.missionsCount = data.numChildren();
        });
        firebase.database().ref('customer/').on('value', function (data) {
            self.customersCount = data.numChildren();
        });
    }
    HomeIndexComponent = __decorate([
        core_1.Component({
            selector: 'home-index',
            templateUrl: '/dev/home/home-index.component.html',
            directives: [router_1.ROUTER_DIRECTIVES, common_1.FORM_DIRECTIVES, common_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], HomeIndexComponent);
    return HomeIndexComponent;
}());
exports.HomeIndexComponent = HomeIndexComponent;
//# sourceMappingURL=home-index.component.js.map