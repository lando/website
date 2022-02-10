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
</style>
