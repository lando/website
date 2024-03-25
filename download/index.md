---
title: Get Lando!
metaTitle: Get Lando | Lando
description: Download Lando and take your local development and DevOps workflow to lightspeed.
pageClass: download
---

<script setup>
import {UAParser} from 'ua-parser-js';
import {computed} from 'vue';

const parser = new UAParser();


const isWindows = computed(() => {
  const os = parser.getOS();
  switch (os.name) {
    case 'Windows':
    case 'Windows Phone':
    case 'Windows Mobile':
      return true;
    default:
      return false;
  };
})
</script>

<Feature v-if="isWindows" featureHeading='1. Download & Install Lando'
  :showOrbit="false"
>

  <template v-slot:afterFeatureContent>
    <p>Head over to the releases section of our GitHub page and <a href="https://github.com/lando/lando/releases" target="_blank">download</a> the version that makes sense for your operating system.</p>
    <p>Double click the package in the download and consult the <a href="https://docs.lando.dev/basics/installation.html" target="_blank">documentation</a> if you have trouble.</p>
  </template>
  <a href="https://github.com/lando/lando/releases" class="btn btn-primary btn-full-width">Download Lando</a>
</Feature>

<Feature v-else featureHeading='1. Get Lando'
  :showOrbit="false"
>

  <template v-slot:afterFeatureContent>
    <p>Run our convenience script one-liner to get started.</p>
    <p>Or check out the <a href="https://docs.lando.dev/install.html" target="_blank">docs</a> to customize your install.</p>
  </template>

```bash:no-line-numbers
# Paste our convenience script into a terminal and execute
/bin/bash -c "$(curl -fsSL https://get.lando.dev/setup-lando.sh)"
```
</Feature>

<Feature featureHeading='2. Spin Up Your First App'
  :showOrbit="false"
>

  <template v-slot:afterFeatureContent>
    <p>
      Try spinning up a basic <em>Hello World!</em> app before spinning up <a href="https://docs.lando.dev/basics/first-app.html" target="_blank">more complex apps</a> or trying any of our <a href="https://docs.lando.dev/core/v3/recipes.html" target="_blank">myriad recipes</a>.
    </p>
  </template>


```bash:no-line-numbers
# Create a new directory for this example and enter it
mkdir hello && cd hello

# And add a nice homepage
echo "<h1>Hellooo what have we here?</h1>" > index.html

# Initialize a basic LAMP stack using the cwd as the source
lando init --source cwd --recipe lamp --webroot . --name hello-lando

# Start it up
lando start
```

</Feature>

<Feature featureHeading='3. Get Set Up For Success!'
  :showOrbit="false"
>
  <template v-slot:afterFeatureContent>
    <p>We'll send you a welcome email with all you need to know to get the most out of Lando.</p>
    <p>This will also include things like code examples, helpful development and support resources, project updates and a monthly digest of helpful Lando blog posts.</p>
  </template>

  <Subscribe />
</Feature>
