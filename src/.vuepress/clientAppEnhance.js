import { defineClientAppEnhance } from "@vuepress/client";
import Hero from "./theme/components/Hero.vue";
import Navbar from "./theme/components/Navbar.vue";
import Stats from "./theme/components/Stats.vue";
import FeatureLeft from "./theme/components/FeatureLeft.vue";
import Icons from "./theme/components/Icons.vue";

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.component("Hero", Hero);
  app.component("Navbar", Navbar);
  app.component("Stats", Stats);
  app.component("FeatureLeft", FeatureLeft);
  app.component("Icons", Icons);
});
