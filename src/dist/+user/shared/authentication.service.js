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
var AuthenticationService = (function () {
    function AuthenticationService() {
    }
    AuthenticationService.prototype.login = function (email, password, callback) {
        firebase.auth().signInWithEmailAndPassword(email, password).then(function (user) { return callback(); }, function (error) { return callback(error); });
    };
    AuthenticationService.prototype.createUser = function (userDetails) {
        var _this = this;
        firebase.auth().createUserWithEmailAndPassword(userDetails.email, userDetails.password).then(function (user) { return _this.createUserResume(user.uid, userDetails); });
    };
    AuthenticationService.prototype.createUserResume = function (uid, userDetails) {
        console.log('function create');
        this.login(userDetails.email, userDetails.password, function (error) {
            firebase.database().ref('collaborator').child(uid).set({
                active: true, admin: false, first: userDetails.first, last: userDetails.last, username: userDetails.username, role: userDetails.role, email: userDetails.email
            });
        });
    };
    AuthenticationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map