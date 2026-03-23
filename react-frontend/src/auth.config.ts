interface AuthConfig {
  signInRedirectURL: string;
  signOutRedirectURL: string;
  clientID: string;
  baseUrl: string;
  scope: string[];
  orgID: string;
}

const runtimeConfigs = window.config || window.configs || {};

export const authConfig: AuthConfig = {
  clientID:
    runtimeConfigs.VITE_ASGARDEO_CLIENT_ID ||
    import.meta.env.VITE_ASGARDEO_CLIENT_ID,
  baseUrl:
    runtimeConfigs.VITE_ASGARDEO_BASE_URL ||
    import.meta.env.VITE_ASGARDEO_BASE_URL,
  signInRedirectURL:
    runtimeConfigs.VITE_REDIRECT_URL || import.meta.env.VITE_REDIRECT_URL,
  signOutRedirectURL:
    runtimeConfigs.VITE_REDIRECT_URL || import.meta.env.VITE_REDIRECT_URL,
  scope: ["openid", "profile", "email"],
  orgID:
    runtimeConfigs.VITE_ASGARDEO_ORG_ID || import.meta.env.VITE_ASGARDEO_ORG_ID,
};
