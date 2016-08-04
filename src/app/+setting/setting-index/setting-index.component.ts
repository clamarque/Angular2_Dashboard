import { FORM_DIRECTIVES, Control } from '@angular/common';
import { Component } from '@angular/core';

import { TranslateService } from 'ng2-translate/ng2-translate';
import { MD_SLIDE_TOGGLE_DIRECTIVES } from '@angular2-material/slide-toggle';
import { TitlePageService } from '../../shared';

@Component({
    selector: 'setting-index',
    templateUrl: './app/+setting/setting-index/setting-index.component.html',
    directives: [FORM_DIRECTIVES, MD_SLIDE_TOGGLE_DIRECTIVES],
    providers: [TitlePageService]
})

export class SettingIndexComponent {
    language: Control = new Control(false);

    constructor(private _translate: TranslateService, private _titlePageService: TitlePageService) { 
        this._titlePageService.setTitle('Settings');
    }

    changeLanguage(value) {
        if (value) {
            this._translate.use('en');
        } else {
            this._translate.use('fr');
        }
    }
}