import {Component} from "angular2/core";
import {TeamService} from "./team.service"
import {Member} from "./team";
import {Router} from "angular2/router";
import {TranslatePipe, TranslateService} from 'ng2-translate/ng2-translate';

@Component({
    templateUrl : 'dev/teams/new-member.html',
    providers:[TeamService]
})

export class NewMemberComponent {
    
    constructor(private _teamService: TeamService, private _router:Router, public translate: TranslateService) {}
    
    onAddMember (name, role) {
       let member: Member = {name:name, role:role};
       this._teamService.insertTeam(member);
       this._router.navigate(['Teams']);
       return false;
      
    }
}