import {Component} from "angular2/core";
import {TranslatePipe, TranslateService} from 'ng2-translate/ng2-translate';
import {Router} from 'angular2/router'

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

    CreateProject(name, description,date) {
        let self = this;

        this._projectService.Create(name, description,date)
            .subscribe(
            self._router.parent.navigateByUrl('/Home')
            );

    }
}