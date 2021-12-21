import { defineClientAppEnhance } from "@vuepress/client";
import Hero from "./theme/components/Hero.vue";
import Navbar from "./theme/components/Navbar.vue";
import Stats from "./theme/components/Stats.vue";
import Feature from "./theme/components/Feature.vue";
import Icons from "./theme/components/Icons.vue";
import Logos from "./theme/components/Logos.vue";
import Quotes from "./theme/components/Quotes.vue";
import FooterCta from "./theme/components/FooterCta.vue";
import Footer from "./theme/components/Footer.vue";
import Subscribe from "./theme/components/Subscribe.vue";

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.component("Hero", Hero);
  app.component("Navbar", Navbar);
  app.component("Stats", Stats);
  app.component("Feature", Feature);
  app.component("Icons", Icons);
  app.component("Logos", Logos);
  app.component("Quotes", Quotes);
  app.component("FooterCta", FooterCta);
  app.component("Footer", Footer);
  app.component("Subscribe", Subscribe);
});
