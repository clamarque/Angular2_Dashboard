import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

declare var firebase: any;

@Injectable()

export class DataService {

    constructor() { }

    //Common
    postData(category: string, name: string) {
        firebase.database().ref(category).push({ name: name})
    }
    getData(category: string, id: string) {
        return firebase.database().ref(category + '/' + id).once('value');
    }
     getAllData(category: string) {
        return firebase.database().ref(category).once('value');
    }
    setData(category: string, id: string, name: string, role: string) {
        firebase.database().ref(category + '/' + id).set({ name: name, role: role });
    }
    deleteData(category: string, id: string) {
        firebase.database().ref(category + '/' + id).remove();
    }
    
    //Collaborator
    setDataCollaborator(id: string, active: boolean, admin: boolean, first:string,last:string,username:string,role:string) {
        firebase.database().ref('collaborator/' + id).set({active:active, admin:admin, first:first, last:last, username:username, role: role });
    }

    //Customer
    postDataCustomer(name: string, mission: string) {
        return firebase.database().ref('customer/').push({ name: name, mission: mission })
    }
    setDataCustomer(id: string, name: string, mission: string) {
        firebase.database().ref('customer/' + id).set({ name: name, mission: mission });
    }

    //Mission
    postDataMission(name: string, description: string, date: string, collaborator: string) {
        firebase.database().ref('mission/').push({ name: name, description: description, date: date, collaborator: collaborator })
    }
    setDataMission(id: string, name: string, description: string, date: string, collaborator: string) {
        firebase.database().ref('mission/' + id).set({ name: name, description: description, date: date, collaborator: collaborator });
    }
    
    //Role
    postDataRole(name: string){
        firebase.database().ref('role/').push({name: name})
        //firebase.database().ref('role/').child('id').push({name})   
    }
    
}