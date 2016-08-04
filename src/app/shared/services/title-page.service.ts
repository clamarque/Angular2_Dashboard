import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Injectable()

export class TitlePageService {
    constructor() { }

    title: string;
    //public title: any = 'default title';

    //let self = this;
    getTitle() {
        return localStorage.getItem('title');


        //return this.title;

    }
    setTitle(newTitle) {
        this.title = newTitle;
        localStorage.removeItem('title');
        localStorage.setItem('title', this.title);
    }
}