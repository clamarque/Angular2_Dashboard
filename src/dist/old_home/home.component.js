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
var data_service_1 = require("../shared/data.service");
var object_to_array_pipe_1 = require('../shared/pipes/object-to-array.pipe');
//Component
var customer_index_component_1 = require('../customer/customer-index.component');
var customer_create_component_1 = require('../customer/customer-create.component');
var customer_view_component_1 = require('../customer/customer-view.component');
var collaborator_index_component_1 = require('../collaborator/collaborator-index.component');
var collaborator_view_component_1 = require('../collaborator/collaborator-view.component');
var home_index_component_1 = require('./home-index.component');
var mission_index_component_1 = require('../mission/mission-index.component');
var mission_create_component_1 = require("../mission/mission-create.component");
var mission_view_component_1 = require("../mission/mission-view.component");
var role_index_component_1 = require('../role/role-index.component');
var role_create_component_1 = require('../role/role-create.component');
var setting_index_component_1 = require('../setting/setting-index.component');
var skill_index_component_1 = require('../skill/skill-index.component');
var skill_create_component_1 = require('../skill/skill-create.component');
var skill_view_component_1 = require('../skill/skill-view.component');
var user_register_component_1 = require('../user/user-register.component');
var HomeComponent = (function () {
    function HomeComponent(_router, _objectToArrayPipe, _dataService) {
        this._router = _router;
        this._objectToArrayPipe = _objectToArrayPipe;
        this._dataService = _dataService;
        this.infos = {};
        this.username = localStorage.getItem('username');
    }
    HomeComponent.prototype.logout = function () {
        firebase.auth().signOut();
        localStorage.removeItem('username');
        this._router.navigate(['/']);
    };
    HomeComponent.prototype.ngOnInit = function () {
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
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            templateUrl: './dev/home/home.component.html',
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [data_service_1.DataService, object_to_array_pipe_1.ObjectToArrayPipe]
        }),
        router_1.Routes([
            { path: '/', component: home_index_component_1.HomeIndexComponent },
            { path: '/Mission', component: mission_index_component_1.MissionIndexComponent },
            { path: '/CreateMission', component: mission_create_component_1.MissionCreateComponent },
            { path: '/ViewMission/:id', component: mission_view_component_1.MissionViewComponent },
            { path: '/Collaborator', component: collaborator_index_component_1.CollaboratorIndexComponent },
            { path: '/CreateCollaborator', component: user_register_component_1.UserRegisterComponent },
            { path: '/ViewCollaborator/:id', component: collaborator_view_component_1.CollaboratorViewComponent },
            { path: '/Customer', component: customer_index_component_1.CustomerIndexComponent },
            { path: '/CreateCustomer', component: customer_create_component_1.CustomerCreateComponent },
            { path: '/ViewCustomer/:id', component: customer_view_component_1.CustomerViewComponent },
            { path: '/Setting', component: setting_index_component_1.SettingIndexComponent },
            { path: '/Skill', component: skill_index_component_1.SkillIndexComponent },
            { path: '/CreateSkill', component: skill_create_component_1.SkillCreateComponent },
            { path: '/ViewSkill/:id', component: skill_view_component_1.SkillViewComponent },
            { path: '/Role', component: role_index_component_1.RoleIndexComponent },
            { path: '/CreateRole', component: role_create_component_1.RoleCreateComponent }
        ]), 
        __metadata('design:paramtypes', [router_1.Router, object_to_array_pipe_1.ObjectToArrayPipe, (typeof (_a = typeof data_service_1.DataService !== 'undefined' && data_service_1.DataService) === 'function' && _a) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map