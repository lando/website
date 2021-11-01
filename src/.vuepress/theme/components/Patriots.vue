<template>
  <div id="patriots">
    <div v-if="!hideHeader" class="sponsor-patriot-block-header">
      <h4>Hosting Partners</h4>
    </div>
    <div class="sponsor-patriot-block" v-for="(patriot, index) in patriots" :key="index">
      <a :href="patriot.url" target="_blank">
        <div class="sponsor-patriot-block-image"><img :src="patriot.logo" :alt="patriot.name"></div>
      </a>
    </div>
  </div>
</template>


<script>
import sponsors from './../../public/api/sponsors.json';

export default {
  props: {
    hideHeader: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      patriots: [],
    };
  },
  mounted() {
    this.patriots = sponsors.filter(sponsor => sponsor.type == 'patriot');
  },
};
</script>

<style lang="stylus">
#patriots
  background: white;
  padding: 4em 2em
  text-align: center
  display: flex
  flex-wrap: wrap
  .sponsor-patriot-block
    display: inline-flex
    box-sizing: border-box
    padding: 2em 1em
    flex: 3
    align-items: center
    justify-content: center
  .sponsor-patriot-block-header
    display: block
    margin: auto
    padding: 2em 0em
    margin: auto
    flex: 0 0 100%
    h4
      font-family: "Poppins", "Helvetica Neue", Arial, sans-serif
      font-size: 2.5em
      line-height: .8em
  .sponsor-patriot-block-image
    img
      margin: 0
      max-height: 150px
@media (max-width: $MQMobile)
  #patriots
    text-align: center
    .sponsor-patriot-block-header
      display: block
      margin: auto
    .sponsor-patriot-block
      padding-top: 3em
      max-width: 50%
@media (max-width: $MQMobileNarrow)
  #patriots
    .sponsor-patriot-block-header
      h4
        font-size: 2em
    .sponsor-patriot-block
      padding-top: 1em
      padding-bottom: 0
      max-width: 90%
    .sponsor-patriot-block-image
      img
        margin: 0
        width: 200px
        max-height: none
</style>
