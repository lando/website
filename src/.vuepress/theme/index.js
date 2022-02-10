const { path } = require('@vuepress/utils')

module.exports = {
  theme: path.resolve(__dirname, '.'),
  extends: '@vuepress/theme-default',
  alias: {
    '@theme/Navbar.vue': path.resolve(__dirname, 'components', 'NavbarCustom.vue'),
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
}
