<template>
  <header class="navbar">
    <div class="navbar-interior">
      <span>
          <a
            :href="siteBrandLink"
            aria-current="page"
          >
            <NavbarBrandLogo />
          </a>
      </span>

      <div class="navbar-links-wrapper">
        <slot name="before" />
        <NavbarItems class="can-hide" />
        <slot name="after" />
      </div>

      <div class="navbar-links-right-wrapper">
        <a
          href="https://github.com/sponsors/lando"
          class="donate btn btn-primary has-heart can-hide"
          target="_blank"
          rel="noopener noreferrer"
        >
          <DonateHeart />
          Donate
        </a>
        <ToggleSidebarButtonCustom @toggle="$emit('toggle-sidebar')" />
      </div>
    </div>
  </header>
</template>

<script setup>
import {useRouteLocale, useSiteLocaleData, withBase} from '@vuepress/client';
import {computed, h} from 'vue';
import {useThemeLocaleData} from '@vuepress/theme-default/lib/client/composables';
import DonateHeart from './DonateHeart.vue';
import NavbarItems from '@vuepress/theme-default/lib/client/components/NavbarItems.vue';
import ToggleSidebarButtonCustom from './ToggleSidebarButtonCustom.vue';

defineEmits(['toggle-sidebar']);

const routeLocale = useRouteLocale();
const siteLocale = useSiteLocaleData();
const themeLocale = useThemeLocaleData();

const siteBrandLink = computed(
  () => themeLocale.value.home || routeLocale.value,
);
const navbarBrandLogo = computed(() => themeLocale.value.logoDark);
const navbarBrandTitle = computed(() => siteLocale.value.title);

const NavbarBrandLogo = () => {
  if (!navbarBrandLogo.value) return null;
  return h('img', {
    class: 'logo',
    src: withBase(navbarBrandLogo.value),
    alt: navbarBrandTitle.value,
  });
};
</script>

<style lang="scss">
@import '../styles/palette.scss';
.navbar {
  position: relative;
  background: inherit;
  border-bottom: none;
  display: flex;
  padding: 1.25rem 0 0 0;
  max-width: var(--content-width);
  margin: auto;
  z-index: 200;
  .logo {
    display: block;
    margin-right: 3.8125rem;
  }
  .navbar-interior {
    width: var(--content-width);
    display: flex;
    align-items: center;
    .navbar-links-wrapper, .navbar-links-right-wrapper {
      align-items: center;
      display: inline-flex;
      margin-left: 3rem;
      position: static;
      min-width: 0;
      // Should probably make our own navbar-links and do this there.
      .navbar-items {
        .navbar-item {
          font-size: 1rem;
        }
      }
    }
    .navbar-links-wrapper {
      flex: 1 1 auto;
    }
    .navbar-links-right-wrapper {
      flex: 0 0 auto;
      justify-content: flex-end;
    }
    .toggle-dark-button {
      margin: 0px 1rem;
      align-self: center;
    }
    .toggle-sidebar-button {
      position: static;
      padding: .3rem 1.25rem;
    }
  }
}

@media (max-width: 1320px) {
  .navbar {
    padding: 2.5rem;
  }
}

@media (max-width: $MQNarrow) {
  .navbar {
    padding: 2rem;
    .can-hide,
    .navbar-links-wrapper {
      display: none;
    }
  }
  .donate {
    display: none !important;
  }
  .sidebar {
    top: 0;
  }
  .navbar-item > a:hover {
    border-bottom: 0;
    margin-bottom: 0;
    color: var(--c-text-accent);
  }
}

@media (max-width: $MQMobileNarrow) {
  .navbar .navbar-interior .navbar-links-right-wrapper, .navbar .navbar-interior .navbar-links-wrapper {
    margin-left: 0rem;
  }
}
</style>
