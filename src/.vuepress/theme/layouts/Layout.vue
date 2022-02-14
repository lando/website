<template>
  <div class="layout-wrapper">
    <ParentLayout>
      <template #page>
        <HomeCustom v-if="frontmatter.type === 'home'" />
        <Page
          v-else
          :key="page.path"
        >
          <template #top>
            <slot name="page-top" />
          </template>
          <template #bottom>
            <slot name="page-bottom" />
          </template>
        </Page>
      </template>
    </ParentLayout>
    <Footer />
  </div>
</template>

<script setup lang="ts">

// Deps
import {computed, Transition, ref} from 'vue'; // eslint-disable-line no-unused-vars
import {usePageData, usePageFrontmatter} from '@vuepress/client';
import {useThemeData} from '@vuepress/plugin-theme-data/lib/client';
import {useScrollPromise, useThemeLocaleData, useSidebarItems} from '@vuepress/theme-default/lib/client/composables';

// Parent components
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue';
import Page from '@vuepress/theme-default/lib/client/components/Page.vue';

// Theme components
import Footer from '../components/Footer.vue';
import FooterCta from '../components/FooterCta.vue';
import HomeCustom from '../components/HomeCustom.vue';

// Get theme data
const frontmatter = usePageFrontmatter();
const themeLocale = useThemeLocaleData()
const themeData = useThemeData();
const page = usePageData();
// Get the config from themedata
const {carbonAds, showSponsors, sidebarTitle, sidebarTitleIcon} = themeData.value;
const {version, versionLink} = page.value;

</script>

<style lang="scss">
@import '../../styles/index.scss';
.page {
  padding: 0rem;
}

.theme-container {

  .sidebar-open .sidebar {
    transform: translateY(0);
    top: var(--navbar-height);
  }
  .sidebar {
    display: none;
    width: 100%;
    z-index: 100;
    background: radial-gradient(148.29% 119.48% at 105.77% -28.17%, #412B6B 0%, #34244D 46.09%, #302243 96.16%);
  }
}

@media (max-width: 719px) {
  .theme-container.sidebar-open .sidebar, {
    transform: none;
    display: block;
    top: var(--navbar-height);
    background: radial-gradient(148.29% 119.48% at 105.77% -28.17%, #412B6B 0%, #34244D 46.09%, #302243 96.16%);
  }
}
</style>
