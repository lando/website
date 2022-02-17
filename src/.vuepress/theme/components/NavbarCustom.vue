<template>
  <header ref="navbar" class="navbar">
    <div class="navbar-interior">
      <span ref="siteBrand">
        <RouterLink :to="siteBrandLink">
          <NavbarBrandLogo />
        </RouterLink>
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

<script setup lang="ts">
import { useRouteLocale, useSiteLocaleData, withBase, ClientOnly } from '@vuepress/client'
import { computed, onMounted, ref, h } from 'vue'
import type { FunctionalComponent } from 'vue'
import { useDarkMode, useThemeLocaleData } from '@vuepress/theme-default/lib/client/composables'
import NavbarItems from '@vuepress/theme-default/lib/client/components/NavbarItems.vue'
import ToggleDarkModeButton from '@vuepress/theme-default/lib/client/components/ToggleDarkModeButton.vue'
import ToggleSidebarButtonCustom from './ToggleSidebarButtonCustom.vue'

defineEmits(['toggle-sidebar'])

const routeLocale = useRouteLocale()
const siteLocale = useSiteLocaleData()
const themeLocale = useThemeLocaleData()
const isDarkMode = useDarkMode()

const navbar = ref<HTMLElement | null>(null)
const siteBrand = ref<HTMLElement | null>(null)
const siteBrandLink = computed(
  () => themeLocale.value.home || routeLocale.value
)
const navbarBrandLogo = computed(() => {
  if (document.documentElement.classList.contains('dark')) {
    return themeLocale.value.logoDark
  }
  return themeLocale.value.logo
})
const navbarBrandTitle = computed(() => siteLocale.value.title)
const linksWrapperMaxWidth = ref(0)
const linksWrapperStyle = computed(() => {
  if (!linksWrapperMaxWidth.value) {
    return {}
  }
  return {
    maxWidth: linksWrapperMaxWidth.value + 'px',
  }
})
const enableDarkMode = computed(() => themeLocale.value.darkMode)

// avoid overlapping of long title and long navbar links
onMounted(() => {
  // TODO: migrate to css var
  // refer to _variables.scss
  const MOBILE_DESKTOP_BREAKPOINT = 719
  const navbarHorizontalPadding =
    getCssValue(navbar.value, 'paddingLeft') +
    getCssValue(navbar.value, 'paddingRight')
  const handleLinksWrapWidth = (): void => {
    if (window.innerWidth <= MOBILE_DESKTOP_BREAKPOINT) {
      linksWrapperMaxWidth.value = 0
    } else {
      linksWrapperMaxWidth.value =
        navbar.value!.offsetWidth -
        navbarHorizontalPadding -
        (siteBrand.value?.offsetWidth || 0)
    }
  }
  handleLinksWrapWidth()
  window.addEventListener('resize', handleLinksWrapWidth, false)
  window.addEventListener('orientationchange', handleLinksWrapWidth, false)
})

const NavbarBrandLogo: FunctionalComponent = () => {
  if (!navbarBrandLogo.value) return null
  const img = h('img', {
    class: 'logo',
    src: withBase(navbarBrandLogo.value),
    alt: navbarBrandTitle.value,
  })
  if (themeLocale.value.logoDark === undefined) {
    return img
  }
  // wrap brand logo with <ClientOnly> to avoid ssr-mismatch
  // when using a different brand logo in dark mode
  return h(ClientOnly, img)
}

function getCssValue(el: HTMLElement | null, property: string): number {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const val = el?.ownerDocument?.defaultView?.getComputedStyle(el, null)?.[
    property
  ]
  const num = Number.parseInt(val, 10)
  return Number.isNaN(num) ? 0 : num
}
</script>

<style lang="scss">
@import '../../styles/palette.scss';
.navbar {
  position: relative;
  background: inherit;
  border-bottom: none;
  display: flex;
  padding: 1.25rem 0 0 0;
  max-width: var(--content-width);
  margin: auto;
  z-index: 200;
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
