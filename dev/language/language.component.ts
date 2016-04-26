import { Component } from 'angular2/core';
import { FORM_DIRECTIVES, Control } from 'angular2/common';
import { TranslateService,TranslatePipe } from 'ng2-translate/ng2-translate';


@Component({
    selector: 'language-chooser',
    templateUrl: './dev/language/language.html',
    directives: [FORM_DIRECTIVES],
    pipes:[TranslatePipe]
})

export class LanguageComponent{
    language: Control = new Control('');

    constructor(private translate: TranslateService){

    }

    changeLanguage(value){
    console.log(value);
        if(value == 'FR') {
            this.translate.use('fr');
        } else {
            this.translate.use('en');
        }
    }

}