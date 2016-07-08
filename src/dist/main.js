"use strict";
//Angular
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var ng2_translate_1 = require('ng2-translate/ng2-translate');
core_1.enableProdMode();
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    http_1.HTTP_PROVIDERS,
    router_1.ROUTER_PROVIDERS,
    ng2_translate_1.TRANSLATE_PROVIDERS,
    ng2_translate_1.TranslateService,
    core_1.provide(ng2_translate_1.TranslateLoader, { useFactory: function (http) { return new ng2_translate_1.TranslateStaticLoader(http, 'assets/i18n', '.json'); }, deps: [http_1.Http] }),
    core_1.provide(core_1.PLATFORM_PIPES, { useValue: [ng2_translate_1.TranslatePipe], multi: true })
])
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map