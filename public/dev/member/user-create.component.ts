//Angular
import { Component } from '@angular/core';
import { Router } from '@angular/router';

//Service
import { DataService } from "../shared/data.service";

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'user-create',
    templateUrl: './dev/member/user-create.component.html',
    providers: [DataService, ToastsManager]
})

export class UserCreateComponent {

    constructor(private _dataService: DataService, private _router: Router, private _toastr: ToastsManager) { }

    createUser(name, role) {
        this._dataService.postData('user',name, role);
        this._router.navigate(['/Home/Member'])
        this._toastr.success('User created')
    }
}
