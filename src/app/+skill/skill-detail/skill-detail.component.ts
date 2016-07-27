import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DataService } from '../../shared';
import { Skill } from '../skill.interface';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: "skill-detail",
    templateUrl: './app/+skill/skill-detail/skill-detail.component.html',
    providers: [DataService, ToastsManager]
})

export class SkillDetailComponent implements OnInit {
    list_skills: any[];
    data: any;
    private sub: any;
    skill: Skill;

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