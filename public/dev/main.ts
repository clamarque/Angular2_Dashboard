//Angular
import { provide, PLATFORM_PIPES } from '@angular/core';
import { HTTP_PROVIDERS, Http } from '@angular/http';
import { bootstrap }    from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS } from '@angular/router';

//Component
import {BootstrappingComponent} from './bootstrapping/bootstrapping.component';

//Implementation Translate
import { TranslateLoader, TranslateStaticLoader, TRANSLATE_PROVIDERS, TranslateService, TranslatePipe } from 'ng2-translate/ng2-translate';

bootstrap(BootstrappingComponent, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  TRANSLATE_PROVIDERS,
  TranslateService,
  provide(TranslateLoader, { useFactory: (http: Http) => new TranslateStaticLoader(http, 'assets/i18n', '.json'), deps: [Http] }),
  provide(PLATFORM_PIPES, { useValue: [TranslatePipe], multi: true })
])
  .catch(err => console.error(err));

