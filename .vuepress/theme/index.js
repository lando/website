const {path} = require('@vuepress/utils');

module.exports = (options, app) => {
  return {
    theme: path.resolve(__dirname, '.'),
    extends: '@lando/vuepress-theme-default-plus',
    alias: {
      '@theme/Navbar.vue': path.resolve(__dirname, 'components', 'NavbarCustom.vue'),
      '@theme/ToggleSidebarButton.vue': path.resolve(__dirname, 'components', 'ToggleSidebarButtonCustom.vue'),
    },
    darkMode: true,
    layouts: path.resolve(__dirname, 'layouts'),
    ga: {
      enabled: true,
      id: 'G-HPJSRFPPPR',
    },
    plugins: [
      ['@vuepress/register-components',
        {
          componentsDir: path.resolve(__dirname, './components'),
          componentsPatterns: ['*.vue', '**/*.vue'],
        },
      ],
    ],
  };
};
