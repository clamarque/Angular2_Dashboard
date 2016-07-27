import { provide, PLATFORM_PIPES, enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS, Http } from '@angular/http';
import { bootstrap }    from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms } from '@angular/forms';


import { appRouterProviders } from './app.routes';
import { AppComponent } from './app.component';
import { TranslateLoader, TranslateStaticLoader, TRANSLATE_PROVIDERS, TranslateService, TranslatePipe } from 'ng2-translate/ng2-translate';

import { AuthGuard } from './shared';

enableProdMode();

bootstrap(AppComponent, [
  appRouterProviders,
  AuthGuard,
  HTTP_PROVIDERS,
  disableDeprecatedForms(),
  provideForms(), 
  TRANSLATE_PROVIDERS,
  TranslateService,
  provide(TranslateLoader, { useFactory: (http: Http) => new TranslateStaticLoader(http, 'assets/i18n', '.json'), deps: [Http] }),
  provide(PLATFORM_PIPES, { useValue: [TranslatePipe], multi: true })
])
  .catch(err => console.error(err));

