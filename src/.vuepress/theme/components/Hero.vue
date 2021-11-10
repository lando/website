<template>
  <div id="hero-component">
    <div class="inner">
      <div class="hero-header">
        <div class="hero-left">
          <img class="hero-logo" v-if="heroImage" :src="$withBase(heroImage)" :alt="heroAlt || 'lando logo'" loading="lazy">
        </div>
        <div class="hero-right">
          <h2 class="hide">Lando.</h2>
          <h1>{{ title }}</h1>
          <div class="byline">
            <p>{{ byline }}</p>
          </div>
          <div class="hero-action">
            <div class="hero-primary">
              <a class="button blue" :href="heroLinkPrimary">{{ heroLinkPrimaryText }}</a>
            </div>
            <div v-if="heroLinkSecondary" class="hero-primary">
              <a class="button " :href="heroLinkSecondary">{{ heroLinkSecondaryText }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    title: {
      type: String,
      default: 'Instant Dev Environments For Every Project',
    },
    byline: {
      type: String,
      default: 'Free yourself from the mind-forged manacles of lesser dev tools. Save time, headaches, frustration and do more real work.',
    },
    heroImage: {
      type: String,
      default: '',
    },
    heroAlt: {
      type: String,
      default: '',
    },
    heroLinkPrimary: {
      type: String,
      default: '',
    },
    heroLinkPrimaryText: {
      type: String,
      default: '',
    },
    heroLinkSecondary: {
      type: String,
      default: '',
    },
    heroLinkSecondaryText: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      data: {},
    };
  },
  mounted() {
    // Dump the frontmatter
    this.data = this.$page.frontmatter;
  },
};
</script>

<style lang="stylus">
#hero-component
  display: flex
  align-items: center
  flex-direction: column
  background-color: rgba($landoPink, .92)
  background-image: none
  margin-top: -1em
  .inner
    max-width: 1100px
    align-self: flex-end
  h1
    padding-top: 0
    margin-top: .5em
    color: #2c3e50
  h2
    font-size: 5em
    margin: 0 0 10px
    padding: 0
    display: none
  .hero-header
    padding: 6em 0em
  .hero-left, .hero-right
    display: inline-block
    vertical-align: top
  .hero-left
    width: 38%
  .hero-right
    width: 60%
    text-align: right
  .hero-logo
    width: 100%
    margin-right: 60px
    padding: 0em
    max-width: 400px
  .hero-primary
    .button
      margin: .1em
    a
      width: 70%
  .hero-secondary
    a
      width: 35%
  .button
    width: 30%
    margin: 1em 0
    font-size: 1.4em
    font-weight: 500
    letter-spacing: .05em
    min-width: 8em
    text-align: center
    &:not(:last-child)
      margin-right: 1%
  .byline
    margin-top: -3em
    color: lighten($landoPink, 80%)
    p
      line-height: 1.67
      font-size: 2em
  @media (max-width: $MQMobile)
    h1
      font-size: 4em
    .byline
      p
        font-size: 1.5em
        padding-top: 3em
    .hero-logo
      float: none
      margin: 30px 0 15px
      width: 240px
      height: 240px
    .hero-left, .hero-right
      text-align: center
      width: 100%
  @media (max-width: $MQMobileNarrow)
    h1
      font-size: 2.8em
    .byline
      font-size: 1em

</style>
