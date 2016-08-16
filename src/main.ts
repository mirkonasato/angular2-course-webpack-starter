import 'bootstrap/dist/css/bootstrap.css';

import 'core-js/es6';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

console.info('app.environment:', app.environment);
if (app.environment === 'production') {
  enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule);
