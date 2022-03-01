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
    logo: '/images/logo.png',
    logoDark: '/images/logo-white.png',
    navbar: [
      {text: 'Docs', link: 'https://docs.lando.dev'},
      {text: 'Blog', link: 'https://blog.lando.dev'},
    ],
    sidebar: [],
  },
  head: [
    ['link', {rel: 'preconnect', href: 'https://www.google-analytics.com/analytics.js', crossorigin: 'true'}],
    ['link', {rel: 'preconnect', href: 'https://fonts.googleapis.com', crossorigin: 'true'}],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lexend:wght@400;700;800&display=swap' }],
  ],
  plugins: [
    [
      '@vuepress/plugin-google-analytics',
      {
        id: 'G-HPJSRFPPPR',
      },
    ],
  ],
}
