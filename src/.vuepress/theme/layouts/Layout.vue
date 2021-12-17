<template>
  <Layout>
    <template #navbar>
      <Navbar />
    </template>
    <template #page-bottom>
      <FooterCta 
        heading="One small click for you..."
        text="...one giant leap for developers everywhere. Download Lando and start accelerating your development workflow today."
        ctaText="Get Lando"
        ctaLink="/download/"
      />
      <div class="my-footer">This is my custom page footer</div>
    </template>
  </Layout>
</template>

<script>
import Layout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'

export default {
  components: {
    Layout,
  },
}
</script>

<style lang="css">
.my-footer {
  text-align: center;
}
</style>
