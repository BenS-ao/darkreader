import {getUILanguage} from './locales';

export const BLOG_URL = 'https://darkreader.org/blog/';
export const NEWS_URL = 'https://darkreader.org/blog/posts.json';
export const DEVTOOLS_DOCS_URL = 'https://github.com/darkreader/darkreader/blob/main/CONTRIBUTING.md';
export const DONATE_URL = 'https://opencollective.com/darkreader/donate';
export const GITHUB_URL = 'https://github.com/darkreader/darkreader';
export const PRIVACY_URL = 'https://darkreader.org/privacy/';
export const TWITTER_URL = 'https://twitter.com/darkreaderapp';
export const UNINSTALL_URL = 'https://darkreader.org/goodluck/';

const helpLocales = [
    'be',
    'cs',
    'de',
    'en',
    'es',
    'fr',
    'it',
    'nl',
    'pt',
    'ru',
    'sr',
    'tr',
    'zh-CN',
    'zh-TW',
];

export function getHelpURL() {
    const locale = getUILanguage();
    const matchLocale = helpLocales.find((hl) => hl === locale) || helpLocales.find((hl) => locale.startsWith(hl)) || 'en';
    return `https://darkreader.org/help/${matchLocale}/`;
}

export function getBlogPostURL(postId: string) {
    return `${BLOG_URL}${postId}/`;
}
