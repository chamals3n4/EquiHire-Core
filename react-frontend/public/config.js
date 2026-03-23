// Runtime configuration for browser builds.
//
// In Choreo, mount a file at /config.js per environment to override these values.
// Keep only browser-safe values here (no sensitive secrets).
window.config = {
  VITE_ASGARDEO_CLIENT_ID: "xSS1vSRiAfyL3EO_tAlyFIC991Ma",
  VITE_ASGARDEO_BASE_URL: "https://api.asgardeo.io/t/aiv0ra",
  VITE_REDIRECT_URL: "https://YOUR-FRONTEND-DOMAIN",
  VITE_ASGARDEO_ORG_ID: "aiv0ra",
  VITE_API_URL: "https://YOUR-BACKEND-DOMAIN",
};

// Backward compatibility for existing code paths.
window.configs = window.config;
