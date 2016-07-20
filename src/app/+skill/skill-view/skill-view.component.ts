//Angular
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DataService } from '../../shared';
import { Skill } from '../skill';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: "skill-view",
    templateUrl: './app/+skill/skill-view/skill-view.component.html',
    directives: [CORE_DIRECTIVES],
    providers: [DataService, ToastsManager]
})

export class SkillViewComponent implements OnInit {
    list_skills: any[];
    data: any;
    private sub: any;
    skill: any;

    constructor(private _dataService: DataService, private _router: Router, private _route: ActivatedRoute, private _toastr: ToastsManager) { }

    cancel() {
        this._router.navigate(['/Home/Skill']);
    }
    onSubmit() {
        this.sub = this._route.params.subscribe(params => {
            let id = params['id'];
            this._dataService.setDataSkill(id, this.list_skills);
            this._router.navigate(['/Home/Skill'])
            this._toastr.success('Modifications saved')
        })
    }
    ngOnInit() {
        this.sub = this._route.params.subscribe(params => {
            let id = params['id'];
            this._dataService.getData('skill', id).then((snapshot) => {
                this.data = snapshot.val();
                this.list_skills = this.data;
            })
        })
    }
}