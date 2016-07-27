(function(global) {
  
  const systemConfigPackages = {};

  // map tells the System loader where to look for things
  var map = {
    'app':                        '/dist/app', // 'dist',
    'rxjs':                       'node_modules/rxjs',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    '@angular':                   'node_modules/@angular',
    'ng2-translate':              'node_modules/ng2-translate',
    'firebase':                   'node_modules/firebase/lib/firebase-web.js',
    'ng2-notifications':          'node_modules/ng2-notifications',
    
    './':                         'app/',
    '+collaborator':              'app/+collaborator',
    'collaborator-signin':        'app/+collaborator/collaborator-signin',
    'collaborator-detail':        'app/+collaborator/collaborator-detail',
    'collaborator-list':          'app/+collaborator/collaborator-list',
    'collaborator-reset':         'app/+collaborator/collaborator-reset',
    'collaborator-register':      'app/+collaborator/collaborator-register',
    '+customer':                  'app/+customer',
    'customer-create':            'app/+customer/customer-create',
    'customer-detail':            'app/+customer/customer-detail',
    'customer-list':              'app/+customer/customer-list',
    '+dashboard':                 'app/+dashboard',
    'dashboard-list':             'app/+dashboard/dashboard-list',
    '+home':                      'app/+home',
    'home-list':                  'app/+home/home-list',
    '+mission':                   'app/+mission',
    'mission-create':             'app/+mission/mission-create',
    'mission-detail':             'app/+mission/mission-detail',
    'mission-list':               'app/+mission/mission-list',
    '+role':                      'app/+role',
    'role-create':                'app/+role/role-create',
    'role-list':                  'app/+role/role-list',
    '+setting':                   'app/+setting',
    'setting-list':               'app/+setting/setting-list',
    '+skill':                     'app/+skill',
    'skill-create':               'app/+skill/skill-create',
    'skill-detail':               'app/+skill/skill-detail',
    'skill-list':                 'app/+skill/skill-list',
    'shared':                     'app/shared',
    'pipes':                      'app/shared/pipes',
    'services':                   'app/shared/services'
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { defaultExtension: 'js' },
    'ng2-translate':              { defaultExtension: 'js'},
    'ng2-notifications':          { defaultExtension: 'js'}
  };

  var packageNames = [
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/forms',
    '@angular/http',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router',
    '@angular/router-deprecated',
    '@angular/testing',
    '@angular/upgrade',
    
    'app/',
    'app/+collaborator',
    'app/+collaborator/collaborator-detail',
    'app/+collaborator/collaborator-list',
    'app/+collaborator/collaborator-register',
    'app/+collaborator/collaborator-reset',
    'app/+collaborator/collaborator-signin',
    'app/+customer',
    'app/+customer/customer-create',
    'app/+customer/customer-detail',
    'app/+customer/customer-list',
    'app/+dashboard',
    'app/+dashboard/dashboard-index',
    'app/+home',
    'app/+home/home-index',
    'app/+mission',
    'app/+mission/mission-create',
    'app/+mission/mission-detail',
    'app/+mission/mission-list',
    'app/+role',
    'app/+role/role-create',
    'app/+role/role-list',
    'app/+setting',
    'app/+setting/setting-index',
    'app/+skill',
    'app/+skill/skill-create',
    'app/+skill/skill-detail',
    'app/+skill/skill-list',
    'app/shared',
    'app/shared/pipes',
    'app/shared/services'
  ];

  // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
  packageNames.forEach(function(pkgName) {
    packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
  });
    
  var config = {
    map: map,
    packages: packages
  }

  // filterSystemConfig - index.html's chance to modify config before we register it.
  if (global.filterSystemConfig) { global.filterSystemConfig(config); }

  System.config(config);

})(this);