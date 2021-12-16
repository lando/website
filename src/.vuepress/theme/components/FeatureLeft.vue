<template>
  <div class="feature-left">
    <div class="feature-content">
      <h3 v-html="featureHeading"></h3>
      <p v-html="featureText"></p>
      <slot name="afterFeatureContent" />
    </div>
    <div class="feature-image">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    featureHeading: String,
    featureText: String,
  },
}
</script>

<style lang="scss" scoped>
.feature-left {
  display: flex;
  gap: 4rem;
  .feature-content,
  .feature-image {
    flex-grow: 1;
    flex-basis: 50%;
  }
}
</style>
