//Angular
import {Injectable, Inject} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

//Customer
import {Customer} from './customer';

//Firebase
declare var firebase: any;

@Injectable()

export class CustomerService {

    constructor(private _http: Http) { }

    postCustomer(name: string, project: string) {
        firebase.database().ref('customer/').push({ name: name, project: project })
    }

    deleteCustomer(id: string) {
        firebase.database().ref('customer/' + id).remove();
    }

    setCustomer(id: string, name: string, project: string) {
        firebase.database().ref('customer/' + id).set({ name: name, project: project });
    }
    getCustomer(id: string): Observable<Customer> {
       let url: string;
        url = "https://blazing-inferno-9370.firebaseio.com/" + "customer/" + id + ".json"
        return this._http.get(url)
            .map(response => response.json());
    }

}