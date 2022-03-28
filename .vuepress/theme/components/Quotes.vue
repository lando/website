<template>
  <carousel v-if="isMobile" :items-to-show="1" class="quotes">
    <slide v-for="(quote, index) in quotes" :key="index" class="quote">
      <div class="quote-quote">“</div>
      <div class="quote-text" v-html="quote.text"></div>
      <div class="quote-author" v-html="quote.author"></div>
    </slide>
    <template #addons>
      <navigation />
    </template>
  </carousel>
  <ul v-else class="quotes">
    <li v-for="(quote, index) in quotes" :key="index" class="quote">
      <div class="quote-quote">“</div>
      <div class="quote-text" v-html="quote.text"></div>
      <div class="quote-author" v-html="quote.author"></div>
    </li>
  </ul>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import {Carousel, Slide, Navigation} from 'vue3-carousel';

export default {
  props: {
    quotes: {
      type: Array,
      default: () => ([
        {
          text: 'People love it when I introduce them to Lando.',
          author: '– Federal Contractor, US House of Representatives',
        },
        {
          text: 'I don\'t have to handhold junior devs anymore... thank god in heaven.',
          author: '– Senior Developer, Blue State Digital',
        },
        {
          text: 'Lando lets our devs just get to freaking work.',
          author: '– Systems Developer, University of California',
        },
        {
          text: 'The [hosting partner] integrations are the bee\'s knees.',
          author: '– Enterprise Consultant',
        },
      ]),
    },
  },
  computed: {
    isMobile() {
      return window.innerWidth < 800;
    },
  },
  components: {
    Carousel,
    Slide,
    Navigation,
  },
};
</script>

<style lang="scss" scoped>
@import '../../styles/palette.scss';
  .quotes {
    display: flex;
    flex-wrap: wrap;
    gap: 2.5rem;
    list-style: none;
    margin-top: 6rem;
    .quote {
      flex-grow: 2;
      flex-basis: calc(50% - 3rem);
      border: 1.5px dashed #794993;
      box-sizing: border-box;
      filter: drop-shadow(0px 2px 60px rgba(38, 29, 45, 0.2));
      border-radius: 10px;
      width: 48%;
      padding: 1.75rem;
      margin-right: 1.125rem;
      display: block;
      text-align: left;
      .quote-quote {
        font-weight: 800;
        font-size: 12.5rem;
        font-style: normal;
        line-height: 2rem;
        color: var(--c-brand);
        margin-top: 4rem;
      }
      .quote-text {
        font-weight: bold;
        font-size: 1.875rem;
        line-height: 2.375rem;
        letter-spacing: -0.01rem;
      }
      .quote-author {
        font-size: 1.25rem;
        line-height: 150%;
        margin-top: .75rem;
      }
    }
  }

@media (max-width: $MQNarrow) {
  .quotes {
    .quote {
      padding-bottom: 2.75rem;
      .quote-text {
        font-size: 1.375rem;
      }
      .quote-author {
        font-size: 1.125rem;
      }
    }
  }
}

@media (max-width: $MQMobile) {
  .quotes {
    .quote {
      margin: auto;
      flex-basis: 100%;
    }
  }
}
</style>
