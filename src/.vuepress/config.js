const { path } = require('@vuepress/utils')

module.exports = {
  lang: 'en-US',
  title: 'Lando',
  description: 'Instant dev environments for all your projects.',
  theme: path.resolve(__dirname, './theme/index.js'),
  themeConfig: {
    contributors: false,
    editLink: false,
    lastUpdated: false,
    logo: '/images/logo-small-pink.png',
    logoDark: '/images/logo-small-white.png',
    navbar: [
      {text: 'Features', link: '/features/'},
      {text: 'Pricing', link: '/pricing/'},
      {text: 'Resources', link: 'https://docs.lando.dev'},
    ],
    sidebar: false,
  }
}
