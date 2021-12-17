<template>
  <div class="footer-cta">
    <h3>{{ heading }}</h3>
    <p>{{ text }}</p>
    <a :href="ctaLink" class="btn">{{ ctaText }}</a>
  </div>
</template>

<style lang="scss" scoped>
  .footer-cta {
    background: radial-gradient(102.17% 322.14% at -4.98% 92.25%, #DD3F8F 13.06%, #412B6B 100%);
    padding: 5.875rem;
    text-align: center;
    font-size: 1.25rem;
    a {
      color: var(--c-brand);
      font-weight: bold;
      text-transform: uppercase;
      background-color: var(--c-text-lightest);
      &:after {
        content: url('../../public/images/button-arrow.svg');
      }
    }
  }
</style>

<script>
export default {
  props: {
    heading: String,
    text: String,
    ctaText: String,
    ctaLink: String
  },
}
</script>
