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
var _1 = require('./');
var ng2_translate_1 = require('ng2-translate/ng2-translate');
var AppComponent = (function () {
    function AppComponent(_router, _translate) {
        this._router = _router;
        this._translate = _translate;
    }
    AppComponent.prototype.ngOnInit = function () {
        this._translate.setDefaultLang('fr');
        this._translate.use('fr');
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './app/app.component.html',
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        router_1.Routes([
            { path: '/Home', component: _1.HomeIndexComponent },
            { path: '/', component: _1.UserLoginComponent },
            { path: '*', component: _1.UserLoginComponent }
        ]), 
        __metadata('design:paramtypes', [router_1.Router, ng2_translate_1.TranslateService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map