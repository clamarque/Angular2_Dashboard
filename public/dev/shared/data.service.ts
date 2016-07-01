//Angular
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

//Firebase
declare var firebase: any;

@Injectable()

export class DataService {

    constructor() { }

    //Common
    postData(category: string, name: string, role: string) {
        firebase.database().ref(category).push({ name: name, role: role })
    }
    getData(category: string, id: string) {
        return firebase.database().ref(category + '/' + id).once('value');
    }
    setData(category: string, id: string, name: string, role: string) {
        firebase.database().ref(category + '/' + id).set({ name: name, role: role });
    }
    deleteData(category: string, id: string) {
        firebase.database().ref(category + '/' + id).remove();
    }

    //Customer
    postDataCustomer(name: string, project: string) {
        firebase.database().ref('customer/').push({ name: name, project: project })
    }
    setDataCustomer(id: string, name: string, project: string) {
        firebase.database().ref('customer/' + id).set({ name: name, project: project });
    }

    //Mission
    postDataMission(name: string, description: string, date: string, member: string) {
        firebase.database().ref('mission/').push({ name: name, description: description, date: date, member: member })
    }
    setDataMission(id: string, name: string, description: string, date: string, member: string) {
        firebase.database().ref('mission/' + id).set({ name: name, description: description, date: date, member: member });
    }
    
    //Job
    postDataJob(name: string){
        firebase.database().ref('job/').push({name: name})   
    }
}