<template>
  <carousel v-if="isMobile && mobileSlideshow" :items-to-show="2.5" class="carousel icons">
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

<script>
import 'vue3-carousel/dist/carousel.css';
import {Carousel, Slide} from 'vue3-carousel';

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
      return window.innerWidth < 800;
    },
  },
  components: {
    Carousel,
    Slide,
  },
};
</script>

<style lang="scss" scoped>
@import '../../styles/palette.scss';
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
  @media (max-width: $MQNarrow) {
    .carousel .icon.carousel__slide--next img {
      mask-image: linear-gradient(to left, transparent 40%, black);
      -webkit-mask-image: linear-gradient(to left, transparent 40%, black);
    }
  }
</style>
