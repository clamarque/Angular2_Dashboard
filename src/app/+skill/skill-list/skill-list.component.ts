import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES} from '@angular/router';

import { DataService, ObjectToArrayPipe, TitlePageService } from '../../shared';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

@Component({
    selector: 'skill-list',
    templateUrl: './app/+skill/skill-list/skill-list.component.html',
    directives: [ROUTER_DIRECTIVES, MD_BUTTON_DIRECTIVES],
    providers: [DataService, ObjectToArrayPipe, ToastsManager, TitlePageService]
})

export class SkillListComponent implements OnInit {
    list_skills: any[];
    data: any;
  
    constructor(private _dataService: DataService, private _objectToArrayPipe: ObjectToArrayPipe, private _toastr: ToastsManager, private _titlePAgeService: TitlePageService) { }

    deleteData(skill: any) {
        this._dataService.deleteData('skill',skill.id);
        this.ngOnInit();
        this._toastr.success('Skill deleted');
    }
    ngOnInit() {
        this._titlePAgeService.setTitle('Skills');
        this._dataService.getAllData('skill').then((snapshot) => {
            this.data = snapshot.val();
            this.list_skills = this._objectToArrayPipe.transform(this.data);
        })
    }
}
