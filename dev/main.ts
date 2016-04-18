import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from "./app.component";
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {provide, PLATFORM_PIPES} from 'angular2/core';
import {TRANSLATE_PROVIDERS, TranslatePipe} from 'ng2-translate/ng2-translate';

bootstrap(AppComponent, [HTTP_PROVIDERS,ROUTER_PROVIDERS,TRANSLATE_PROVIDERS,provide(LocationStrategy, {useClass: HashLocationStrategy}),  provide(PLATFORM_PIPES, {useValue: [TranslatePipe], multi:true}]);

