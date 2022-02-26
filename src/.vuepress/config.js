const { path } = require('@vuepress/utils')

module.exports = {
  lang: 'en-US',
  title: 'Lando',
  description: 'Instant dev environments for all your projects.',
  theme: path.resolve(__dirname, './theme'),
  themeConfig: {
    contributors: false,
    editLink: false,
    lastUpdated: false,
    logo: '/images/logo-small-pink.png',
    logoDark: '/images/logo-small-white.png',
    navbar: [
      {text: 'Docs', link: 'https://docs.lando.dev'},
      {text: 'Blog', link: 'https://blog.lando.dev'},
    ],
    sidebar: [],
    pages: {
      contributors: {
        enabled: false,
      },
      versions: {
        enabled: false,
      }
    },
  },
  head: [
    ['link', {rel: 'preconnect', href: 'https://www.google-analytics.com/analytics.js', crossorigin: 'true'}],
  ],
  bundler: '@vuepress/bundler-webpack',
}
