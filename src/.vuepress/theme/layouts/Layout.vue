<template>
  <ParentLayout>
    <template #navbar>
      <Navbar />
    </template>
    <template #page>
      <Home v-if="frontmatter.layout === 'home'" />
    </template>
    <template #page-bottom>
      <FooterCta
        heading="One small click for you..."
        text="...one giant leap for developers everywhere. Download Lando and start accelerating your development workflow today."
        ctaText="Get Lando"
        ctaLink="/download/"
      />
      <Footer />
    </template>
  </ParentLayout>
</template>

<script setup>
// Deps
import {computed, Transition} from 'vue'; // eslint-disable-line no-unused-vars
import {usePageData, usePageFrontmatter} from '@vuepress/client';
import {useThemeData} from '@vuepress/plugin-theme-data/lib/client';
import {useScrollPromise} from '@vuepress/theme-default/lib/client/composables';

// Parent components
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue';

// Theme components
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import FooterCta from '../components/FooterCta.vue';

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
