<template>
  <div class="layout-wrapper">
    <ParentLayout>
      <template #sidebar-bottom>
        <FooterCta
          heading="What are you waiting for?"
          ctaText="Get Lando Now"
          ctaLink="/download"
        />
      </template>
      <template #page>
        <HomeCustom v-if="frontmatter.type === 'home'" />
        <Page
          v-else
          :key="page.path"
        >
          <template #top>
            <div class="page-orbit orbit-1"></div>
            <div class="page-orbit orbit-2"></div>
            <div class="page-orbit orbit-3"></div>
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
import {usePageData, usePageFrontmatter} from '@vuepress/client';

// Parent components
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue';
import Page from '@vuepress/theme-default/lib/client/components/Page.vue';

// Theme components
import Footer from '../components/Footer.vue';
import FooterCta from '../components/FooterCta.vue';
import HomeCustom from '../components/HomeCustom.vue';

// Get theme data
const frontmatter = usePageFrontmatter();
const page = usePageData();

// Set Dark Mode for everything
const htmlEl = window === null || window === void 0 ? void 0 : window.document.querySelector('html');
htmlEl === null || htmlEl === void 0 ? void 0 : htmlEl.classList.toggle('dark', true);
</script>

<style lang="scss">
@import '../styles/main.scss';
.page {
  padding: 0rem;
}

.theme-container {
  .theme-default-content {
    position: relative;
  }
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
  .theme-container.sidebar-open {
    overflow: hidden;

    .sidebar {
      transform: none;
      display: block;
      background: radial-gradient(148.29% 119.48% at 105.77% -28.17%, #412B6B 0%, #34244D 46.09%, #302243 96.16%);
      height: 100%;
      position: fixed;
      transition: .5s;
      padding-top: calc(var(--navbar-height) + 2.5rem);
      .navbar-items {
        border: none;
        .navbar-item {
          border-bottom: 1px solid rgba(255, 255, 255, 0.14);
          padding: 1.3125rem 0 1.5rem 0rem;
          margin: 0 1.5rem;
          a {
            font-weight: normal;
            font-size: 1.125rem;
            width: 100%;
          }
        }
        .navbar-dropdown-wrapper {
          &:after {
            content: url('../../public/images/down-arrow.svg');
            position: absolute;
            right: 1.125rem;
            top: 1.5rem;

          }
          .title {
            font-weight: normal;
            font-size: 1.125rem;
          }
          .navbar-dropdown-title-mobile {
            width: 100%;
            text-align: left;
          }
          button {
            .arrow {
              display: none;
            }
          }
        }
      }
    }
  }
}
</style>
