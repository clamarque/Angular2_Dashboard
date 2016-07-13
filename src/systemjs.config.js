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
    'collaborator-create':        'app/+collaborator/collaborator-create',
    'collaborator-index':         'app/+collaborator/collaborator-index',
    'collaborator-view':          'app/+collaborator/collaborator-view',
    '+customer':                  'app/+customer',
    'customer-create':            'app/+customer/customer-create',
    'customer-index':             'app/+customer/customer-index',
    'customer-view':              'app/+customer/customer-view',
    '+dashboard':                 'app/+dashboard',
    'dashboard-index':            'app/+dashboard/dashboard-index',
    '+home':                      'app/+home',
    'home-index':                 'app/+home/home-index',
    '+mission':                   'app/+mission',
    'mission-create':             'app/+mission/mission-create',
    'mission-index':              'app/+mission/mission-index',
    'mission-view':               'app/+mission/mission-view',
    '+role':                      'app/+role',
    'role-create':                'app/+role/role-create',
    'role-index':                 'app/+role/role-index',
    '+setting':                   'app/+setting',
    'setting-index':              'app/+setting/setting-index',
    '+skill':                     'app/+skill',
    'skill-create':               'app/+skill/skill-create',
    'skill-index':                'app/+skill/skill-index',
    'skill-view':                 'app/+skill/skill-view',
    '+user':                      'app/+user',
    'user-login':                 'app/+user/user-login',
    'user-register':              'app/+user/user-register',
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
    '@angular/http',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router',
    '@angular/router-deprecated',
    '@angular/testing',
    '@angular/upgrade',
    
    'app/',
    'app/+collaborator',
    'app/+collaborator/collaborator-create',
    'app/+collaborator/collaborator-index',
    'app/+collaborator/collaborator-view',
    'app/+customer',
    'app/+customer/customer-create',
    'app/+customer/customer-index',
    'app/+customer/customer-view',
    'app/+dashboard',
    'app/+dashboard/dashboard-index',
    'app/+home',
    'app/+home/home-index',
    'app/+mission',
    'app/+mission/mission-create',
    'app/+mission/mission-index',
    'app/+mission/mission-view',
    'app/+role',
    'app/+role/role-create',
    'app/+role/role-index',
    'app/+setting',
    'app/+setting/setting-index',
    'app/+skill',
    'app/+skill/skill-create',
    'app/+skill/skill-index',
    'app/+skill/skill-view',
    'app/+user',
    'app/+user/user-login',
    'app/+user/user-register',
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