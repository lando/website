<template>
  <main class="page">
    <div class="theme-default-content">
      <Hero
        heroHeading='Free & open source dev tools for <div class="emphasis">the people</div>'
        heroText='Lando is a free and open-source dev tool run by the Lando Alliance, a 501(c)(3) nonprofit. Our mission is to expand access to modern web development by keeping essential tools, learning resources, and community support free and open.'
        ctaLink='https://docs.lando.dev/install'
        ctaText='Get Lando'
        ctaTarget='_blank'
        ctaRel='noopener noreferrer'
        secondaryCtaLink='https://www.lando.dev/mission'
        secondaryCtaText='Our Mission'
      >
        <template v-slot:heroVisual>
          <HomeHeroVisual />
        </template>
        <Stats />
      </Hero>

      <Feature
        featureHeading='Start building <div class="emphasis">today</div>'
        featureText='Lando helps people spin up consistent development environments without paid licenses or proprietary barriers. Start with the free installer and public docs maintained by Lando Alliance.'
        planetImage="images/Planet.svg"
      >
        <template v-slot:afterFeatureContent>
          <nav class="feature-resource-links" aria-label="Getting started resources">
            <a href="https://docs.lando.dev/install" target="_blank" rel="noopener noreferrer">Install Lando</a>
            <a href="https://docs.lando.dev" target="_blank" rel="noopener noreferrer">Read the Docs</a>
          </nav>
        </template>
        <StartBuildingVisual />
      </Feature>

      <Feature featureHeading='Learn with <div class="emphasis">open resources</div>'
        featureText="Lando Alliance publishes free learning materials, community stories, and events so developers, educators, nonprofits, and small teams can build confidence with modern web workflows."
        orientation='right'
        customClass='orbit-2'
      >
        <template v-slot:afterFeatureContent>
          <nav class="feature-resource-links" aria-label="Learning resources">
            <a href="https://www.lando.dev/blog" target="_blank" rel="noopener noreferrer">Blog</a>
            <a href="https://www.lando.dev/events" target="_blank" rel="noopener noreferrer">Events</a>
            <a href="https://www.youtube.com/channel/UCl_QBNuGJNoo7yH-n18K7Kg" target="_blank" rel="noopener noreferrer">YouTube</a>
          </nav>
        </template>
        <OpenResourcesVisual />
      </Feature>

      <Feature
        featureHeading='Build with <div class="emphasis">our community</div>'
        featureText='Lando is developed in the open with public support channels where users can ask questions, report issues, share fixes, and help improve the tools everyone relies on.'
        customClass='orbit-3'
        planetImage="images/Planet2.svg"
      >
        <template v-slot:afterFeatureContent>
          <nav class="feature-resource-links" aria-label="Community resources">
            <a href="https://www.launchpass.com/devwithlando" target="_blank" rel="noopener noreferrer">Slack</a>
            <a href="https://github.com/issues?q=is%3Aopen+is%3Aissue+org%3Alando" target="_blank" rel="noopener noreferrer">GitHub Issues</a>
            <a href="https://www.lando.dev/events" target="_blank" rel="noopener noreferrer">Find an Event</a>
          </nav>
        </template>
        <CommunityVisual />
      </Feature>

      <ul class="impact-cards" aria-label="Lando Alliance impact areas">
        <Card
          v-for="card in impactCards"
          :key="card.link || card.title"
          :kicker="card.kicker"
          :title="card.title"
          :text="card.text"
          :link="card.link"
        />
        <StatsCard />
        <Card
          :kicker="originCard.kicker"
          :title="originCard.title"
          :text="originCard.text"
          :link="originCard.link"
        />
      </ul>
      <Logos />
    </div>
  </main>
</template>

<script setup>
  import Card from './Card.vue';
  import Hero from './Hero.vue';
  import Feature from './Feature.vue';
  import CommunityVisual from './CommunityVisual.vue';
  import HomeHeroVisual from './HomeHeroVisual.vue';
  import Logos from './Logos.vue';
  import OpenResourcesVisual from './OpenResourcesVisual.vue';
  import StatsCard from './StatsCard.vue';
  import StartBuildingVisual from './StartBuildingVisual.vue';

  const impactCards = [
    {
      kicker: 'Community',
      title: 'Streamlined dev with <span class="emphasis">Lando</span>',
      text: 'Watch Sean Robertson\'s Drupal 4 Gov session on using Lando to avoid "works on my machine" drift and standardize project setup for real teams.',
      link: 'https://www.youtube.com/watch?v=LLd1iAsiikQ',
    },
  ];

  const originCard = {
    kicker: 'Our Origin Story',
    title: 'Journey to <span class="emphasis">Lando</span>',
    text: 'The Kalabox-to-Lando story shows how a long-running open-source project learned from early mistakes, opened up its tooling, and rebuilt around simpler, more flexible developer workflows.',
    link: 'https://www.lando.dev/blog/2017/10/24/journey-lando.html',
  };

  // Set Dark Mode for everything
  if (typeof window !== 'undefined') {
    const htmlEl = window.document.querySelector('html');
    htmlEl === null || htmlEl === void 0 ? void 0 : htmlEl.classList.toggle('dark', true);
  }

</script>

<style lang="scss" scoped>
  .impact-cards {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    list-style: none;
    margin: 6rem 0 0;
    padding: 0;
  }

  .feature-resource-links {
    display: flex;
    flex-wrap: wrap;
    gap: .35rem;
    margin: 1.25rem 0;
    font-size: 1rem;
    font-weight: 700;
    position: relative;
    text-transform: uppercase;
    z-index: 5;
    a {
      color: var(--c-brand-light);
      text-decoration: none;
      &:hover {
        color: var(--c-brand);
        text-decoration: underline;
      }
      & + a::before {
        color: var(--c-text-lightest);
        content: "|";
        display: inline-block;
        font-weight: 400;
        margin: 0 .35rem 0 0;
      }
    }
  }

  @media (max-width: 959px) {
    .impact-cards {
      gap: 1.5rem;
      grid-template-columns: 1fr;
    }
  }
</style>
