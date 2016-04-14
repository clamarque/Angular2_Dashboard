import {Component} from "angular2/core";

@Component({
    selector:'projets-list',
    template:`
    <div class="container margtop">
        <h2 class="text-center">
            <span class="glyph glyphicon glyphicon-folder-open colorTextSogeti"></span>
            <b> My Projects</b>
        </h2>
        <div class="margTopTab">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Status</th> 
                        <th>Release</th>
                        <th>Url</th>
                        <th>Completed</th>
                        <th>Members</th>
                    </tr>
                </thead>
                <tbody >
                    <tr *ngFor="#projet of projets" >
                        <th>{{projet.name}}</th>
                        <th>{{projet.status}}</th>
                        <th>{{projet.release}}</th>
                        <th><a>{{projet.url}}</a></th>
                        <th>{{projet.completed}}</th>
                        <th><button type="button" class="btn btn-warning">See Members</button></th>
                    </tr>
                </tbody>
            </table>
		</div>
    </div>
    `
})

export class ProjetsListComponent {
    public projets =[
		{name: "PIC", status: "DEPLOYED", release: "release-7", url: "www.github.com", completed: "15 january 2014", member: "blabla"},
		{name: "BRCP", status: "DEPLOYED", release: "release-7", url: "www.bitbucket.com", completed: "07 january 2014", member: "blabla"},
		{name: "PRODUCT", status: "DEPLOYED", release: "release-7", url: "www.github.com", completed: "15 january 2014", member: "blabla"},
		{name: "STOL", status: "DEPLOYED", release: "release-7", url: "www.bitbucket.com", completed: "07 january 2014", member: "blabla"},
    ];
    
}