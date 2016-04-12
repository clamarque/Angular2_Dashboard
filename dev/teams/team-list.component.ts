import {Component} from "angular2/core";
import {TeamService} from "./team.service";
import {Team} from "./team";
import {OnInit} from "angular2/core";

@Component({
    selector:'team-list',
    template:`
    <div class="container margtop">
        <h2 class="text-center"><span class="glyph glyphicon glyphicon-user colorTextSogeti"></span>
        <b>My Team</b></h2>
        <div class="list-group margTopTab">
            <ul>
                <li *ngFor="#team of Teams"
                    (click)="onClick(team)"
                    [class.clicked]="selectedTeam===team"
                    class="list-group-item"
                >
                {{team.name}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{team.role}}
                </li>
            </ul>
        </div>   
        <div class="container">
        <div class="col-lg-offset-4 col-lg-4 col-lg-offset-4">
            <p>
                <button (click)=onModif() class="btn btn-warning">Modify selected member</button>
                <button (click)=onSave() class="btn btn-warning">save</button>
            </p>
            <div *ngIf="modif===true" >
            <div><label for="name">Name:</label><input [(ngModel)]="selectedTeam.name" type="text"></div>
            <div><label for="role">Role:</label><input [(ngModel)]="selectedTeam.role" type="text"></div>
            </div>
         </div>   
         </div>
    </div>
    `,
providers:[TeamService]
})

export class TeamListComponent {
    public Teams: Team[];
    public selectedTeam={};    
    public modif=false;
    
    constructor(private _teamService: TeamService) {}
    
    public onModif(){
        this.modif=true;
    }
    public onSave(){
        this.modif=false;
    }
    
    public onClick(team){
        this.selectedTeam=team;
    }
        
    getTeams() {
        this._teamService.getTeams().then((teams:Team[])=> this.Teams=teams);
    }
    
    ngOnInit():any {
        this.getTeams();
    }
}