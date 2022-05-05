const {path} = require('@vuepress/utils');

const parentTheme = require('@lando/vuepress-theme-default-plus');
const {palettePlugin} = require('@vuepress/plugin-palette');
const {registerComponentsPlugin} = require('@vuepress/plugin-register-components');

module.exports = options => {
  return {
    name: '@lando/website-theme',
    extends: parentTheme(options),
    alias: {
      '@theme/Navbar.vue': path.resolve(__dirname, 'components', 'NavbarCustom.vue'),
      '@theme/ToggleSidebarButton.vue': path.resolve(__dirname, 'components', 'ToggleSidebarButtonCustom.vue'),
    },
    layouts: path.resolve(__dirname, 'layouts'),
    plugins: [
      palettePlugin({
        preset: 'sass',
        userStyleFile: path.resolve(__dirname, 'styles', 'index.scss'),
        userPaletteFile: path.resolve(__dirname, 'styles', 'palette.scss'),
      }),
      registerComponentsPlugin({
        componentsDir: path.resolve(__dirname, './components'),
        componentsPatterns: ['*.vue', '**/*.vue'],
      }),
    ],
  };
};
