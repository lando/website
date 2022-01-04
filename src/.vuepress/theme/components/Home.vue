<template>
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
    <CodeGroup>
      <CodeGroupItem title="LAUNCH">
        <code>
        # Create a new directory.
        mkdir drupal9 && cd drupal9
        # Initialize a new Drupal 9 site.
        lando init --recipe=drupal9

        # Start your engines.
        lando start
        </code>

      </CodeGroupItem>
    </CodeGroup>
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
</template>

<script>
  import Hero from "./Hero.vue";
  import Feature from "./Feature.vue";
  import Icons from "./Icons.vue";
  import Logos from "./Logos.vue";
  import Quotes from "./Quotes.vue";
  import FooterCta from '../components/FooterCta.vue';
  import Footer from '../components/Footer.vue';
export default {
}
</script>

<style lang="scss" scoped>
  .hero-wrapper {
    height: 100vh;
    .hero {
      display: flex;
      margin: 2rem 0em 8rem 0rem;
      .hero-left, .hero-right {
        width: 50%;
        font-size: 1.375rem;
      }
      .hero-left {
        z-index: 10;
        h2 {
          font-size: 4rem;
          font-weight: 800;
          line-height: 4rem;
        }
      }
      .hero-right {
        z-index: 4;
        display: flex;
        justify-content: center;
        align-self: center;
        align-items: center;
        max-height: 30vh;
      }
      .orbit {
        position: absolute;
        border: 1.5px dashed #794993;
        border-radius: 100%;
      }
      .inner-orbit {
        width: 1081px;
        height: 469px;
      }
      .outer-orbit {
        width: 2081px;
        height: 869px;
      }
    }
  }
</style>
