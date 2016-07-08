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
var CollaboratorIndexComponent = (function () {
    function CollaboratorIndexComponent(_dataService, _router, _objectToArrayPipe, _toastr) {
        this._dataService = _dataService;
        this._router = _router;
        this._objectToArrayPipe = _objectToArrayPipe;
        this._toastr = _toastr;
    }
    CollaboratorIndexComponent.prototype.deleteCollaborator = function (collaborator) {
        this._dataService.deleteData('collaborator', collaborator.id);
        this.ngOnInit();
        this._toastr.success('Collaborator deleted');
    };
    CollaboratorIndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._dataService.getAllData('collaborator').then(function (snapshot) {
            _this.data = snapshot.val();
            _this.list_collaborators = _this._objectToArrayPipe.transform(_this.data);
        });
    };
    CollaboratorIndexComponent = __decorate([
        core_1.Component({
            selector: 'collaborator-index',
            templateUrl: './app/+collaborator/collaborator-index/collaborator-index.component.html',
            directives: [router_1.ROUTER_DIRECTIVES, common_1.CORE_DIRECTIVES],
            providers: [shared_1.DataService, shared_1.ObjectToArrayPipe, ng2_toastr_1.ToastsManager]
        }), 
        __metadata('design:paramtypes', [shared_1.DataService, router_1.Router, shared_1.ObjectToArrayPipe, ng2_toastr_1.ToastsManager])
    ], CollaboratorIndexComponent);
    return CollaboratorIndexComponent;
}());
exports.CollaboratorIndexComponent = CollaboratorIndexComponent;
//# sourceMappingURL=collaborator-index.component.js.map