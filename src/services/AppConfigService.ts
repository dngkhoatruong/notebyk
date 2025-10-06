// src/services/configService.ts
export interface AppConfig {
  apiBaseUrl: string;
  featureFlags?: Record<string, boolean>;
  appVersion?: string;
}

let config: AppConfig | null = null;

async function loadConfig() {}

function getConfig() {}

export const AppConfigService = {
  loadConfig,
  getConfig,
};
