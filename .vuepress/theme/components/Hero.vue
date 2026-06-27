<template>
  <div class="hero-wrapper">
    <div class="hero">
      <div class="hero-left">
        <h1 v-html="heroHeading"></h1>
        <p v-html="heroText"></p>
        <div class="hero-actions">
          <a :href="ctaLink" :target="ctaTarget" :rel="ctaRel" class="btn btn-primary">{{ ctaText }}</a>
          <a
            v-if="secondaryCtaLink && secondaryCtaText"
            :href="secondaryCtaLink"
            :target="secondaryCtaTarget"
            :rel="secondaryCtaRel"
            class="btn btn-secondary"
          >{{ secondaryCtaText }}</a>
        </div>
      </div>
      <div class="hero-right">
        <div class="orbit-wrapper">
          <div class="orbit inner-orbit"></div>
        </div>
        <div class="orbit-wrapper">
          <div class="orbit outer-orbit"></div>
        </div>
        <div class="hero-visual">
          <slot name="heroVisual">
            <img class="hero-planet" src="../../public/images/yellow-planet.svg" alt="Image of a yellow planet." />
          </slot>
        </div>
      </div>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    heroHeading: String,
    heroText: String,
    ctaText: String,
    ctaLink: String,
    ctaTarget: String,
    ctaRel: String,
    secondaryCtaText: String,
    secondaryCtaLink: String,
    secondaryCtaTarget: String,
    secondaryCtaRel: String,
  },
};
</script>

<style lang="scss" scoped>
  @import '../styles/palette.scss';
  .hero-wrapper {
    min-height: 100vh;
    height: 100%;
    .hero {
      display: flex;
      margin: 2rem 0em 8rem 0rem;
      .hero-left, .hero-right {
        font-size: 1.375rem;
      }
      .hero-left {
        width: 55%;
        z-index: 10;
        h1 {
          font-size: 4rem;
          font-weight: 800;
          line-height: 4rem;
        }
        h2 {
          font-size: 4rem;
          font-weight: 800;
          line-height: 4rem;
        }
        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          align-items: center;
        }
        .btn-secondary {
          background-color: #412B6B;
          color: var(--c-text-lightest);
        }
      }
      .hero-right {
        width: 45%;
        z-index: 4;
        display: flex;
        justify-content: center;
        align-self: center;
        align-items: center;
        max-height: 30vh;
        transform: translateY(3rem);
        .hero-visual {
          position: relative;
          z-index: 2;
          width: min(32rem, 100%);
        }
        .hero-visual :deep(svg) {
          display: block;
          height: auto;
          width: 100%;
        }
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
    @import '../styles/prism-twilight.scss';
    pre {
      margin-top: 2rem;
    }
  }


  @media (max-width: $MQNarrow) {
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
          justify-content: center;
          transform: none;
          .hero-visual {
            margin: 0 auto;
          }
          .hero-planet {
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
