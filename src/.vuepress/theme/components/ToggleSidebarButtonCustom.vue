<script setup lang="ts">
import { useThemeLocaleData } from '@vuepress/theme-default/lib/client/composables'
import { computed, ref,} from 'vue'

defineEmits(['toggle'])

const themeLocale = useThemeLocaleData()
// classes
const isActive = computed(() => [
  {
    'is-active': isSidebarOpen.value,
  },
]);

const isSidebarOpen = ref(false)
const toggleSidebar = (to?: boolean): void => {
  document.body.classList.add('noscroll')
  isSidebarOpen.value = typeof to === 'boolean' ? to : !isSidebarOpen.value
  isSidebarOpen.value ? document.body.classList.add('noscroll') : document.body.classList.remove('noscroll') 
}


</script>

<template>
  <div
    class="toggle-sidebar-button hamburger hamburger--squeeze"
    :class="isActive"
    :title="themeLocale.toggleSidebar"
    aria-expanded="false"
    role="button"
    tabindex="0"
    @click="toggleSidebar(); $emit('toggle');"
  >
    <div class="hamburger-box" aria-hidden="true">
      <span class="hamburger-inner"></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<style lang="scss">
$hamburger-padding-x: 20px;
$hamburger-padding-y: 15px;
$hamburger-types     : (squeeze);
$hamburger-layer-color         : #fff !default;
$hamburger-layer-width         : 1.5rem !default;
$hamburger-layer-height        : 2px !default;


@import "../../../../node_modules/hamburgers/_sass/hamburgers/hamburgers.scss";
@import '../../styles/palette.scss';

@media (min-width: $MQMobile) {
  .toggle-sidebar-button {
    display: none;
  }
}

.noscroll {
  overflow: hidden;
}

</style>
