const { path } = require('@vuepress/utils')
const _ = require('lodash');

module.exports = (options, app) => {
  return {
    theme: path.resolve(__dirname, '.'),
    extends: '@vuepress/theme-default',
    alias: {
      '@theme/Navbar.vue': path.resolve(__dirname, 'components', 'NavbarCustom.vue'),
      '@theme/ToggleSidebarButton.vue': path.resolve(__dirname, 'components', 'ToggleSidebarButtonCustom.vue'),
    },
    darkMode: false,
    layouts: path.resolve(__dirname, 'layouts'),
    plugins: [
      ['@vuepress/register-components',
        {
          componentsDir: path.resolve(__dirname, './components'),
          componentsPatterns: ['*.vue', '**/*.vue'],
        },
      ],
      // Use sass palette stuff
      ['@vuepress/plugin-palette',
        {
          preset: 'sass',
        },
      ],
    ],
    async extendsPage(page) {
      if (!_.isArray(page.data.frontmatter.head)) page.data.frontmatter.head = [];

      // construct twitter metadata push unshift into frontmatter
      // Vuepress2 seems to prioritize the earliest same named content so we need to push
      // instead of unshift
      const title = page.frontmatter.title || page.data.title || app.options.title || app.siteData.title;
      const description = page.frontmatter.description || page.data.frontmatter.description || app.options.title;
      const timestamp = _.get(page, 'data.git.updatedTime', new Date().getTime());
      page.data.frontmatter.head.push(
        ['meta', {name: 'twitter:card', content: 'summary'}],
        ['meta', {name: 'twitter:title', content: title}],
        ['meta', {name: 'twitter:description', content: description}],
        ['meta', {name: 'twitter:site', content: _.get(app, 'options.themeConfig.social.owner', title)}],
        ['meta', {property: 'og:type', content: 'article'}],
        ['meta', {property: 'og:title', content: title}],
        ['meta', {property: 'og:description', content: description}],
        ['meta', {property: 'og:site_name', content: app.siteData.title}],
        ['meta', {property: 'article:published_time', content: new Date(timestamp)}],
        ['meta', {itemprop: 'name', content: title}],
        ['meta', {itemprop: 'description', content: description}],
      );

      // add urls if we can
      if (_.has(app, 'options.themeConfig.canonicalUrl')) {
        const url = `${app.options.themeConfig.canonicalUrl}${app.options.base}${_.trim(page.data.path, '/')}`;
        page.data.frontmatter.head.push(
          ['meta', {name: 'twitter:url', content: url}],
          ['meta', {property: 'og:url', content: url}],
          ['link', {rel: 'canonical', href: url}],
        );
      }

      // add image if we can
      if (_.has(page, 'frontmatter.image')) {
        const image = page.frontmatter.image;
        page.data.frontmatter.head.push(
          ['meta', {name: 'og:image', content: image}],
          ['meta', {name: 'og:image:alt', content: title}],
          ['meta', {name: 'twitter:image', content: image}],
          ['meta', {name: 'twitter:image:alt', content: title}],
        );
      }
    }
  }
}
