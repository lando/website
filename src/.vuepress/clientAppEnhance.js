import { defineClientAppEnhance } from "@vuepress/client";
import Hero from "./theme/components/Hero.vue";
import Navbar from "./theme/components/Navbar.vue";
import Stats from "./theme/components/Stats.vue";

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.component("Hero", Hero);
  app.component("Navbar", Navbar);
  app.component("Stats", Stats);
});
