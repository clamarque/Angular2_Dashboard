import {Component} from "angular2/core";
import {TeamService} from "./team.service"
import {Member} from "./team";
import {Router} from "angular2/router";

@Component({
    templateUrl : 'dev/teams/new-member.html',
    providers:[TeamService]
})

export class NewMemberComponent {
    
    constructor(private _teamService: TeamService, private _router:Router) {}
    
    onAddMember (name, role) {
       let member: Member = {name:name, role:role};
       this._teamService.insertTeam(member);
       this._router.navigate(['Teams']);
       return false;
      
    }
}