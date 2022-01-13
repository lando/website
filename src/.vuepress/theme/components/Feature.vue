<template>
  <div class="feature-orbit orbit" :class="customClass">
    <img :src="planetImage" class="feature-planet" />
  </div>
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
    customClass: String,
    planetImage: String,
  },
}
</script>

<style lang="scss">
@import '../../styles/palette.scss';
$default-orbit-height: 1000px;
$default-orbit-margin-top: 150 - $default-orbit-height;
.feature-orbit {
  position: absolute;
  border-bottom: 1.5px dashed #794993;
  border-radius: 100%;
  margin-left: -50rem;
  margin-top: $default-orbit-margin-top;
  z-index: 0;
  width: 3000px;
  height: $default-orbit-height;
  &.orbit-2 {
    height: $default-orbit-height - 500;
    margin-top: $default-orbit-margin-top + 500;
  }
  &.orbit-3 {
    height: $default-orbit-height - 600;
    margin-top: $default-orbit-margin-top + 600;
    .feature-planet {
      bottom: -5px;
    }
  }
  .feature-planet {
    position: absolute;
    left: 41rem;
    bottom: 35px;
  }
}

.feature {
  margin-bottom: 10rem;
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  position: relative;
  .feature-content,
  .feature-image {
    flex-grow: 1;
    flex-basis: 45%;
  }
  .feature-image {
    background: radial-gradient(50% 50% at 50% 50%, #DD3F8F 0%, rgba(221, 63, 143, 0) 100%);
    img {
      display: block;
      margin: auto;
    }
  }
}

.feature.right {
  flex-direction: row-reverse;
}

@media (max-width: $MQMobileNarrow) {
  .feature {
    flex-wrap: wrap-reverse;
    gap: 2rem;
  }
}
</style>
