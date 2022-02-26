<template>
  <ParentLayout class="landing-page">
      <div slot="page-top">
        <Hero
          :title="hero.title"
          :byline="hero.byline"
          :heroImage="hero.heroImage"
          :heroLinkPrimary="hero.heroLinkPrimary"
          :heroLinkPrimaryText="hero.heroLinkPrimaryText"
          :heroLinkSecondary="hero.heroLinkSecondary"
          :heroLinkSecondaryText="hero.heroLinkSecondaryText"/>
      </div>
      <div id="whys" v-if="whys && whys.length" slot="page-top">
        <div class="inner">
          <h2> {{ whyTitle }} </h2>

          <div class="point" v-for="(why, index) in whys" :key="index">
            <img v-if="why.image" :src="why.image" loading="lazy" />
            <h3>{{ why.title }}</h3>
            <p>{{ why.details }}</p>
          </div>
        </div>
      </div>
      <Usage v-if="usage" slot="page-bottom" />
      <div id="subscribe" v-if="Object.keys(subscribe).length > 0" slot="page-bottom">
        <div class="inner">
          <Subscribe
            :buttonLabel="subscribe.buttonLabel"
            :customStyles="subscribe.customStyles"
            :interests="subscribe.interests"
            :theme="subscribe.theme"
            :title="subscribe.title"/>
      </div>
    </div>
  </ParentLayout>
</template>

<script>
// Lando components
import ParentLayout from '@theme/layouts/Layout.vue';
import Subscribe from '@theme/components/Subscribe';
import Hero from '@theme/components/Hero';
import Usage from '@theme/components/Usage';

export default {
  components: {ParentLayout, Subscribe, Hero, Usage},
  data() {
    return {
      byline: '',
      form: '',
      formHeight: '',
      subscribe: {},
      hero: {},
      whys: {},
      title: '',
      whyTitle: '',
    };
  },
  mounted() {
    this.refreshData();
  },
  methods: {
    refreshData() {
      this.byline = this.$frontmatter.byline || '';
      this.form = this.$frontmatter.form || '';
      this.formHeight = this.$frontmatter.formHeight;
      this.subscribe = this.$frontmatter.subscribe || {};
      this.hero = this.$frontmatter.hero || {};
      this.whys = this.$frontmatter.whys || [];
      this.title = this.$frontmatter.title || this.$siteTitle;
      this.whyTitle = this.$frontmatter.whyTitle || this.$siteTitle;
    },
  },
  watch: {
    '$route.path': function() {
      this.refreshData();
    },
  },
};
</script>

<style lang="stylus">
.landing-page
  #content
    margin-top: 0
    #hs_form
      .inner
        max-width: 900px
  #whys
    display: flex
    align-items: center
    justify-content: center
    flex-direction: column
    background-color: $accentColor
    background-color: #fff
    padding-bottom: 5%
    .inner
      max-width: 900px
      margin: 0 auto
      text-align: center
      padding: 0 1.5em
    .point
      width: 50%
      display: inline-block
      vertical-align: top
      box-sizing: border-box
      padding: 1em 2em
      img
        max-height: 200px
        padding: 0
  .join-alliance
    #content
      #subscribe
        .inner
          max-width: 900px
      .subscribe
        padding: 5em
        margin: auto
        background-color: #024164;
        text-align: left
        h1, h2, h3
          color: #fff
          font-family: "Helvetica Neue", Arial, sans-serif
          font-size: 3.75em
          margin: 0
          padding: 0
          border: 0
          letter-spacing: -2px
          line-height: 1
          font-weight: bold;
      .subscribe-form
        padding-top: 2em
        margin: 0 auto
        box-sizing: border-box
        .button
          font-size: 1.6em
      .subscribe-input
        width: 100%
        box-sizing: border-box
        padding: 10px 80px 10px 20px
        height: 50px
        border-radius: 50px
        border: 1px solid #ccc
        font-size: 16px
        &:focus
          outline: none
          border-color: lighten($accentColor, 18%)
  @media (max-width: $MQMobile)
    .join-alliance
      #content
        #subscribe
          .inner
            width: 90%
        .subscribe
          padding: 2em
          .button
            font-size: 1.2em
            width: 100%
          form
            margin: auto
          h1, h2, h3
            font-size: 3em
</style>
