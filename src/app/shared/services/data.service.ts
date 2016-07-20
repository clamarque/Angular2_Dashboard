import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

declare var firebase: any;

@Injectable()

export class DataService {

    constructor() { }

    //Common
    postData(category: string, detail: any) {
        firebase.database().ref(category).push({ name: detail.name})
    }
    getData(category: string, id: string) {
        return firebase.database().ref(category + '/' + id).once('value');
    }
     getAllData(category: string) {
        return firebase.database().ref(category).once('value');
    }
    setData(category: string, id: string, detail: any) {
        firebase.database().ref(category + '/' + id).set({ name: name, role: role });
    }
    deleteData(category: string, id: string) {
        firebase.database().ref(category + '/' + id).remove();
    }
    
    //Collaborator
    setDataCollaborator(id: string, Detail: any) {
        firebase.database().ref('collaborator/' + id).set({
            active: Detail.active, 
            admin: Detail.admin,
            email: Detail.email, 
            first: Detail.first,
            last: Detail.last,
            username: Detail.username,
            role: Detail.role });
    }

    //Customer
    postDataCustomer(Detail: any) {
        return firebase.database().ref('customer/').push({
            active: Detail.active,
            mission: Detail.mission,
            name: Detail.name        
        })
    }
    setDataCustomer(id: string, Detail: any) {
        firebase.database().ref('customer/' + id).set({
            active: Detail.active,
            mission: Detail.mission,
            name: Detail.name
         });
    }

    //Mission
    postDataMission(Detail: any) {
        firebase.database().ref('mission/').push({ 
            name: Detail.name, 
            description: Detail.description, 
            dateStart: Detail.dateStart, 
            dateEnd: Detail.dateEnd, 
            collaborator: Detail.collaborator 
        })
    }
    setDataMission(id: string, Detail: any) {
        firebase.database().ref('mission/' + id).set({
            name: Detail.name,
            description: Detail.description,
            dateStart: Detail.dateStart,
            dateEnd: Detail.dateEnd,
            collaborator: Detail.collaborator 
        })
    }
    
    //Role
    postDataRole(Detail: any){
        firebase.database().ref('role/').push({name: Detail.name})
        //firebase.database().ref('role/').child('id').push({name})   
    }
    //Skill
    setDataSkill(id: string, Detail: any){
        firebase.database().ref('skill/' + id).set({name: Detail.name})
    }
    
}