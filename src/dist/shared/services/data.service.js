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
var DataService = (function () {
    function DataService() {
    }
    //Common
    DataService.prototype.postData = function (category, name) {
        firebase.database().ref(category).push({ name: name });
    };
    DataService.prototype.getData = function (category, id) {
        return firebase.database().ref(category + '/' + id).once('value');
    };
    DataService.prototype.getAllData = function (category) {
        return firebase.database().ref(category).once('value');
    };
    DataService.prototype.setData = function (category, id, name, role) {
        firebase.database().ref(category + '/' + id).set({ name: name, role: role });
    };
    DataService.prototype.deleteData = function (category, id) {
        firebase.database().ref(category + '/' + id).remove();
    };
    //Collaborator
    DataService.prototype.setDataCollaborator = function (id, active, admin, first, last, username, role) {
        firebase.database().ref('collaborator/' + id).set({ active: active, admin: admin, first: first, last: last, username: username, role: role });
    };
    //Customer
    DataService.prototype.postDataCustomer = function (name, project) {
        firebase.database().ref('customer/').push({ name: name, project: project });
    };
    DataService.prototype.setDataCustomer = function (id, name, project) {
        firebase.database().ref('customer/' + id).set({ name: name, project: project });
    };
    //Mission
    DataService.prototype.postDataMission = function (name, description, date, collaborator) {
        firebase.database().ref('mission/').push({ name: name, description: description, date: date, collaborator: collaborator });
    };
    DataService.prototype.setDataMission = function (id, name, description, date, collaborator) {
        firebase.database().ref('mission/' + id).set({ name: name, description: description, date: date, collaborator: collaborator });
    };
    //Role
    DataService.prototype.postDataRole = function (name) {
        firebase.database().ref('role/').push({ name: name });
        //firebase.database().ref('role/').child('id').push({name})   
    };
    DataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map