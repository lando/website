<template>
  <div class="hero-wrapper">
    <div class="hero">
      <div class="hero-left">
        <h2 v-html="heroHeading"></h2>
        <p v-html="heroText"></p>
        <a :href="ctaLink" class="btn btn-primary">{{ ctaText }}</a>
      </div>
      <div class="hero-right">
        <div class="orbit-wrapper">
          <div class="orbit inner-orbit"></div>
        </div>
        <div class="orbit-wrapper">
          <div class="orbit outer-orbit"></div>
        </div>
        <img class="hero-planet" src="images/yellow-planet.svg" alt="Image of a yellow planet." />
      </div>
    </div>
    <slot />
  </div>
</template>

<script>
import Stats from "./Stats.vue";
export default {
  props: {
    heroHeading: String,
    heroText: String,
    ctaText: String,
    ctaLink: String
  },
}
</script>

<style lang="scss" scoped>
  @import '../../styles/palette.scss';
  .hero-wrapper {
    min-height: 100vh;
    height: 100%;
    padding-bottom: 4rem;
    .hero {
      display: flex;
      margin: 2rem 0em 8rem 0rem;
      .hero-left, .hero-right {
        width: 50%;
        font-size: 1.375rem;
      }
      .hero-left {
        z-index: 10;
        h2 {
          font-size: 4rem;
          font-weight: 800;
          line-height: 4rem;
        }
      }
      .hero-right {
        z-index: 4;
        display: flex;
        justify-content: center;
        align-self: center;
        align-items: center;
        max-height: 30vh;
        .hero-planet {
          width: 9.875rem;
          filter: drop-shadow(0px 4px 130px rgba(232, 218, 88, 0.6));
        }
      }
      .orbit-wrapper {
        position: absolute;
        overflow: hidden;
        .orbit {
          border: 1.5px dashed #794993;
          border-radius: 100%;
        }
        .inner-orbit {
          width: 1081px;
          height: 469px;
        }
        .outer-orbit {
          width: 2081px;
          height: 869px;
        }
      }
    }
    @import '../../styles/prism-twilight.scss';
    pre {
      margin-top: 2rem;
    }
  }


  @media (max-width: $MQMobileNarrow) {
    .hero-wrapper {
      .hero {
        flex-wrap: wrap-reverse;
        margin-bottom: 3rem;
        gap: 2rem;
        .hero-left {
          width: 100%;
          h2 {
            font-size: 2.75rem;
          }
          p {
            font-size: 1.125rem;
          }
        }
        .hero-right {
          width: 100%;
          justify-content: flex-end;
          .hero-planet {
            margin-right: 2rem;
            width: 7.25rem;
          }
        }
        .orbit-wrapper {
          .inner-orbit {
            width: 500px;
            height: 250px;
            position: relative;
            right: -100px;
          }
          .outer-orbit {
            width: 1900px;
            position: relative;
            right: -800px;
          }
        }
      }
    }
  }
</style>
