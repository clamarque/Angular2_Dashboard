import { provideRouter, RouterConfig } from '@angular/router';

import {
    CollaboratorIndexComponent,
    CollaboratorSignInComponent,
    CollaboratorViewComponent,
    CustomerCreateComponent,
    CustomerIndexComponent,
    CustomerViewComponent,
    DashboardIndexComponent,
    HomeIndexComponent,
    MissionCreateComponent,
    MissionIndexComponent,
    MissionViewComponent,
    RoleIndexComponent,
    RoleCreateComponent,
    SettingIndexComponent,
    SkillIndexComponent,
    SkillCreateComponent,
    SkillViewComponent,
}from './';

export const APP_ROUTES: RouterConfig = [
    { path: 'SignIn', component: CollaboratorSignInComponent },
    { path: '', component: CollaboratorSignInComponent },
    {
        path: 'Home', component: HomeIndexComponent,
        children: [
            { path: '', component: DashboardIndexComponent },
            { path: 'Mission', component: MissionIndexComponent },
            { path: 'CreateMission', component: MissionCreateComponent },
            { path: 'ViewMission/:id', component: MissionViewComponent },
            { path: 'Collaborator', component: CollaboratorIndexComponent },
            { path: 'ViewCollaborator/:id', component: CollaboratorViewComponent },
            { path: 'Customer', component: CustomerIndexComponent },
            { path: 'CreateCustomer', component: CustomerCreateComponent },
            { path: 'ViewCustomer/:id', component: CustomerViewComponent },
            { path: 'Setting', component: SettingIndexComponent },
            { path: 'Skill', component: SkillIndexComponent },
            { path: 'CreateSkill', component: SkillCreateComponent },
            { path: 'ViewSkill/:id', component: SkillViewComponent },
            { path: 'Role', component: RoleIndexComponent },
            { path: 'CreateRole', component: RoleCreateComponent }
        ]
    },
    { path: '**', redirectTo: '/Home', pathMatch: 'full'}
]

export const appRouterProviders = [
    provideRouter(APP_ROUTES)
];