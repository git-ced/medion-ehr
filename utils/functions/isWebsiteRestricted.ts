import { UserAgent } from 'next-useragent';

export function isWebsiteRestricted(userAgent: UserAgent) {
  // Reference: https://developer.chrome.com/multidevice/user-agent#webview_user_agent
  if (userAgent.source.includes('wv')) {
    return true;
  }
  if (userAgent.isBot) {
    return false;
  }

  // Reference: https://caniuse.com/es6
  if (userAgent.isChrome) {
    return userAgent.browserVersion < 51;
  }
  if (userAgent.isFirefox) {
    return userAgent.browserVersion < 54;
  }
  if ((userAgent.isSafari || userAgent.browser === 'Mobile Safari')) {
    return userAgent.browserVersion < 10;
  }
  if (userAgent.browser === 'Edge') {
    return userAgent.browserVersion < 15;
  }
  if (userAgent.browser === 'Opera') {
    return userAgent.browserVersion < 38;
  }
  if (userAgent.browser === 'Opera Mobile') {
    return userAgent.browserVersion < 46;
  }

  return false;
}
