const {path} = require('@vuepress/utils');

module.exports = {
  lang: 'en-US',
  title: 'Lando',
  description: 'Instant dev environments for all your projects.',
  theme: path.resolve(__dirname, './theme'),
  themeConfig: {
    baseUrl: 'https://lando.dev',
    contributors: false,
    editLink: false,
    lastUpdated: false,
    logo: '/images/logo.png',
    logoDark: '/images/logo-white.png',
    pages: {
      contributors: {
        enabled: false,
      },
      versions: {
        enabled: false,
      },
    },
    sharedNavbar: [
      {text: 'Blog', link: 'https://lando.dev/blog/'},
      {text: 'Support', link: '/support'},
    ],
    navbar: [
      {text: 'Docs', link: 'https://docs.lando.dev'},
    ],
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
