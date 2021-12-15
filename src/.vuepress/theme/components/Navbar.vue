<template>
  <header ref="navbar" class="navbar">
    <ToggleSidebarButton @toggle="$emit('toggle-sidebar')" />
    <div class="navbar-interior">

      <span ref="siteBrand">
        <RouterLink :to="siteBrandLink">

          <span
            v-if="siteBrandTitle"
            class="site-name"
            :class="{ 'can-hide': siteBrandLogo }"
          >
            {{ siteBrandTitle }}
          </span>
        </RouterLink>
      </span>

      <div class="navbar-links-wrapper" :style="linksWrapperStyle">
        <slot name="before" />

        <NavbarLinks class="can-hide" />

        <slot name="after" />

      </div>
      <div class="navbar-links-right-wrapper" :style="linksWrapperStyle">

        <a href="/download/" class="btn btn-primary">Get Lando!</a>

        <ToggleDarkModeButton v-if="enableDarkMode" />

      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useRouteLocale, useSiteLocaleData, withBase } from '@vuepress/client'
import { computed, onMounted, ref } from 'vue'
import { useDarkMode, useThemeLocaleData } from '@vuepress/theme-default/lib/client/composables'
import NavbarLinks from '@vuepress/theme-default/lib/client/components/NavbarLinks.vue'
import ToggleDarkModeButton from '@vuepress/theme-default/lib/client/components/ToggleDarkModeButton.vue'
import ToggleSidebarButton from '@vuepress/theme-default/lib/client/components/ToggleSidebarButton.vue'

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
const siteBrandLogo = computed(() => {
  if (isDarkMode.value && themeLocale.value.logoDark !== undefined) {
    return themeLocale.value.logoDark
  }
  return themeLocale.value.logo
})
const siteBrandTitle = computed(() => siteLocale.value.title)
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

function getCssValue(el: HTMLElement | null, property: string): number {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const val = el?.ownerDocument?.defaultView?.getComputedStyle(el, null)?.[
    property
  ]
  const num = Number.parseInt(val, 10)
  return Number.isNaN(num) ? 0 : num
}
</script>

<style scoped>
.navbar {
  position: static;
  background: inherit;
  border-bottom: none;
}
.navbar-interior {
  max-width: var(--content-width);
  margin: auto;
  display: flex;
}
.navbar .navbar-links-wrapper, .navbar .navbar-links-right-wrapper {
  display: inline-flex;
  margin-left: 3rem;
  position: static;
  flex-grow: 1;
}

.navbar .navbar-links-right-wrapper {
  justify-content: flex-end;
}

.toggle-dark-button {
  margin: 0px 1rem;
}
</style>
