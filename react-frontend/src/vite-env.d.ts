/// <reference types="vite/client" />

type RuntimeConfigs = Record<string, string>;

interface Window {
  config?: RuntimeConfigs;
  configs?: RuntimeConfigs;
}
