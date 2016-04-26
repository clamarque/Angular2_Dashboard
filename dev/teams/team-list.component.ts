import {Component} from "angular2/core";
import {TeamService} from "./team.service";
import {Member} from "./team";
import {OnInit} from "angular2/core";
import {NewMemberComponent} from "./new-member.component";
import {TranslatePipe, TranslateService} from 'ng2-translate/ng2-translate';

@Component({
    selector:'team-list',
    templateUrl : 'dev/teams/team-list.html',   
    providers:[TeamService]
})

export class TeamListComponent {
    public Teams: Member[];
    public selectedTeam={}; 
    public disableTeam={};   
    public modif=false;
    public disabled=false;
    
    constructor(private _teamService: TeamService, public translate: TranslateService) {}
    
    
   /// desactive un membre
    
    public onDisabled(member:Member)
    
    {     
        this.disabled=true;  
                 
    }
    
    // Modifier un membre
    
    public onModif(){
        this.modif=true;
    }
    
    
    
    /// supprimer un membre
    public onSuppr(member: Member){
        let index = this.Teams.indexOf (member);
        this.Teams.splice(index,1);
    }
    
    
    /// modifier un membre
    public onSubmit(){
        this.modif=false;
        
    }
    
    // determine le membre selectioné
    public onClick(member){
        this.selectedTeam=member;
        console.log(member);
        
    }
        
        // sort la liste des membres de l equipe
    getTeams() {
        this._teamService.getTeams().then((teams:Member[])=> this.Teams=teams);
    }
    
    /// initialise la liste des membres 
    ngOnInit():any {
        this.getTeams();
    }
}