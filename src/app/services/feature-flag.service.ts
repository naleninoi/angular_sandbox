import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { FeatureFlagKeys, FeatureFlagResponse } from '../models/feature-flag';

@Injectable({
  providedIn: 'root'
})
export class FeatureFlagService {

  private http = inject(HttpClient);

  private features = signal<FeatureFlagResponse>({
    fastLogin: false,
    fastRegister: false,
    fastSettings: false
  });

  getFeatureFlags(): Observable<FeatureFlagResponse> {
    return this.http.get<FeatureFlagResponse>('/api/flags')
      .pipe(
        tap(features => this.features.set(features)),
        tap(features => console.log(features))
      );
  }

  getFeature(feature: FeatureFlagKeys): boolean {
    return this.features()[feature] ?? false;
  }

}
