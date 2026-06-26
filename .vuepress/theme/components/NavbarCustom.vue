<template>
  <header ref="navbar" class="navbar">
    <div class="navbar-interior">
      <span ref="siteBrand">
          <a
            :href="siteBrandLink"
            aria-current="page"
          >
            <NavbarBrandLogo />
          </a>
      </span>

      <div class="navbar-links-wrapper" :style="linksWrapperStyle">
        <slot name="before" />
        <NavbarItems class="can-hide" />
        <slot name="after" />
      </div>

      <div class="navbar-links-right-wrapper" :style="linksWrapperStyle">
        <a href="/download/" class="btn btn-primary can-hide">Get Lando!</a>
        <ToggleSidebarButtonCustom @toggle="$emit('toggle-sidebar')" />
      </div>
    </div>
  </header>
</template>

<script setup>
import {useRouteLocale, useSiteLocaleData, withBase, ClientOnly} from '@vuepress/client';
import {computed, onMounted, ref, h} from 'vue';
import {useThemeLocaleData} from '@vuepress/theme-default/lib/client/composables';
import NavbarItems from '@vuepress/theme-default/lib/client/components/NavbarItems.vue';
import ToggleSidebarButtonCustom from './ToggleSidebarButtonCustom.vue';

defineEmits(['toggle-sidebar']);

const routeLocale = useRouteLocale();
const siteLocale = useSiteLocaleData();
const themeLocale = useThemeLocaleData();

const navbar = ref(null);
const siteBrand = ref(null);
const siteBrandLink = computed(
  () => themeLocale.value.home || routeLocale.value,
);
const navbarBrandLogo = ref(themeLocale.value.logoDark);
const navbarBrandTitle = computed(() => siteLocale.value.title);
const linksWrapperMaxWidth = ref(0);
const linksWrapperStyle = computed(() => {
  if (!linksWrapperMaxWidth.value) {
    return {};
  }
  return {
    maxWidth: linksWrapperMaxWidth.value + 'px',
  };
});

// avoid overlapping of long title and long navbar links
onMounted(() => {
  // TODO: migrate to css var
  // refer to _variables.scss
  const MOBILE_DESKTOP_BREAKPOINT = 719;
  const navbarHorizontalPadding =
    getCssValue(navbar.value, 'paddingLeft') +
    getCssValue(navbar.value, 'paddingRight');
  const handleLinksWrapWidth = () => {
    let _a;
    if (window.innerWidth <= MOBILE_DESKTOP_BREAKPOINT) {
      linksWrapperMaxWidth.value = 0;
    } else {
      linksWrapperMaxWidth.value = navbar.value.offsetWidth - navbarHorizontalPadding - (((_a = siteBrand.value) === null || _a === void 0 ? void 0 : _a.offsetWidth) || 0);
    }
  };
  handleLinksWrapWidth();
  window.addEventListener('resize', handleLinksWrapWidth, false);
  window.addEventListener('orientationchange', handleLinksWrapWidth, false);
});

const NavbarBrandLogo = () => {
  if (!navbarBrandLogo.value) return null;
  let img = h('img', {
    class: 'logo',
    src: withBase(navbarBrandLogo.value),
    alt: navbarBrandTitle.value,
  });
  if (themeLocale.value.logoDark === undefined) {
    return img;
  }
  // wrap brand logo with <ClientOnly> to avoid ssr-mismatch
  // when using a different brand logo in dark mode
  return h(ClientOnly, img);
};

const getCssValue = (el, property) => {
  let _a; let _b; let _c;
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  let val = (_c = (_b = (_a = el === null || el === void 0 ? void 0 : el.ownerDocument) === null || _a === void 0 ? void 0 : _a.defaultView) === null || _b === void 0 ? void 0 : _b.getComputedStyle(el, null)) === null || _c === void 0 ? void 0 : _c[property];
  let num = Number.parseInt(val, 10);
  return Number.isNaN(num) ? 0 : num;
};
</script>

<style lang="scss">
@import '../styles/main.scss';
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
    margin-right: 3.8125rem;
  }
  .navbar-interior {
    width: var(--content-width);
    display: flex;
    .navbar-items-wrapper, .navbar-links-right-wrapper {
      position: static;
      display: inline-flex;
      margin-left: 3rem;
      position: static;
      flex-grow: 1;
      // Should probably make our own navbar-links and do this there.
      .navbar-items {
        .navbar-item {
          font-size: 1rem;
        }
      }
    }
    .navbar-links-right-wrapper {
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

@media (max-width: $MQNarrow) {
  .navbar {
    padding: 2rem;
  }
}

@media (max-width: $MQMobileNarrow) {
  .navbar .navbar-interior .navbar-links-right-wrapper, .navbar .navbar-interior .navbar-links-wrapper {
    margin-left: 0rem;
  }
}
</style>
