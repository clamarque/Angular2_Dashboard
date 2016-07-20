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
    postDataCustomer(name: string, mission: string) {
        return firebase.database().ref('customer/').push({ name: name, mission: mission })
    }
    setDataCustomer(id: string, name: string, mission: string) {
        firebase.database().ref('customer/' + id).set({ name: name, mission: mission });
    }

    //Mission
    postDataMission(Detail: any) {
        firebase.database().ref('mission/').push({ 
            name: Detail.name, 
            description: Detail.description, 
            dateStart: Detail.dateStart, 
            dateEnd: Detail.dateEnd, 
            collaborator: Detail.collaborator })
    }
    setDataMission(id: string, Detail: any) {
        firebase.database().ref('mission/' + id).set({
            name: Detail.name,
            description: Detail.description,
            dateStart: Detail.dateStart,
            dateEnd: Detail.dateEnd,
            collaborator: Detail.collaborator });
    }
    
    //Role
    postDataRole(name: string){
        firebase.database().ref('role/').push({name: name})
        //firebase.database().ref('role/').child('id').push({name})   
    }
    
}