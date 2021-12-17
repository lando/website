import { defineClientAppEnhance } from "@vuepress/client";
import Hero from "./theme/components/Hero.vue";
import Navbar from "./theme/components/Navbar.vue";
import Stats from "./theme/components/Stats.vue";
import Feature from "./theme/components/Feature.vue";
import Icons from "./theme/components/Icons.vue";

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.component("Hero", Hero);
  app.component("Navbar", Navbar);
  app.component("Stats", Stats);
  app.component("Feature", Feature);
  app.component("Icons", Icons);
});
