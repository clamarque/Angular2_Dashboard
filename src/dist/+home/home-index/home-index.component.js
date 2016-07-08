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
var _1 = require('../../');
var shared_1 = require('../../shared');
var HomeIndexComponent = (function () {
    function HomeIndexComponent(_dataService, _router, _objectToArrayPipe) {
        this._dataService = _dataService;
        this._router = _router;
        this._objectToArrayPipe = _objectToArrayPipe;
        this.infos = {};
        this.username = localStorage.getItem('username');
        this.date = new Date();
        this.usersCount = 0;
        this.missionsCount = 0;
        this.customersCount = 0;
        this.skillsCount = 0;
        var self = this;
        firebase.database().ref('collaborator/').on('value', function (data) {
            self.usersCount = data.numChildren();
        });
        firebase.database().ref('mission/').on('value', function (data) {
            self.missionsCount = data.numChildren();
        });
        firebase.database().ref('customer/').on('value', function (data) {
            self.customersCount = data.numChildren();
        });
    }
    HomeIndexComponent.prototype.logout = function () {
        firebase.auth().signOut();
        localStorage.removeItem('username');
        this._router.navigate(['/login']);
    };
    HomeIndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        var user = firebase.auth().currentUser;
        console.log(user.uid);
        if (user) {
            this._dataService.getData('collaborator', user.uid).then(function (snapshot) {
                _this.infos = snapshot.val();
                console.log(_this.infos.admin);
            });
        }
    };
    HomeIndexComponent = __decorate([
        core_1.Component({
            selector: 'home-index',
            templateUrl: './app/+home/home-index/home-index.component.html',
            directives: [router_1.ROUTER_DIRECTIVES, common_1.FORM_DIRECTIVES, common_1.CORE_DIRECTIVES],
            providers: [shared_1.DataService, shared_1.ObjectToArrayPipe]
        }),
        router_1.Routes([
            { path: '/', component: _1.MissionIndexComponent },
            { path: '/Mission', component: _1.MissionIndexComponent },
            { path: '/CreateMission', component: _1.MissionCreateComponent },
            { path: '/ViewMission/:id', component: _1.MissionViewComponent },
            { path: '/Collaborator', component: _1.CollaboratorIndexComponent },
            { path: '/CreateCollaborator', component: _1.UserRegisterComponent },
            { path: '/ViewCollaborator/:id', component: _1.CollaboratorViewComponent },
            { path: '/Customer', component: _1.CustomerIndexComponent },
            { path: '/CreateCustomer', component: _1.CustomerCreateComponent },
            { path: '/ViewCustomer/:id', component: _1.CustomerViewComponent },
            { path: '/Setting', component: _1.SettingIndexComponent },
            { path: '/Skill', component: _1.SkillIndexComponent },
            { path: '/CreateSkill', component: _1.SkillCreateComponent },
            { path: '/ViewSkill/:id', component: _1.SkillViewComponent },
            { path: '/Role', component: _1.RoleIndexComponent },
            { path: '/CreateRole', component: _1.RoleCreateComponent }
        ]), 
        __metadata('design:paramtypes', [shared_1.DataService, router_1.Router, shared_1.ObjectToArrayPipe])
    ], HomeIndexComponent);
    return HomeIndexComponent;
}());
exports.HomeIndexComponent = HomeIndexComponent;
//# sourceMappingURL=home-index.component.js.map