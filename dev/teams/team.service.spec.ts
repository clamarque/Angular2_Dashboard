import {describe,expect,it,xit, inject, beforeEachProviders} from 'angular2/testing';

import {TeamService} from './team.service';
import {Team} from "./team";

describe('When a get the data from TeamService', (){
    
 var modele, params = null;

    beforeEach((){
        modele = {
            setParams : function(value){
                params = value;
            }
        };
    spyOn(modele, 'setParams');
    modele.setParams('1','test');
        
    })
    
    it("Call the methode getTeams()", function(){
        expect(modele.setParams).toHaveBeenCalled();
    });
})


describe('Other test call methode', () =>{
    let service;
    
    beforeEachProviders(() => [TeamService]);
    
    beforeEach(inject([TeamService], s => {
        service = s;
    }));
    
    it('Should return length data from mock', () =>{
        let data = service.getTeams();
        expect(data.lenght).toEqual(2);
    });
})
