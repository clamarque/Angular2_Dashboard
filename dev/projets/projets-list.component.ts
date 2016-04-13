import {Component} from "angular2/core";

import {AppHeader} from '../main/app-header';

@Component({
    selector:'projets-list',
    template:`
    <app-header></app-header>
    <div class="container margtop">
        <h2 class="text-center">
            <span class="glyph glyphicon glyphicon-folder-open colorTextSogeti"></span>
            <b> My Projects</b>
        </h2>
        <div class="margTopTab">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Environment</th>
                        <th>Status</th> 
                        <th>Release</th>
                        <th>Release Branch</th>
                        <th>Completed</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody >
                    <tr *ngFor="#projet of projets" >
                        <th>{{projet.environment}}</th>
                        <th>{{projet.status}}</th>
                        <th>{{projet.release}}</th>
                        <th>{{projet.releaseBranch}}</th>
                        <th>{{projet.completed}}</th>
                        <th>{{projet.actions}}</th>
                    </tr>
                </tbody>
            </table>
		</div>
    </div>
    `,
    directives: [AppHeader]
})

export class ProjetsListComponent {
    public projets =[
		{environment: "Production", status: "DEPLOYED", release: "release-7", releaseBranch: "new", completed: "15 january 2014", actions: "blabla"},
		{environment: "Staging", status: "DEPLOYED", release: "release-7", releaseBranch: "new", completed: "07 january 2014", actions: "blabla"},
		{environment: "Production", status: "DEPLOYED", release: "release-7", releaseBranch: "new", completed: "15 january 2014", actions: "blabla"},
		{environment: "Staging", status: "DEPLOYED", release: "release-7", releaseBranch: "new", completed: "07 january 2014", actions: "blabla"},
    ];
    
}