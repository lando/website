<script setup lang="ts">
import { useThemeLocaleData } from '@vuepress/theme-default/lib/client/composables'

defineEmits(['toggle'])

const themeLocale = useThemeLocaleData()
</script>

<template>
  <div
    class="toggle-sidebar-button hamburger hamburger--squeeze"
    :title="themeLocale.toggleSidebar"
    aria-expanded="false"
    role="button"
    tabindex="0"
    @click="$emit('toggle')"
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

@import "@hamburgers/_sass/hamburgers/hamburgers.scss";

// Hamburger
// ==================================================
.hamburger {
  padding: $hamburger-padding-y $hamburger-padding-x;
  display: inline-block;
  cursor: pointer;

  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;

  // Normalize (<button>)
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;

  &:hover {
    @if $hamburger-hover-use-filter == true {
      filter: $hamburger-hover-filter;
    }
    @else {
      opacity: $hamburger-hover-opacity;
    }
  }

  &.is-active {
    &:hover {
      @if $hamburger-hover-use-filter == true {
        filter: $hamburger-active-hover-filter;
      }
      @else {
        opacity: $hamburger-active-hover-opacity;
      }
    }

    .hamburger-inner,
    .hamburger-inner::before,
    .hamburger-inner::after {
      background-color: $hamburger-active-layer-color;
    }
  }
}

.hamburger-box {
  width: $hamburger-layer-width;
  height: $hamburger-layer-height * 3 + $hamburger-layer-spacing * 2;
  display: inline-block;
  position: relative;
}

.hamburger-inner {
  display: block;
  top: 50%;
  margin-top: $hamburger-layer-height / -2;

  &,
  &::before,
  &::after {
    width: $hamburger-layer-width;
    height: $hamburger-layer-height;
    background-color: $hamburger-layer-color;
    border-radius: $hamburger-layer-border-radius;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
  }

  &::before,
  &::after {
    content: "";
    display: block;
  }

  &::before {
    top: ($hamburger-layer-spacing + $hamburger-layer-height) * -1;
  }

  &::after {
    bottom: ($hamburger-layer-spacing + $hamburger-layer-height) * -1;
  }
}

</style>
