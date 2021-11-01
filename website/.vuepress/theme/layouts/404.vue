<template>
  <ParentLayout>
    <div v-if="title" class="404" slot="page-top">
      <div id="hero">
        <div class="hero-inner">
          <div class="inner">
            <h1>{{ title }}</h1>
            <div class="byline">
              <p>{{ byline }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="inner content-wrapper-lando content-wrapper-fourohfour">
        <blockquote>
          <p>{{ chosen.message }}</p>
          <ul>
            <li>{{ chosen.author }}</li>
          </ul>
        </blockquote>

        <div class="custom-block point vids">
          <div>
            <ClientOnly>
              <YouTube :vid="chosen.vid" />
            </ClientOnly>
          </div>
        </div>

        <RouterLink to="/">
          Take me home.
        </RouterLink>
      </div>
    </div>

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
import YouTube from '@theme/../components/YouTube';

// 404 messages
const msgs = [
  {
    author: 'Bruce Hornsby',
    message: `There is nothing here. That's just the way it is.`,
    vid: 'cOeKidp-iWo',
  },
  {
    author: 'Bono',
    message: `And I still haven't found what I'm looking for.`,
    vid: 'e3-5YC_oHjE',
  },
  {
    author: 'Eric Carmen',
    message: `All by myself. Don't wanna be. All by myself.`,
    vid: 'iN9CjAfo5n0',
  },
  {
    author: 'Men at Work',
    message: `I'll be trapped, and here I'll have to stay.`,
    vid: 'SECVGN4Bsgg',
  },
  {
    author: 'BSB',
    message: `Tell me why I can't be there where you are?`,
    vid: 'aBt8fN7mJNg',
  },
  {
    author: 'Lisa Loeb',
    message: 'No no no, bad',
    vid: 'i9HGwRbMiVY',
  },
  {
    author: 'David Hasselhoff',
    message: 'The phoenix rise again',
    vid: 'ZTidn2dBYbY',
  },
  {
    author: 'Björk',
    message: `It's oh so quiet, It's oh so still`,
    vid: 'MNdFYbe1XoM',
  },
  {
    author: 'The Beatles',
    message: `He's a real nowhere man`,
    vid: '8scSwaKbE64',
  },
  {
    author: 'The Zombies',
    message: `She's not there`,
    vid: 'it68QbUWVPM',
  },
];

export default {
  components: {ParentLayout, Subscribe, YouTube},
  data() {
    return {
      byline: 'Not found',
      chosen: {},
      form: '',
      formHeight: '',
      subscribe: {},
      title: '404',
    };
  },
  mounted() {
    this.chosen = this.getMsg();
  },
  methods: {
    getMsg() {
      return msgs[Math.floor(Math.random() * msgs.length)];
    },
  },
};
</script>

<style lang="stylus">
#content
  a
    text-decoration: underline
  margin-top: 0
  #hero
    background-image: url("/images/space.jpg")
    background-repeat-y: repeat
    margin-top: -1em
    .hero-inner
      display: flex
      background-color: rgba(#ffffff, .97)
      text-align: center
      padding: 4em 2em
    h1
      padding-top: 0
      margin-top: .5em
      font-size: 5em
    .inner
      max-width: 900px
      align-self: flex-end
    .byline
      color: lighten($landoBlue, 20%)
      p
        line-height: 2
        font-size: 2em
  blockquote
    margin 2em 0
    padding 2em
    font-size 1.5rem
    color $darkTextColor
    border-left 0
    background $lightGrey
    font-style italic
    display flex
    flex-wrap wrap
    position relative
    &:before
      display flex
      font-size 2em
      content '"'
      color $landoPink

    p
      width 90%
      line-height 2
      padding-left 10px
      padding-right 10px
      margin-bottom 1em
    ul
      position absolute
      right 1em
      bottom 1em
      margin 0
      li
        list-style none
        font-style normal
        font-size .65em
        color $landoPink
        &:before
          content '~'
    small
        list-style none
        font-style normal
        font-size .65em
        color $landoPink
  #hs_form
    .inner
      max-width: 900px

.content-wrapper-fourohfour
  max-width 1140px
  .custom-block
    p
      font-weight 300
      font-size 1.33rem
      letter-spacing -1.04px
      color black
      font-weight 300
      font-size 1.33rem
      letter-spacing -1.04px
      color #000
    &.point
      border-bottom 1px solid $borderColor
      margin-bottom 2em
      border-top 1px solid $borderColor
      padding 2em 0
      &.vids
        div
          width 100%
        .video-responsive
          margin-top 0

@media (max-width: $MQMobile)
  #content
    #hero
      h1
        font-size: 4em
      .byline
        p
          font-size: 1.5em
@media (max-width: $MQMobileNarrow)
  #content
    #hero
      h1
        font-size: 2.8em
      .byline
        font-size: 1em
</style>
