const {path} = require('@vuepress/utils');

module.exports = {
  lang: 'en-US',
  title: 'Lando',
  description: 'Instant dev environments for all your projects.',
  theme: path.resolve(__dirname, './theme'),
  themeConfig: {
 // PARENT CONFIG
    contributors: false,
    darkMode: true,
    docsDir: '.',
    docsBranch: 'main',
    editLink: false,
    editLinkText: 'Suggest an edit to this page',
    lastUpdated: false,
    lastUpdatedText: 'Updated',
    logo: '/lando/logo.png',
    logoDark: '/images/logo-white.png',
    repo: 'lando/events',
    sidebar: [],

    // THEME CONFIG
    baseUrl: 'https://lando.dev',
    autometa: {
      twitter: '@devwithlando',
      canonicalUrl: 'https://lando.dev/',
    },
    carbonAds: false,
    contributorsPage: false,
    contributorsExclude: [
      'dependabot[bot]',
    ],
    ga: {
      id: 'G-HPJSRFPPPR',
    },
    hubspot: {
      id: '6478338',
    },
    jobs: false,
    readMode: false,
    rightbar: false,
    robots: {
      allowAll: true,
    },
    sitemap: true,
    sharedNavbar: [
      {text: 'Blog', link: 'https://lando.dev/blog'},
      {text: 'Events', link: '/'},
      {text: 'Support', link: 'https://lando.dev/support'},
      {text: 'Docs', link: 'https://docs.lando.dev'},
    ],
    sidebar: false,
    sidebarHeader: false,
    search: false,
    social: false,
    sponsors: false,
    tags: false,
    toc: false,
    versionsPage: false,
  },
  head: [
    ['link', {rel: 'preconnect', href: 'https://www.google-analytics.com/analytics.js', crossorigin: 'true'}],
    ['link', {rel: 'preconnect', href: 'https://fonts.googleapis.com', crossorigin: 'true'}],
    ['link', {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lexend:wght@400;700;800&display=swap'}],
    ['link', {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png'}],
    ['link', {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png'}],
    ['link', {rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png'}],
    ['link', {rel: 'manifest', href: '/site.webmanifest'}],
    ['link', {rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#DD3F8F'}],
    ['meta', {name: 'msapplication-TileColor', content: '#DD3F8F'}],
    ['meta', {name: 'theme-color', content: '#ffffff'}],
  ],
};
