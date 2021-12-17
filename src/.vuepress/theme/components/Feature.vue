<template>
  <div class="feature" :class="orientation">
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
    orientation: String,
  },
}
</script>

<style lang="scss" scoped>
.feature {
  margin-bottom: 10rem;
  display: flex;
  gap: 4rem;
  .feature-content,
  .feature-image {
    flex-grow: 1;
    flex-basis: 50%;
  }
}

.feature.right {
  flex-direction: row-reverse;
}
</style>
