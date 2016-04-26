import {Directive, Attribute, ElementRef, DynamicComponentLoader} from "angular2/core";
import {Router, RouterOutlet, ComponentInstruction} from "angular2/router";
import {LoginComponent} from './login/login.component';


@Directive({
 selector: 'router-outlet'
})

export class LoggedInRouterOutlet extends RouterOutlet {
  publicRoutes: any;
  private parentRouter: Router;

 constructor(_elementRef: ElementRef, _loader: DynamicComponentLoader,
              _parentRouter: Router, @Attribute('name') nameAttr: string) {
    super(_elementRef, _loader, _parentRouter, nameAttr);
      
      this.parentRouter = _parentRouter;
      this.publicRoutes = {
          'AUTH': true
     };
  }

 OnActivate(instruction: ComponentInstruction) {
    let url = instruction.urlPath;
    if (!this.publicRoutes[url] && !localStorage.getItem('username') && !localStorage.getItem('password')) {
      this.parentRouter.navigateByUrl('/AUTH');
    }
    return super.activate(instruction);
  }
}