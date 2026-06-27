<template>
  <div class="plans-wrapper">
    <div class="page-header plans-header">
      <img v-if="planetImage" :src="planetImage" class="feature-planet" alt="" />
      <h1>Free community <span class="emphasis">support</span>.</h1>
      <p>Lando Alliance provides free docs, public issue queues, and community support channels for Lando users. If you're having a problem with Lando or want to ask a question, start with these public resources.</p>

    </div>
    <div class="plans">
      <div v-for="(plan, index) in plans" :key="index" class="plan">
        <h2 class="plan-title" v-html="plan.title"></h2>
        <p class="plan-description" v-html="plan.description"></p>
        <a class="plan-link btn" :href="plan.linkHref" target="_blank" rel="noopener noreferrer">{{ plan.linkText }}</a>
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
          title: '<span class="emphasis">1.</span> Docs',
          description: 'The Lando docs are free and public. They cover installation, configuration, recipes, and common workflows for development and DevOps tasks.',
          linkHref: 'https://docs.lando.dev/',
          linkText: 'Visit Docs',
        },
        {
          title: '<span class="emphasis">2.</span> GitHub',
          description: 'Lando is developed in the open. Search public GitHub issues for existing reports, fixes, workarounds, and conversations before opening a new issue.',
          linkHref: 'https://github.com/issues?q=is%3Aopen+is%3Aissue+org%3Alando',
          linkText: 'Search Issues',
        },
        {
          title: '<span class="emphasis">3.</span> Slack',
          description: 'Join the free Lando Slack to ask questions, share context, and learn from other developers using Lando in their own projects and organizations.',
          linkHref: 'https://www.launchpass.com/devwithlando',
          linkText: 'Join Us',
        },
      ]),
    },
  },
};
</script>

<style lang="scss">
@import '../styles/main.scss';

.plans {
  display: flex;
  gap: 2.625rem;
  margin-bottom: 5rem;
  .plan {
    border: 1.5px dashed #794993;
    border-radius: 8px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    filter: drop-shadow(0px 2px 60px rgba(38, 29, 45, 0.2));
    flex-grow: 1;
    flex-basis: 33%;
    padding: 2.9375rem;
    font-size: 1.125rem;
    text-align: center;
    h2 {
      color: var(--c-text-lightest);
      font-size: 2.5rem;
      line-height: 1.2;
      margin: 0 0 1rem !important;
      padding-top: .5em;
    }
    .plan-description {
      flex: 1;
      line-height: 1.65;
      min-height: 12rem;
      margin-bottom: 2rem;
    }
    .btn {
      align-self: center;
      background: var(--c-brand);
      border: 2px solid var(--c-brand);
      color: #fff;
      text-decoration: none;
      &:after {
        background: currentColor;
        content: '';
        display: inline-block;
        height: 14px;
        margin-left: 1rem;
        mask: url('../../public/images/button-arrow.svg') center / contain no-repeat;
        width: 9px;
        -webkit-mask: url('../../public/images/button-arrow.svg') center / contain no-repeat;
      }
    }
  }
}


@media (max-width: $MQMobile) {
  .plans {
    display: block;
    .plan {
      flex-basis: 100%;
      margin-bottom: 2.625rem;
    }
  }
}
</style>
