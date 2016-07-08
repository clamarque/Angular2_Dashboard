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
var shared_1 = require('../../shared');
var ng2_toastr_1 = require('ng2-toastr/ng2-toastr');
var CollaboratorCreateComponent = (function () {
    function CollaboratorCreateComponent(_dataService, _router, _objectToArrayPipe, _toastr) {
        this._dataService = _dataService;
        this._router = _router;
        this._objectToArrayPipe = _objectToArrayPipe;
        this._toastr = _toastr;
    }
    CollaboratorCreateComponent.prototype.createCollaborator = function (name, role) {
        //this._dataService.postData('collaborator', name, role);
        this._router.navigate(['/Home/Collaborator']);
        this._toastr.success('collaborator created');
    };
    CollaboratorCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        firebase.database().ref('role').once('value').then(function (snapshot) {
            var data = snapshot.val();
            _this.temp = data;
            _this.list_roles = _this._objectToArrayPipe.transform(_this.temp);
        });
    };
    CollaboratorCreateComponent = __decorate([
        core_1.Component({
            selector: 'collaborator-create',
            templateUrl: './app/collaborator/collaborator-create.component.html',
            providers: [shared_1.DataService, ng2_toastr_1.ToastsManager]
        }), 
        __metadata('design:paramtypes', [shared_1.DataService, router_1.Router, shared_1.ObjectToArrayPipe, ng2_toastr_1.ToastsManager])
    ], CollaboratorCreateComponent);
    return CollaboratorCreateComponent;
}());
exports.CollaboratorCreateComponent = CollaboratorCreateComponent;
//# sourceMappingURL=collaborator-create.component.js.map