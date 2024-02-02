import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideFeatureFlag } from './services/feature-flag.provider';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideFeatureFlag(),
    importProvidersFrom(
      [
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)
      ]
    )
  ]
};
