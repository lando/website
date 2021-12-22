<template>
  <Layout>
    <template #navbar>
      <Navbar />
    </template>
    <template #page>
      <Home v-if="frontmatter.layout === 'home'" />
    </template>
    <template #page-bottom>
      <FooterCta 
        heading="One small click for you..."
        text="...one giant leap for developers everywhere. Download Lando and start accelerating your development workflow today."
        ctaText="Get Lando"
        ctaLink="/download/"
      />
      <Footer />
    </template>
  </Layout>
</template>

<script>
import Layout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
import Home from '../components/Home.vue'

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
