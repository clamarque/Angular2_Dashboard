import {Component} from "angular2/core";
import {TeamService} from "./team.service"
import {Team} from "./team";
import {Router} from "angular2/router";

@Component({
    template:`
    <div class="container margtop">
        <div class="col-lg-offset-4 col-lg-4 col-lg-offset-4">
        <h2><span class="glyph glyphicon glyphicon-user colorTextSogeti"></span>
        New team mate</h2>
            <div class="margTopTab">
                <label for="name">Name:</label>
                <input type="text" id="name" #name>
            </div>
            <div>
                <label for="role">role:</label>
                <input type="text" id="role" #role>
            </div>
            <button (click)="onAddMember(name.value, role.value)"
                    class="btn btn-warning center-block"
            >Create Member</button>
        </div>
    </div>
    `,
    providers:[TeamService]
})

export class NewMemberComponent {
    
    constructor(private _teamService: TeamService, private _router:Router) {}
    
    onAddMember (name, role) {
       let team: Team = {name:name, role:role};
       this._teamService.insertTeam(team);
       this._router.navigate(['Teams']);
    }
}
