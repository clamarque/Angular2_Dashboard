import {bootstrap}    from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS, Http} from '@angular/http';
import {ROUTER_PROVIDERS} from '@angular/router';
import {provide, PLATFORM_PIPES} from '@angular/core';
import {TranslateLoader,TranslateStaticLoader,TRANSLATE_PROVIDERS,TranslateService} from 'ng2-translate/ng2-translate';

import {BootstrappingComponent} from './bootstrapping/bootstrapping.component';
import {LoginService} from './login/login.service';
//bootstrap(AuthenticationComponent, [HTTP_PROVIDERS,ROUTER_PROVIDERS,TRANSLATE_PROVIDERS,provide(LocationStrategy, {useClass: HashLocationStrategy}),provide(PLATFORM_PIPES, {useValue: [TranslatePipe], multi:true})]);
bootstrap(BootstrappingComponent, [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    LoginService,
    provide(TranslateLoader, {
        useFactory: (http:Http) => new TranslateStaticLoader(http, 'assets/i18n', '.json'),
        deps: [Http]
    }),
    TRANSLATE_PROVIDERS,
    TranslateService
])
  .catch(err => console.error(err));

