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
var SkillViewComponent = (function () {
    function SkillViewComponent(_dataService, _router, _routeSegment, _toastr) {
        this._dataService = _dataService;
        this._router = _router;
        this._routeSegment = _routeSegment;
        this._toastr = _toastr;
    }
    SkillViewComponent.prototype.routerOnActivate = function (current) {
        var _this = this;
        var id = current.parameters['id'];
        this._dataService.getData('skill', id).then(function (snapshot) {
            _this.data = snapshot.val();
            _this.list_skills = _this.data;
        });
    };
    SkillViewComponent.prototype.deleteSkill = function () {
        var id = this._routeSegment.getParam('id');
        this._dataService.deleteData('skill', id);
        this._router.navigate(['/Home/Skill']);
        this._toastr.success('Skill deleted');
    };
    SkillViewComponent.prototype.setSkill = function (username, role) {
        var id = this._routeSegment.getParam('id');
        this._dataService.setData('skill', id, username, role);
        this._router.navigate(['/Home/Skill']);
        this._toastr.success('modifications saved');
    };
    SkillViewComponent = __decorate([
        core_1.Component({
            selector: "skill-view",
            templateUrl: './app/+skill/skill-view/skill-view.component.html',
            directives: [common_1.CORE_DIRECTIVES],
            providers: [shared_1.DataService, ng2_toastr_1.ToastsManager]
        }), 
        __metadata('design:paramtypes', [shared_1.DataService, router_1.Router, router_1.RouteSegment, ng2_toastr_1.ToastsManager])
    ], SkillViewComponent);
    return SkillViewComponent;
}());
exports.SkillViewComponent = SkillViewComponent;
//# sourceMappingURL=skill-view.component.js.map