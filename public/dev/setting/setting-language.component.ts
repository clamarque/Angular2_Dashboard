//Angular
import { FORM_DIRECTIVES, Control } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate/ng2-translate';


@Component({
    selector: 'setting-language',
    templateUrl: '/dev/setting/setting-language.component.html',
    directives: [FORM_DIRECTIVES]
})

export class SettingLanguageComponent {
    language: Control = new Control(false);

    constructor(private _translate: TranslateService) { }

    changeLanguage(value) {
        if (value) {
            this._translate.use('fr');
        } else {
            this._translate.use('en');
        }
    }

}

