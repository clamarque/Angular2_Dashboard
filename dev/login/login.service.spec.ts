import {expect, it, describe, inject, injectAsync, TestComponentBuilder, beforeEachProviders} from 'angular2/testing';

import {Injectable} from "angular2/core";
import {Http, Headers} from "angular2/http";
import { Router, RouterLink } from 'angular2/router';
import 'rxjs/add/operator/map';


//Service
import {LoginService} from "./login.service";



describe("passwordController", function(){
    beforeEach(modele("app.component"));
    
    var ctrl;
    
    beforeEachProviders(inject(function()))
})



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



describe('Other test call methode', () =>{
    let service;
    
    beforeEachProviders(() => [LoginService]);
    
    beforeEach(inject([LoginService], s => {
        service = s;
    }));
    
    it('Should return length data from mock', () =>{
        let data = service.getTeams();
        expect(data.lenght).toEqual(2);
    });
})