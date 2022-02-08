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
import NavbarCustom from '../components/NavbarCustom.vue';
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

// Handle scrollBehavior with transition
const scrollPromise = useScrollPromise();
const onBeforeEnter = scrollPromise.resolve;
const onBeforeLeave = scrollPromise.pending;

// navbar
const shouldShowNavbar = computed(
  () => frontmatter.value.navbar !== false && themeLocale.value.navbar !== false
)

// sidebar
const sidebarItems = useSidebarItems()
const isSidebarOpen = ref(false)
const toggleSidebar = (to?: boolean): void => {
  isSidebarOpen.value = typeof to === 'boolean' ? to : !isSidebarOpen.value
}
const touchStart = { x: 0, y: 0 }
const onTouchStart = (e): void => {
  touchStart.x = e.changedTouches[0].clientX
  touchStart.y = e.changedTouches[0].clientY
}
const onTouchEnd = (e): void => {
  const dx = e.changedTouches[0].clientX - touchStart.x
  const dy = e.changedTouches[0].clientY - touchStart.y
  if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
    if (dx > 0 && touchStart.x <= 80) {
      toggleSidebar(true)
    } else {
      toggleSidebar(false)
    }
  }
}
</script>

<style lang="scss">
@import '../../styles/index.scss';
</style>
