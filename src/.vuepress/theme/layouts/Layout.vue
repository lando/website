<template>
  <div class="layout-wrapper">
    <ParentLayout>
      <template #navbar>
        <NavbarCustom />
      </template>
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

<script setup>
// Deps
import {computed, Transition} from 'vue'; // eslint-disable-line no-unused-vars
import {usePageData, usePageFrontmatter} from '@vuepress/client';
import {useThemeData} from '@vuepress/plugin-theme-data/lib/client';
import {useScrollPromise} from '@vuepress/theme-default/lib/client/composables';

// Parent components
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue';
import Page from '@vuepress/theme-default/lib/client/components/Page.vue';

// Theme components
import NavbarCustom from '../components/NavbarCustom.vue';
import Footer from '../components/Footer.vue';
import FooterCta from '../components/FooterCta.vue';
import HomeCustom from '../components/HomeCustom.vue';

// Get theme data
const frontmatter = usePageFrontmatter();
const themeData = useThemeData();
const page = usePageData();
// Get the config from themedata
const {carbonAds, showSponsors, sidebarTitle, sidebarTitleIcon} = themeData.value;
const {version, versionLink} = page.value;

// Handle scrollBehavior with transition
const scrollPromise = useScrollPromise();
const onBeforeEnter = scrollPromise.resolve;
const onBeforeLeave = scrollPromise.pending;
</script>

<style lang="scss">
@import '../../styles/index.scss';
</style>
