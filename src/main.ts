import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {DiSampleApp, DiSampleAppModule} from './app/dependency-injection/app';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(DiSampleApp)
  .catch(err => console.log(err));
