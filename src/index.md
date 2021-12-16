---
---

<Hero 
  heroHeading='Coding at <div class="emphasis">lightspeed</div>'
  heroText='Push-button development environments hosted on your computer or in the cloud. Automate your developer workflow and share it with your team.'
  ctaLink='/download/'
  ctaText='Get Lando!'
>
  <Stats />
</Hero>

<FeatureLeft 
  featureHeading='Start Coding <div class="emphasis">Instantly</div>'
  featureText='Lando creates your dev environment and seeds it. Because you dont have time to configure Docker, debug tooling, or any of that space snarge.'
>
<template v-slot:afterFeatureContent>
  <Icons />
</template>
<CodeGroup>
  <CodeGroupItem title="LAUNCH">

  ```bash:no-line-numbers
  # Create a new directory.
  mkdir drupal9 && cd drupal9

  # Initialize a new Drupal 9 site.
  lando init --recipe=drupal9

  # Start your engines.
  lando start
  ```

  </CodeGroupItem>
</CodeGroup>
</FeatureLeft>


## Integrate With Your Existing Dev Tools
Make yourself at home in the stars. Pull projects down from Lando's hosting partners. Use your favorite IDE.  See CLI tools working out-of-the-box.

<FeatureLeft 
  featureHeading='Easily share with <div class="emphasis">your tam</div>'
  featureText='Distribute working dev environments to your whole team. Junior devs get a rocket boost while senior devs can tune settings to make their best astro racer.'
>
<CodeGroup>
  <CodeGroupItem title="LAUNCH">

  ```yaml:no-line-numbers
    name: lando-101
    recipe: lamp
    config:
      php: 7.4
    services:
      mailhog:
        type: mailhog:v1.0.0
        portforward: true
        hogfrom:
          - appserver
  ```

  </CodeGroupItem>
</CodeGroup>
</FeatureLeft>

