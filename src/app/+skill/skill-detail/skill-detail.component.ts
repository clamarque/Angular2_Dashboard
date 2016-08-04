import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DataService, TitlePageService } from '../../shared';
import { Skill } from '../skill.interface';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';

@Component({
    selector: "skill-detail",
    templateUrl: './app/+skill/skill-detail/skill-detail.component.html',
    directives: [MD_BUTTON_DIRECTIVES, MD_INPUT_DIRECTIVES],
    providers: [DataService, ToastsManager, TitlePageService]
})

export class SkillDetailComponent implements OnInit {
    list_skills: any[];
    data: any;
    private sub: any;
    skill: Skill;

    constructor(private _dataService: DataService, private _router: Router, private _route: ActivatedRoute, private _toastr: ToastsManager, private _titlePageService: TitlePageService) { }

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
        this._titlePageService.setTitle('Skill details');
        this.sub = this._route.params.subscribe(params => {
            let id = params['id'];
            this._dataService.getData('skill', id).then((snapshot) => {
                this.data = snapshot.val();
                this.list_skills = this.data;
            })
        })
    }
}