<template>
  <carousel v-if="isMobile && mobileSlideshow" :items-to-show="2.5" class="icons">
    <slide v-for="(icon, index) in icons" :key="index" class="icon">
      <img :src="icon.src" :alt="icon.alt">
    </slide>
  </carousel>
  <ul v-else class="icons">
    <li v-for="(icon, index) in icons" :key="index" class="icon">
      <img :src="icon.src" :alt="icon.alt">
    </li>
  </ul>
</template>

<style lang="scss" scoped>
  .icons {
    display: flex;
    gap:1.5rem;
    list-style: none;
    padding-left: 0;
    .icon {
      display: flex;
      justify-content: center;
    }
  }
</style>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
  props: {
    icons: {
      type: Array,
      default:[
        { src: 'images/icons/osx.png', alt:'MacOS logo.' },
        { src: 'images/icons/windows.png', alt:'Windows logo.' },
        { src: 'images/icons/linux.png', alt:'Linux logo.' },
        { src: 'images/icons/line.png', alt:'A divider line.' },
        { src: 'images/icons/safari.png', alt:'Safari logo.' },
        { src: 'images/icons/chrome.png', alt:'Chrome logo.' },
        { src: 'images/icons/firefox.png', alt:'Firefox logo.' },
      ],
    },
    mobileSlideshow: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isMobile() {
      return window.innerWidth < 800;
    }
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation
  }
}
</script>
