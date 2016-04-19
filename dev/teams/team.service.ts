import {Injectable} from "angular2/core";
import {TEAMS} from "./mock-team";
import {Member} from "./team";

@Injectable()

////  retourne l equipe de maniere assynchrone

export class TeamService {
    getTeams() {
        return Promise.resolve(TEAMS);
    }
    
    
    
    /// insertion d un membre en assynchrone   
    
    insertTeam(member: Member) {
        Promise.resolve(TEAMS).then((teams: Member[]) => teams.push(member)) ;
    }
    
     
     
}