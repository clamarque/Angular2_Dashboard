import { provideRouter, RouterConfig } from '@angular/router';
import { AuthGuard } from './shared';
import {
    CollaboratorListComponent,
    CollaboratorRegisterComponent,
    CollaboratorResetComponent,
    CollaboratorSignInComponent,
    CollaboratorDetailComponent,
    CustomerCreateComponent,
    CustomerListComponent,
    CustomerDetailComponent,
    DashboardIndexComponent,
    HomeIndexComponent,
    MissionCreateComponent,
    MissionListComponent,
    MissionDetailComponent,
    RoleListComponent,
    RoleCreateComponent,
    SettingIndexComponent,
    SkillListComponent,
    SkillCreateComponent,
    SkillDetailComponent,
}from './';

export const APP_ROUTES: RouterConfig = [
    //{ path: 'SignIn', component: CollaboratorSignInComponent },
    { path: 'Reset-password', component: CollaboratorResetComponent},
    { path: '', component: CollaboratorSignInComponent },
    {
        path: 'Home', component: HomeIndexComponent, canActivate: [AuthGuard],
        children: [
            { path: '', component: DashboardIndexComponent },
            { path: 'Mission', component: MissionListComponent },
            { path: 'CreateMission', component: MissionCreateComponent },
            { path: 'DetailMission/:id', component: MissionDetailComponent },
            { path: 'Collaborator', component: CollaboratorListComponent, data: {admin: true} },
            { path: 'Register', component: CollaboratorRegisterComponent },
            { path: 'DetailCollaborator/:id', component: CollaboratorDetailComponent },
            { path: 'Customer', component: CustomerListComponent },
            { path: 'CreateCustomer', component: CustomerCreateComponent },
            { path: 'DetailCustomer/:id', component: CustomerDetailComponent },
            { path: 'Setting', component: SettingIndexComponent },
            { path: 'Skill', component: SkillListComponent },
            { path: 'CreateSkill', component: SkillCreateComponent },
            { path: 'DetailSkill/:id', component: SkillDetailComponent },
            { path: 'Role', component: RoleListComponent },
            { path: 'CreateRole', component: RoleCreateComponent }
        ]
    },
    { path: '**', redirectTo: '/Home', pathMatch: 'full'}
]

export const appRouterProviders = [
    provideRouter(APP_ROUTES)
];