import { Component } from '@angular/core';
import { FORM_DIRECTIVES, Control } from '@angular/common';
import { TranslateService } from 'ng2-translate/ng2-translate';


@Component({
    selector: 'setting',
    templateUrl: '/dev/setting/setting.component.html',
    directives: [FORM_DIRECTIVES]
})

export class SettingComponent {
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

