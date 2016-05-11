import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {TranslatePipe, TranslateService} from 'ng2-translate/ng2-translate';
//Service
import {ProjectService} from "./project.service";

@Component({
    selector: 'new-projet',
    templateUrl: './dev/project/project-create.component.html',
    pipes: [TranslatePipe],
    providers: [ProjectService]

})

export class ProjectCreateComponent {

    constructor(public translate: TranslateService, private _projectService: ProjectService, private _router: Router) { }

    CreateProject(name, description, date) {
        this._projectService.Create(name, description, date)
            .subscribe(
            this._router.parent.navigateByUrl('/Home/Project')
            );
    }
}