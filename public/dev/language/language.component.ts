//Angular
import {Component} from '@angular/core';
import {FORM_DIRECTIVES, Control} from '@angular/common';

import {TranslateService,TranslatePipe} from 'ng2-translate/ng2-translate';

@Component({
    selector: 'language-chooser',
    templateUrl: './dev/language/language.html',
    directives: [FORM_DIRECTIVES],
    pipes:[TranslatePipe]
})

export class LanguageComponent{
    
    language: Control = new Control('');

    constructor(private _translate: TranslateService){}

    changeLanguage(value){
    console.log(value);
        if(value == 'FR') {
            this._translate.use('fr');
        } else {
            this._translate.use('en');
        }
    }
}
