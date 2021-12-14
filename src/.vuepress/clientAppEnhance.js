import { defineClientAppEnhance } from "@vuepress/client";
import Hero from "./theme/components/Hero.vue";
import Navbar from "./theme/components/Navbar.vue";

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.component("Hero", Hero);
  app.component("Navbar", Navbar);
});
