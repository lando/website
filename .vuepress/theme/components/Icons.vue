<template>
  <ul class="icons">
    <li v-for="(icon, index) in icons" :key="index" class="icon">
      <img :src="icon.src" :alt="icon.alt">
    </li>
  </ul>
</template>

<script>

export default {
  props: {
    icons: {
      type: Array,
      default: () => ([
        {src: 'images/icons/osx.png', alt: 'MacOS logo.'},
        {src: 'images/icons/windows.png', alt: 'Windows logo.'},
        {src: 'images/icons/linux.png', alt: 'Linux logo.'},
        {src: 'images/icons/line.png', alt: 'A divider line.'},
        {src: 'images/icons/safari.png', alt: 'Safari logo.'},
        {src: 'images/icons/chrome.png', alt: 'Chrome logo.'},
        {src: 'images/icons/firefox.png', alt: 'Firefox logo.'},
      ]),
    },
    mobileSlideshow: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isMobile() {
      if (typeof window === 'undefined') return false;
      return window.innerWidth < 719;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/main.scss';
  .icons {
    display: flex;
    gap: 1.5rem;
    list-style: none;
    padding-left: 0;
    .icon {
      display: flex;
      justify-content: center;
    }
  }
  @media (max-width: $MQNarrow) {
    .icons {
      gap: 2rem;
      margin: auto;
      flex-wrap: wrap;
    }
  }
</style>
