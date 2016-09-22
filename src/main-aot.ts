import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from './app/app.module.ngfactory';

console.info('app.environment:', app.environment);
if (app.environment === 'production') {
  enableProdMode();
}
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
