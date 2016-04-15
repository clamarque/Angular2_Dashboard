import {Injectable} from "angular2/core";
import {TEAMS} from "./mock-team";
import {Member} from "./team";

@Injectable()

export class TeamService {
    getTeams() {
        return Promise.resolve(TEAMS);
    }
    
    insertTeam(member: Member) {
        Promise.resolve(TEAMS).then((teams: Member[]) => teams.push(member)) ;
    }
    
     
     
}