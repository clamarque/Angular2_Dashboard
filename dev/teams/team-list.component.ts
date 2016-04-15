import {Component} from "angular2/core";
import {TeamService} from "./team.service";
import {Member} from "./team";
import {OnInit} from "angular2/core";
import {NewMemberComponent} from "./new-member.component";

@Component({
    selector:'team-list',
    template:`
     <div class="row">
			<div class="col-sm-offset-3 col-sm-6 ">
        <h2 class="text-center"><span class="glyph glyphicon glyphicon-user colorTextSogeti"></span>
        <b>My Team</b></h2>
       
            <div class="jumbotron">
                <table class="table table-condensed ">
                    <thead>
                    <tr>
                        <th>Select</th>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Suspendre</th>
                        <th>Modifier</th>
                        <th>Supprimer</th>
                    </tr>
                    </thead>
                    
                      <tbody >
                        <tr *ngFor="#member of Teams"  (click)="onClick(member)"   [class.clicked]="selectedTeam===member">
                        
                            <th>&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" [(ngModel)]="member.selected" (click)=onDisabled(member) /></th>
                            <th [class.disabled]="member.selected">{{member.name}}</th>
                            <th [class.disabled]="member.selected">{{member.role}}</th>
                            <th *ngIf= "disabled==false" member= [hidden]>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button  class="btn btn-warning btn-sm"(click)=onDisabled(member)><span class="glyphicon glyphicon-pause"></span></button></th>
                            <th *ngIf= "disabled==true" member= [hidden]>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class="btn btn-warning btn-sm" (click)= onRestart(member) ><span class="glyphicon glyphicon-play" ></span></button></th>
                            <th>&nbsp;&nbsp;&nbsp;<button class="btn btn-warning btn-sm" (click)=onModif()><span class="glyphicon glyphicon-pencil"></span></button></th>
                            <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class="btn btn-warning btn-sm" (click)=onSuppr(member)><span class="glyphicon glyphicon-trash"></span></button></th>
                         </tr>
                      </tbody>              
                 </table>                                 
                          
                <div class="row">
                <div class="col-sm-offset-2 col-sm-8 col-sm-offset-2">                
                    
                    <div *ngIf="modif===true" >
                      <form #ModifMembre="ngForm" (ngSubmit)="onSubmit()" >
                            <div class="form-group">
                                <label class="col-sm-2 control-label" for="name">Name</label>
                                <div class=" col-sm-8">
                                    <input required [(ngModel)]="selectedTeam.name" type="text" ngControl="name" #name class="form-control">
                                </div><br><br>                      
                            </div>
                            
                            <div class="form-group">
                                <label class="col-sm-2 control-label" for="inputDefault">Role</label>
                                <div class=" col-sm-8">
                                <input required [(ngModel)]="selectedTeam.role" ngControl="role"  type="text"  #role=ngForm class="form-control" >
                                </div><br><br><br>
                            </div>	 
                                                                               
                            <div class="row">
                                <div class="col-sm-offset-2 col-sm-4">                      
                                    <button class="btn btn-lg btn-danger btn-block">cancel</button>
                                </div>
                                <div class=" col-sm-4">                      
                                    <button type="submit" class="btn btn-lg btn-warning btn-block">save</button>
                                </div>
                            </div> 
                  </form>                  
                </div>   
                </div>
              </div>
            </div>
        </div>       
    `,
providers:[TeamService]
})

export class TeamListComponent {
    public Teams: Member[];
    public selectedTeam={}; 
    public disableTeam={};   
    public modif=false;
    public disabled=false;
    
    constructor(private _teamService: TeamService) {}
    
    
    public onRestart(member:Member)
    {
        this.disabled=false;
        
    }
    
      checkboxes = [{label: 'one'},{label: 'two'}];  
    
    public onDisabled(member:Member)
    
    {     
        this.disabled=true;  
        console.log("suspendu !!" + this.selectedTeam );
        return !this.checkboxes.some(_ => _.state);                
    }
    
    public onModif(){
        this.modif=true;
    }
    
    public onSuppr(member: Member){
        let index = this.Teams.indexOf (member);
        this.Teams.splice(index,1);
    }
    public onSubmit(){
        this.modif=false;
        
    }
    
    public onClick(member){
        this.selectedTeam=member;
        console.log(member);
        
    }
        
    getTeams() {
        this._teamService.getTeams().then((teams:Member[])=> this.Teams=teams);
    }
    
    ngOnInit():any {
        this.getTeams();
    }
}