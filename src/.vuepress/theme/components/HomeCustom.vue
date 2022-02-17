<template>
  <main class="page">
    <div class="theme-default-content">
      <Hero 
        heroHeading='Coding at <div class="emphasis">lightspeed</div>'
        heroText='Push-button development environments hosted on your computer or in the cloud. Automate your developer workflow and share it with your team.'
        ctaLink='/download/'
        ctaText='Get Lando!'
      >
        <Stats />
      </Hero>

      <Feature 
        featureHeading='Start coding <div class="emphasis">instantly</div>'
        featureText='Lando creates your dev environment and seeds it. Because you dont have time to configure Docker, debug tooling, or any of that space snarge.'
        planetImage="images/Planet.svg"
      >
        <template v-slot:afterFeatureContent>
          <Icons />
        </template>
        <CodeHighlightCustom language="shell">
          <pre>
# Create a new directory.
mkdir drupal9 && cd drupal9

# Initialize a new Drupal 9 site.
lando init --recipe=drupal9

# Start your engines.
lando start
        </pre>
        </CodeHighlightCustom>
      </Feature>

      <Feature featureHeading='Integrate with your <div class="emphasis">existing dev tools</div>'
        featureText="Make yourself at home in the stars. Pull projects down from Lando's hosting partners. Use your favorite IDE.  See CLI tools working out-of-the-box."
        orientation='right'
        customClass='orbit-2'
      >
        <img src="images/integrate-dev-tools.png" alt="Image of developer and their associated tools" />
      </Feature>

      <Feature 
        featureHeading='Easily share with <div class="emphasis">your team</div>'
        featureText='Distribute working dev environments to your whole team. Junior devs get a rocket boost while senior devs can tune settings to make their best astro racer.'
        customClass='orbit-3'
        planetImage="images/Planet2.svg"
      >
        <img src="images/share-with-team.png" alt="Image of developer distributing Lando config to their team." />
      </Feature>

      <Logos />

      <Quotes />
    </div>
    <FooterCta
      heading="One small click for you..."
      text="...one giant leap for developers everywhere. Download Lando and start accelerating your development workflow today."
      ctaText="Get Lando"
      ctaLink="/download/"
    />
  </main>
</template>

<script setup>
  import Hero from "./Hero.vue";
  import Feature from "./Feature.vue";
  import Icons from "./Icons.vue";
  import Logos from "./Logos.vue";
  import Quotes from "./Quotes.vue";
  import FooterCta from '../components/FooterCta.vue';
  import Footer from '../components/Footer.vue';
  import CodeHighlightCustom from '../components/CodeHighlightCustom.vue';
	document.documentElement.classList.toggle('dark', true);

</script>

<style lang="scss" scoped>

</style>
