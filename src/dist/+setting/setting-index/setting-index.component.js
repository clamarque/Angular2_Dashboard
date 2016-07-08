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
var ng2_translate_1 = require('ng2-translate/ng2-translate');
var SettingIndexComponent = (function () {
    function SettingIndexComponent(_translate) {
        this._translate = _translate;
        this.language = new common_1.Control(false);
    }
    SettingIndexComponent.prototype.changeLanguage = function (value) {
        if (value) {
            this._translate.use('fr');
        }
        else {
            this._translate.use('en');
        }
    };
    SettingIndexComponent = __decorate([
        core_1.Component({
            selector: 'setting-index',
            templateUrl: './app/+setting/setting-index/setting-index.component.html',
            directives: [common_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [ng2_translate_1.TranslateService])
    ], SettingIndexComponent);
    return SettingIndexComponent;
}());
exports.SettingIndexComponent = SettingIndexComponent;
//# sourceMappingURL=setting-index.component.js.map