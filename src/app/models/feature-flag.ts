export interface FeatureFlagResponse {
  fastLogin: boolean,
  fastRegister: boolean,
  fastSettings: boolean
}

export type FeatureFlagKeys = keyof FeatureFlagResponse;
