const webpack = require('webpack');

module.exports = {
  title: 'Lando',
  description: 'The liberating local development tool for all your projects.',
  configureWebpack: config => {
    return {plugins: [
      new webpack.EnvironmentPlugin({
        LANDO_API: process.env.LANDO_API || 'https://api.lando.dev',
      }),
    ]};
  },
  head: [
    ['link', {rel: 'preconnect', href: 'https://www.google-analytics.com/analytics.js', crossorigin: 'true'}],
    ['link', {rel: 'preload', href: '//js.hs-scripts.com/6864374.js', crossorigin: 'true', as: 'script'}],
    ['link', {rel: 'preload', href: '//cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css', crossorigin: 'true', as: 'style'}],
    ['link', {rel: 'preload', href: '//cdn.jsdelivr.net/devicons/1.8.0/css/devicons.min.css', crossorigin: 'true', as: 'style'}],
    ['link', {rel: 'preload', href: '//fonts.googleapis.com/css?family=Poppins:700|Source+Sans+Pro&display=swap', crossorigin: 'true', as: 'style'}],
    ['link', {rel: 'icon', href: '/favicon.ico'}],
    ['link', {rel: 'stylesheet', href: '/styles/overrides.css'}],
    ['link', {rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Poppins:700|Source+Sans+Pro&display=swap'}],
    ['link', {rel: 'stylesheet', href: '//cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css'}],
    ['link', {rel: 'stylesheet', href: '//cdn.jsdelivr.net/devicons/1.8.0/css/devicons.min.css'}],
    ['script', {src: '//js.hs-scripts.com/6864374.js'}],
  ],
  plugins: {
    '@vuepress/google-analytics': {
      ga: 'UA-74237404-3',
    },
    'autometa': {
      site: {
        name: 'Lando',
        twitter: 'devwithlando',
      },
      canonical_base: 'https://lando.dev',
      image: 'https://lando.dev/images/logo-pink-medium.png',
    },
    'canonical': {
      baseURL: 'https://lando.dev',
    },
    'robots': {
      host: 'https://lando.dev',
      sitemap: '/sitemap.xml',
      policies: [
        {
          userAgent: '*',
          disallow: [
            '/thanks/',
          ],
        },
      ],
    },
    'sitemap': {
      hostname: 'https://lando.dev',
      exclude: [
        '/404.html',
        '/thanks/',
      ],
    },
  },
  themeConfig: {
    docsDir: 'src',
    docsBranch: 'main',
    logo: '/images/logo-small-white.png',
    search: false,
    editLinks: false,
    nav: [
      {text: 'Get Lando!', link: '/download/'},
      {text: 'Sponsor', link: 'https://github.com/sponsors/lando'},
      {text: 'Documentation', link: 'https://docs.lando.dev'},
      {text: 'Blog', link: 'https://blog.lando.dev'},
      {text: 'Events & Meetups', link: 'https://events.lando.dev'},
      {text: 'Services & Support', link: 'https://thinktandem.io/contact/'},
      {text: 'Careers', link: '/careers/'},
    ],
  },
};
