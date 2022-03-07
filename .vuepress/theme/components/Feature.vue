<template>
  <div class="feature-wrapper">
    <div v-if="showOrbit" class="feature-orbit orbit" :class="customClass">
      <img :src="planetImage" class="feature-planet" />
    </div>
    <div class="feature" :class="orientation">
      <div class="feature-content">
        <h3 v-html="featureHeading"></h3>
        <p v-if="featureText" v-html="featureText"></p>
        <slot name="afterFeatureContent" />
      </div>
      <div class="feature-image">
        <slot/>
      </div>
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
    showOrbit: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss">
@import '../../styles/palette.scss';
$default-orbit-height: 1000px;
$default-orbit-margin-top: 225 - $default-orbit-height;
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
    margin-top: $default-orbit-margin-top + 525;
  }
  &.orbit-3 {
    height: $default-orbit-height - 600;
    margin-top: $default-orbit-margin-top + 525;
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
  margin: 5rem 0rem;
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  position: relative;
  .feature-content,
  .feature-image {
    width: 50%;
    flex-grow: 1;
    flex-basis: calc(50% - 4rem);
    margin: auto;
  }
  .feature-image {
    display: flex;
    img {
      display: block;
      margin: auto;
    }
  }
}

.feature.right {
  flex-direction: row-reverse;
}

@media (max-width: $MQMobile) {
  .feature {
    margin-top: 1rem;
    .feature-content,
    .feature-image {
      width: 100%;
      flex-grow: 1;
      flex-basis: 100%;
    }
  }
  .feature-orbit {
    position: relative;
    &.orbit-3 .feature-planet {
      top: 340px;
    }
    .feature-planet {
      position: absolute;
      top: 900px;
      left: 50rem;
    }
  }
}

@media (max-width: $MQMobileNarrow) {
  .feature {
    gap: 2rem;
  }
}
</style>
