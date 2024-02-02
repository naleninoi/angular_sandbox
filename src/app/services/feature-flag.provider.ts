import { Observable } from 'rxjs';
import { APP_INITIALIZER, inject } from '@angular/core';
import { FeatureFlagService } from './feature-flag.service';

function initializeFeatureFlag(): () => Observable<any> {
  const featureFlagService = inject(FeatureFlagService);
  return () => featureFlagService.getFeatureFlags();
}

export const provideFeatureFlag = () => ({
  provide: APP_INITIALIZER,
  useFactory: initializeFeatureFlag,
  deps: [],
  multi: true
});
