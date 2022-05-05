const {path} = require('@vuepress/utils');
const parentTheme = require('@lando/vuepress-theme-default-plus');
const {registerComponentsPlugin} = require('@vuepress/plugin-register-components');

module.exports = options => {
  return {
    name: '@lando/website-theme',
    extends: parentTheme(options),
    alias: {
      '@theme/Navbar.vue': path.resolve(__dirname, 'components', 'NavbarCustom.vue'),
      '@theme/ToggleSidebarButton.vue': path.resolve(__dirname, 'components', 'ToggleSidebarButtonCustom.vue'),
    },
    darkMode: false,
    layouts: path.resolve(__dirname, 'layouts'),
    ga: {
      enabled: true,
      id: 'G-HPJSRFPPPR',
    },
    plugins: [
      registerComponentsPlugin({
        componentsDir: path.resolve(__dirname, './components'),
        componentsPatterns: ['*.vue', '**/*.vue'],
      }),
    ],
  };
};
