<template>
  <div class="plans-wrapper">
    <div class="plans-header">
      <img v-if="planetImage" :src="planetImage" class="feature-planet" />
      <h1>Free community support.</h1>
      <p>Lando Alliance provides free docs, public issue queues, and community support channels for Lando users. If you're having a problem with Lando or want to ask a question, start with these public resources.</p>

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
      default: '/images/yellow-planet.svg',
    },
    plans: {
      type: Array,
      default: () => ([
        {
          title: '1. Lando Docs',
          description: 'The Lando docs are free and public. They cover installation, configuration, recipes, and common workflows for development and DevOps tasks.',
          linkHref: 'https://docs.lando.dev/',
          linkText: 'Lando Docs',
        },
        {
          title: '2. GitHub Issues',
          description: 'Lando is developed in the open. Search public GitHub issues for existing reports, fixes, workarounds, and conversations before opening a new issue.',
          linkHref: 'https://github.com/issues?q=is%3Aopen+is%3Aissue+org%3Alando',
          linkText: 'Search Issues',
        },
        {
          title: '3. Lando Slack',
          description: 'Join the free Lando Slack to ask questions, share context, and learn from other developers using Lando in their own projects and organizations.',
          linkHref: 'https://www.launchpass.com/devwithlando',
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
