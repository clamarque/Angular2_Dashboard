import {Injectable} from "angular2/core";
import {TEAMS} from "./mock-team";
import {Team} from "./team";

@Injectable()

export class TeamService {
    getTeams() {
        return Promise.resolve(TEAMS);
    //console.log(Promise.resolve(TEAMS));
    }
    
    insertTeam(team: Team) {
        Promise.resolve(TEAMS).then((teams: Team[]) => teams.push(team)) ;
    }
}