import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS, Http} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {provide, PLATFORM_PIPES} from 'angular2/core';
import {TranslateLoader,TranslateStaticLoader,TRANSLATE_PROVIDERS,TranslateService} from 'ng2-translate/ng2-translate';

import {AuthenticationComponent} from './authentication/authentication.component';
import {FirebaseService} from './login/firebase.service';
//bootstrap(AuthenticationComponent, [HTTP_PROVIDERS,ROUTER_PROVIDERS,TRANSLATE_PROVIDERS,provide(LocationStrategy, {useClass: HashLocationStrategy}),provide(PLATFORM_PIPES, {useValue: [TranslatePipe], multi:true})]);
bootstrap(AuthenticationComponent, [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    FirebaseService,
    provide(TranslateLoader, {
        useFactory: (http:Http) => new TranslateStaticLoader(http, 'assets/i18n', '.json'),
        deps: [Http]
    }),
    TRANSLATE_PROVIDERS,
    TranslateService
])
  .catch(err => console.error(err));

