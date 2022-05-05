<template>
  <div class="plans-wrapper">
    <div class="plans-header">
      <img v-if="planetImage" :src="planetImage" class="feature-planet" />
      <h1>Get some help.</h1>
      <p>Lando is a free and open source project. If you're having a problem with Lando or want to get an answer to a question, don't go immediately post an issue to GitHub or fill out our contact form. Make sure you check out these three resources first.</p>

    </div>
    <div class="plans">
      <div v-for="(plan, index) in plans" :key="index" class="plan">
        <h2 class="plan-title" v-html="plan.title"></h2>
        <p class="plan-description" v-html="plan.description"></p>
        <a class="plan-link btn" :href="plan.linkHref">{{ plan.linkText }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    planetImage: {
      type: String,
      default: 'images/yellow-planet.svg',
    },
    plans: {
      type: Array,
      default: () => ([
        {
          title: '1. Lando Docs',
          description: 'A LARGE number of Lando questions can be answered by reading the Lando docs. Double-check your `.lando.yml` and make sure you understand all configuration options before taking any further steps.',
          linkHref: 'https://docs.lando.dev/',
          linkText: 'Lando Docs',
        },
        {
          title: '2. Google It!',
          description: 'Lando has been around for a few years. Use your Google-fu and search for relevant error codes; it\'s likely you might find an old GitHub issue or blog post about your problem.',
          linkHref: 'https://www.google.com',
          linkText: 'Google Time',
        },
        {
          title: '3. Lando Slack',
          description: 'We have a very dedicated core team (which relies on your <a href="https://github.com/sponsors/lando">sponsorship</a>) which tries to answer questions on the Slack. We\'re also backed up by a community of thousands of users who often chime in with helpful tips.',
          linkHref: 'https://launchpass.com/devwithlando',
          linkText: 'Register',
        },
      ]),
    },
  },
};
</script>

<style lang="scss">
@import '../styles/main.scss';
.plans-header {
  text-align: center;
  margin: 10rem 0 6rem 0;
  .feature-planet {
    width: 76px;
  }
  h1 {
    font-size: 4rem;
    font-weight: 800;
    margin-bottom: 2rem;
  }
  p {
    max-width: 900px;
    margin: auto;
  }
}

.plans {
  display: flex;
  gap: 2.625rem;
  text-align: center;
  margin-bottom: 5rem;
  .plan {
    flex-grow: 1;
    flex-basis: 33%;
    background: $background-light;
    padding: 2.9375rem;
    color: $space-grey;
    font-size: 1rem;
    border-radius: 6px;
    box-shadow: 0px 14px 40px rgba(73, 66, 78, 0.14);
    h2 {
      color: $space-grey;
    }
    .plan-description {
      min-height: 12rem;
      margin-bottom: 2rem;
    }
    .btn {
      background: $background-light;
      border: 2px solid var(--c-brand);
      color: var(--c-brand);
      &:after {
        content: url('../../public/images/button-arrow.svg');
        margin-left: 1rem;
      }
    }
  }
}


@media (max-width: $MQMobile) {
  .plans-header {
    margin-top: 8rem;
  }
  .plans {
    display: block;
    .plan {
      flex-basis: 100%;
      margin-bottom: 2.625rem;
    }
  }
}
</style>
