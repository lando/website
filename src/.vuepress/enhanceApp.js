import axios from 'axios';
import VueLazyload from 'vue-lazyload';

/*
 * Use this file to augment vuepress with other vue-y things
 */
export default ({ Vue, options, router, siteData }) => { // eslint-disable-line

  // Add in lazyload
  Vue.use(VueLazyload, {
    lazyComponent: true,
  });

  if (typeof process === 'undefined') {
    Vue.use({
      install(Vue) {
        Object.defineProperties(Vue.prototype, {
          $api: {
            get() {
              return axios.create({baseURL: process.env.LANDO_API});
            },
          },
        });
      },
    });
  }
};
